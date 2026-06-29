import "server-only";

import { FieldValue, Timestamp, type DocumentData } from "firebase-admin/firestore";
import { getDb, isFirebaseConfigured } from "./firebase-admin";
import type { Inquiry, InquirySource, InquiryStatus } from "@/types";

const COLLECTION = "inquiries";

/* James is in Michigan — render every timestamp in Eastern time so the admin
   reads leads in his own clock, and format on the SERVER so the same string
   ships to the client (no hydration drift from per-client timezones). */
const TZ = "America/New_York";
const SHORT = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  timeZone: TZ,
});
const FULL = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  timeZone: TZ,
});

/** Whether durable storage is available (drives graceful fallbacks). */
export function inquiriesEnabled(): boolean {
  return isFirebaseConfigured();
}

/** A new lead to persist. Server-supplied metadata (status, createdAt) is
    added here so callers only pass user/derived data. */
export interface NewInquiry {
  source: InquirySource;
  name: string;
  email: string;
  company?: string;
  type: string;
  budget: string;
  message: string;
  features?: string[];
  timeline?: string;
  estimate?: number;
  ip?: string;
}

/* Firestore rejects fields whose value is `undefined`; drop them. */
function compact<T extends object>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined),
  ) as Partial<T>;
}

/** Persist a lead. Returns the new document id. */
export async function addInquiry(data: NewInquiry): Promise<string> {
  const db = getDb();
  const ref = await db.collection(COLLECTION).add({
    ...compact(data),
    status: "new" satisfies InquiryStatus,
    createdAt: FieldValue.serverTimestamp(),
  });
  return ref.id;
}

/** All leads, newest first (capped — a one-person inbox won't approach it). */
export async function listInquiries(): Promise<Inquiry[]> {
  const db = getDb();
  const snap = await db
    .collection(COLLECTION)
    .orderBy("createdAt", "desc")
    .limit(500)
    .get();
  return snap.docs.map((doc) => toInquiry(doc.id, doc.data()));
}

const VALID_STATUSES: readonly InquiryStatus[] = ["new", "warn", "won", "muted"];

/** Move a lead through its lifecycle (new → following up → won / archived). */
export async function updateInquiryStatus(
  id: string,
  status: InquiryStatus,
): Promise<void> {
  if (!VALID_STATUSES.includes(status)) {
    throw new Error(`Invalid inquiry status: ${status}`);
  }
  const db = getDb();
  await db.collection(COLLECTION).doc(id).update({ status });
}

function toInquiry(id: string, data: DocumentData): Inquiry {
  /* serverTimestamp() is null for the brief window before the write commits;
     we only ever read committed docs, but guard anyway. */
  const ts = data.createdAt;
  const date =
    ts instanceof Timestamp ? ts.toDate() : ts?.toDate?.() ?? new Date(0);

  return {
    id,
    source: data.source === "intake" ? "intake" : "contact",
    name: String(data.name ?? ""),
    email: String(data.email ?? ""),
    company: data.company ? String(data.company) : undefined,
    type: String(data.type ?? ""),
    budget: String(data.budget ?? ""),
    message: String(data.message ?? ""),
    status: VALID_STATUSES.includes(data.status) ? data.status : "new",
    createdAt: date.toISOString(),
    dateLabel: SHORT.format(date),
    dateFull: FULL.format(date),
    features: Array.isArray(data.features)
      ? data.features.map((f: unknown) => String(f))
      : undefined,
    timeline: data.timeline ? String(data.timeline) : undefined,
    estimate: typeof data.estimate === "number" ? data.estimate : undefined,
    ip: data.ip ? String(data.ip) : undefined,
  };
}
