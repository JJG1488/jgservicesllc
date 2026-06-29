"use server";

import { contactSchema, type ContactFormData } from "@/lib/contact-schema";
import { addInquiry, inquiriesEnabled } from "@/lib/inquiries";
import { clientIp, escapeHtml, isRateLimited } from "@/lib/lead-guard";

interface ContactResult {
  success: boolean;
  error?: string;
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

  let stored = false;
  let emailed = false;

  /* 1) Durable store first. This is what makes a lead recoverable: even with
     no email provider (or a failing one), the submission lands in Firestore
     and shows up in the admin inbox. */
  if (inquiriesEnabled()) {
    try {
      await addInquiry({
        source: "contact",
        name: data.name,
        email: data.email,
        company: data.company || undefined,
        type: data.type,
        budget: data.budget,
        message: data.message,
        ip,
      });
      stored = true;
    } catch (error) {
      console.error("Contact: Firestore write failed:", error);
    }
  }

  /* 2) Best-effort email notification via Resend (when configured). User input
     is HTML-escaped before interpolation into the email body. */
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      const name = escapeHtml(data.name);
      const email = escapeHtml(data.email);
      const company = data.company ? escapeHtml(data.company) : "";
      const type = escapeHtml(data.type);
      const budget = escapeHtml(data.budget);
      const message = escapeHtml(data.message).replace(/\r?\n/g, "<br />");

      await resend.emails.send({
        from: "JG Services Contact <info@jgservicesllc.com>",
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
      emailed = true;
    } catch (error) {
      console.error("Contact: email send failed:", error);
    }
  }

  // Lead captured by at least one channel.
  if (stored || emailed) {
    return { success: true };
  }

  // Nothing configured: keep dev productive; never silently drop in prod.
  if (process.env.NODE_ENV !== "production") {
    console.log("Contact form submission (no store/email configured):", data);
    return { success: true };
  }

  console.warn("Contact: no storage or email configured; submission dropped.");
  return { success: false, error: "Submission service is not configured." };
}
