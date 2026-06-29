import "server-only";

import { headers } from "next/headers";

/* Shared server-side hardening for the public lead forms (contact + intake).
   Both forms write user input into an HTML email body and accept anonymous
   traffic, so they share one escaper and one rate-limit bucket. */

/** Escape user input destined for an HTML email body so a submission can
    never inject markup (or worse) into the message we read. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* In-memory rate limit: max 5 submissions per 10 minutes per IP, shared
   across both forms. NOTE: serverless instances each hold their own Map, so
   this is best-effort only — an attacker spread across instances can exceed
   it. Platform-level rate limiting (e.g. Vercel WAF) is the durable layer;
   this just cheaply absorbs naive repeat submissions. */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateBuckets = new Map<string, { count: number; windowStart: number }>();
let lastPrune = 0;

export function isRateLimited(ip: string): boolean {
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

export async function clientIp(): Promise<string> {
  const headerList = await headers();
  // First hop of x-forwarded-for is the original client (as set by the platform).
  const forwarded = headerList.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}
