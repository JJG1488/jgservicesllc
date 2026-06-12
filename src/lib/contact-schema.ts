import { z } from "zod";

export const PROJECT_TYPES = [
  "Custom web application",
  "Responsive website",
  "E-commerce",
  "SEO & performance",
  "API / integration",
  "Maintenance & care",
  "Not sure yet",
] as const;

export const BUDGET_RANGES = [
  "Under $3,000",
  "$3,000 – $8,000",
  "$8,000 – $15,000",
  "$15,000 – $25,000",
  "$25,000+",
] as const;

/* Single source of truth for contact form validation — imported by both the
   client form (react-hook-form resolver) and the server action (safeParse),
   so a request that bypasses the UI is held to the same rules. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(200),
  email: z.email("Please enter a valid email.").max(200),
  type: z.enum(PROJECT_TYPES),
  budget: z.enum(BUDGET_RANGES),
  company: z.string().trim().max(200).optional(),
  message: z.string().trim().min(8, "Tell us a little about the project.").max(5000),
  /* Honeypot — real users never see or fill this field. The server checks it
     and silently drops submissions where it is non-empty. */
  website: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
