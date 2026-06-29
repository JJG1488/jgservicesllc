"use server";

import { intakeSchema, type IntakeFormData } from "@/lib/intake-schema";
import { addInquiry, inquiriesEnabled } from "@/lib/inquiries";
import { clientIp, escapeHtml, isRateLimited } from "@/lib/lead-guard";
import {
  PROJECT_TYPES,
  FEATURES,
  TIMELINES,
  calcEstimate,
  estimateRange,
} from "@/components/sections/intake/wizard-data";

interface IntakeResult {
  success: boolean;
  error?: string;
}

export async function submitIntake(input: IntakeFormData): Promise<IntakeResult> {
  // Never trust the client — re-validate with the same schema the wizard uses.
  const parsed = intakeSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, error: "Invalid submission." };
  }
  const data = parsed.data;

  // Honeypot: pretend success without doing anything so bots learn nothing.
  if (data.website) {
    return { success: true };
  }

  const ip = await clientIp();
  if (isRateLimited(ip)) {
    return { success: false, error: "Too many requests. Please try again later." };
  }

  // Re-derive every label and figure server-side from the selection ids.
  const typeName =
    PROJECT_TYPES.find((t) => t.id === data.type)?.name ?? data.type;
  const selectedFeatureIds = new Set<string>(data.features);
  const featureNames = FEATURES.filter((f) => selectedFeatureIds.has(f.id)).map(
    (f) => f.name,
  );
  const timelineName =
    TIMELINES.find((t) => t.id === data.timeline)?.name ?? data.timeline;
  const estimate = calcEstimate(data.type, data.features, data.timeline);
  const range = estimateRange(data.type, data.features, data.timeline);

  let stored = false;
  let emailed = false;

  // 1) Durable store first — a lead must survive even if email is down.
  if (inquiriesEnabled()) {
    try {
      await addInquiry({
        source: "intake",
        name: data.name,
        email: data.email,
        company: data.company || undefined,
        type: typeName,
        budget: range,
        message: data.details || "",
        features: featureNames,
        timeline: timelineName,
        estimate,
        ip,
      });
      stored = true;
    } catch (error) {
      console.error("Intake: Firestore write failed:", error);
    }
  }

  // 2) Best-effort email notification.
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      const name = escapeHtml(data.name);
      const email = escapeHtml(data.email);
      const company = data.company ? escapeHtml(data.company) : "";
      const details = data.details
        ? escapeHtml(data.details).replace(/\r?\n/g, "<br />")
        : "";
      const featureLine = featureNames.length
        ? escapeHtml(featureNames.join(", "))
        : "Core only";

      await resend.emails.send({
        from: "JG Services Intake <info@jgservicesllc.com>",
        to: "info@jgservicesllc.com",
        subject: `New Intake: ${data.name.replace(/[\r\n]+/g, " ")} — ${escapeHtml(range)}`,
        html: `
          <h2>New Intake Wizard Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          <p><strong>Project type:</strong> ${escapeHtml(typeName)}</p>
          <p><strong>Features:</strong> ${featureLine}</p>
          <p><strong>Timeline:</strong> ${escapeHtml(timelineName)}</p>
          <p><strong>Estimated range:</strong> ${escapeHtml(range)}</p>
          ${details ? `<p><strong>Details:</strong></p><p>${details}</p>` : ""}
        `,
      });
      emailed = true;
    } catch (error) {
      console.error("Intake: email send failed:", error);
    }
  }

  if (stored || emailed) {
    return { success: true };
  }

  // Nothing configured. Keep dev productive; never silently drop in prod.
  if (process.env.NODE_ENV !== "production") {
    console.log("Intake submission (no store/email configured):", {
      ...data,
      estimate,
      range,
    });
    return { success: true };
  }

  console.warn("Intake: no storage or email configured; submission dropped.");
  return { success: false, error: "Submission service is not configured." };
}
