import "server-only";

import { cert, getApps, initializeApp, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

/* Server-only Firestore access via the Admin SDK. The service account
   credentials never reach the browser, so Firestore security rules can stay
   fully locked (deny all client access) — every read/write goes through this
   trusted server path. Initialized lazily as a singleton (Next reuses the
   module across requests in a warm function instance). */

let cached: Firestore | null = null;

/** True only when all three service-account env vars are present. */
export function isFirebaseConfigured(): boolean {
  return Boolean(
    process.env.FIREBASE_PROJECT_ID &&
      process.env.FIREBASE_CLIENT_EMAIL &&
      process.env.FIREBASE_PRIVATE_KEY,
  );
}

/** Returns the Firestore handle, initializing the Admin app on first use.
    Throws if the credentials are not configured — callers decide how to
    degrade (the lead forms catch and fall back to email/logging). */
export function getDb(): Firestore {
  if (cached) return cached;

  if (!isFirebaseConfigured()) {
    throw new Error(
      "Firebase Admin is not configured (FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL / FIREBASE_PRIVATE_KEY).",
    );
  }

  const app: App =
    getApps()[0] ??
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        /* Env-stored keys carry literal "\n" sequences; convert them back to
           real newlines. Idempotent when the value already has real newlines
           (e.g. some Vercel inputs), since there is nothing to replace. */
        privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      }),
    });

  cached = getFirestore(app);
  return cached;
}
