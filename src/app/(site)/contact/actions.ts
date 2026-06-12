"use server";

import { headers } from "next/headers";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";

interface ContactResult {
  success: boolean;
  error?: string;
}

/* User input lands inside an HTML email body — escape it so a submission
   can never inject markup (or worse) into the message we read. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* In-memory rate limit: max 5 submissions per 10 minutes per IP.
   NOTE: serverless instances each hold their own Map, so this is best-effort
   only — an attacker spread across instances can exceed it. Platform-level
   rate limiting (e.g. Vercel WAF) is the durable layer; this just cheaply
   absorbs naive repeat submissions. */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateBuckets = new Map<string, { count: number; windowStart: number }>();
let lastPrune = 0;

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Periodically prune expired buckets so the Map cannot grow unbounded.
  if (now - lastPrune > RATE_LIMIT_WINDOW_MS) {
    lastPrune = now;
    for (const [key, bucket] of rateBuckets) {
      if (now - bucket.windowStart > RATE_LIMIT_WINDOW_MS) {
        rateBuckets.delete(key);
      }
    }
  }

  const bucket = rateBuckets.get(ip);
  if (!bucket || now - bucket.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateBuckets.set(ip, { count: 1, windowStart: now });
    return false;
  }
  bucket.count += 1;
  return bucket.count > RATE_LIMIT_MAX;
}

async function clientIp(): Promise<string> {
  const headerList = await headers();
  // First hop of x-forwarded-for is the original client (as set by the platform).
  const forwarded = headerList.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

export async function submitContact(input: ContactFormData): Promise<ContactResult> {
  // Never trust the client — re-validate with the same schema the form uses.
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, error: "Invalid submission." };
  }
  const data = parsed.data;

  /* Honeypot: real users never fill the hidden "website" field. Pretend
     success without sending so bots learn nothing from the response. */
  if (data.website) {
    return { success: true };
  }

  const ip = await clientIp();
  if (isRateLimited(ip)) {
    return { success: false, error: "Too many requests. Please try again later." };
  }

  try {
    // If RESEND_API_KEY is configured, send via Resend
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      const name = escapeHtml(data.name);
      const email = escapeHtml(data.email);
      const company = data.company ? escapeHtml(data.company) : "";
      const type = escapeHtml(data.type);
      const budget = escapeHtml(data.budget);
      const message = escapeHtml(data.message).replace(/\r?\n/g, "<br />");

      await resend.emails.send({
        from: "JG Services Contact <onboarding@resend.dev>",
        to: "info@jgservicesllc.com",
        subject: `New Contact: ${data.name.replace(/[\r\n]+/g, " ")}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          ${type ? `<p><strong>Project type:</strong> ${type}</p>` : ""}
          ${budget ? `<p><strong>Budget range:</strong> ${budget}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    } else if (process.env.NODE_ENV !== "production") {
      // Development fallback: log the submission so it is not silently lost.
      console.log("Contact form submission:", data);
    } else {
      // Production without an email key: never log PII — redacted warning only.
      console.warn("Contact form: RESEND_API_KEY is not set; submission dropped.");
      return { success: false, error: "Email service is not configured." };
    }

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, error: "Failed to send message. Please try again." };
  }
}
