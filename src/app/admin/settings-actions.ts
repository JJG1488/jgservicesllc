"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin-auth";
import { saveSiteSettings, settingsEnabled } from "@/lib/settings";
import type { SiteSettings } from "@/types";

export interface SaveSettingsResult {
  success: boolean;
  error?: string;
}

const HEX = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;

/** Persist admin settings. Re-verifies admin auth and validates/normalizes
    input before writing. */
export async function saveSettings(
  input: SiteSettings,
): Promise<SaveSettingsResult> {
  await requireAdmin();

  if (!settingsEnabled()) {
    return { success: false, error: "Storage is not configured." };
  }

  // Normalize + cap lengths; drop malformed appearance values rather than store junk.
  const clean: SiteSettings = {
    businessName: String(input.businessName ?? "").trim().slice(0, 200),
    owner: String(input.owner ?? "").trim().slice(0, 200),
    email: String(input.email ?? "").trim().slice(0, 200),
    phone: String(input.phone ?? "").trim().slice(0, 60),
    accentA: input.accentA && HEX.test(input.accentA) ? input.accentA : undefined,
    accentB: input.accentB && HEX.test(input.accentB) ? input.accentB : undefined,
    fontName: input.fontName ? String(input.fontName).slice(0, 60) : undefined,
    surface: input.surface === "solid" || input.surface === "glass" ? input.surface : undefined,
  };

  if (!clean.businessName) {
    return { success: false, error: "Business name is required." };
  }

  try {
    await saveSiteSettings(clean);
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("saveSettings error:", error);
    return { success: false, error: "Could not save settings." };
  }
}
