import type { InquiryStatus } from "@/types";

/* Pure, client-safe UI metadata for inquiry statuses — kept separate from
   src/lib/inquiries.ts (which pulls in firebase-admin and must never reach the
   browser bundle). The badge.{status} CSS lives in pages.css. */

export const INQUIRY_STATUS_LABEL: Record<InquiryStatus, string> = {
  new: "New",
  warn: "Following up",
  won: "Won",
  muted: "Archived",
};

/* Lifecycle order for the status picker. */
export const INQUIRY_STATUSES: InquiryStatus[] = ["new", "warn", "won", "muted"];

/* Filter pills for the inquiries view: a status id, or "all". */
export const INQUIRY_FILTERS: { id: InquiryStatus | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "new", label: "New" },
  { id: "warn", label: "Following up" },
  { id: "won", label: "Won" },
  { id: "muted", label: "Archived" },
];
