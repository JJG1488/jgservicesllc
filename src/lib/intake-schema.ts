import { z } from "zod";

/* Server-side validation for the intake wizard. The wizard submits the raw
   selection ids (not prices) — the server re-derives names and the estimate
   from wizard-data so a forged request can't inject arbitrary figures. Mirrors
   contact-schema's role: one source of truth, enforced even if the UI is
   bypassed. */

export const INTAKE_TYPE_IDS = ["site", "app", "ecom", "other"] as const;
export const INTAKE_FEATURE_IDS = [
  "design",
  "cms",
  "auth",
  "pay",
  "seo",
  "intg",
] as const;
export const INTAKE_TIMELINE_IDS = ["flex", "std", "rush"] as const;

export const intakeSchema = z.object({
  type: z.enum(INTAKE_TYPE_IDS),
  features: z.array(z.enum(INTAKE_FEATURE_IDS)).max(INTAKE_FEATURE_IDS.length),
  timeline: z.enum(INTAKE_TIMELINE_IDS),
  name: z.string().trim().min(2, "Please enter your name.").max(200),
  email: z.email("Please enter a valid email.").max(200),
  company: z.string().trim().max(200).optional(),
  details: z.string().trim().max(5000).optional(),
  /* Honeypot — real users never see or fill this field. */
  website: z.string().optional(),
});

export type IntakeFormData = z.infer<typeof intakeSchema>;
