import "server-only";

import { getDb, isFirebaseConfigured } from "./firebase-admin";
import { siteConfig } from "../../site.config";
import type { SiteSettings } from "@/types";

/* Admin settings persistence. Single Firestore doc `settings/site`. Profile
   fields fall back to site.config.ts; appearance fields are optional admin
   preferences. Server-only (uses firebase-admin). */

const COLLECTION = "settings";
const DOC = "site";

export function settingsEnabled(): boolean {
  return isFirebaseConfigured();
}

/** Defaults sourced from the single source of truth (site.config.ts). */
export function defaultSettings(): SiteSettings {
  return {
    businessName: siteConfig.name,
    owner: siteConfig.owner,
    email: siteConfig.email,
    phone: siteConfig.phone,
  };
}

/** Saved settings merged over defaults (so new fields always resolve). */
export async function getSiteSettings(): Promise<SiteSettings> {
  const defaults = defaultSettings();
  if (!isFirebaseConfigured()) return defaults;

  try {
    const snap = await getDb().collection(COLLECTION).doc(DOC).get();
    if (!snap.exists) return defaults;
    const data = snap.data() ?? {};
    return {
      businessName: str(data.businessName, defaults.businessName),
      owner: str(data.owner, defaults.owner),
      email: str(data.email, defaults.email),
      phone: str(data.phone, defaults.phone),
      accentA: data.accentA ? String(data.accentA) : undefined,
      accentB: data.accentB ? String(data.accentB) : undefined,
      fontName: data.fontName ? String(data.fontName) : undefined,
      surface: data.surface === "solid" ? "solid" : data.surface === "glass" ? "glass" : undefined,
    };
  } catch (error) {
    console.error("getSiteSettings failed:", error);
    return defaults;
  }
}

export async function saveSiteSettings(settings: SiteSettings): Promise<void> {
  const payload = Object.fromEntries(
    Object.entries(settings).filter(([, v]) => v !== undefined),
  );
  await getDb().collection(COLLECTION).doc(DOC).set(payload, { merge: true });
}

function str(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim() ? value : fallback;
}
