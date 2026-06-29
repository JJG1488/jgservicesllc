"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin-auth";
import { updateInquiryStatus } from "@/lib/inquiries";
import type { InquiryStatus } from "@/types";

const VALID: readonly InquiryStatus[] = ["new", "warn", "won", "muted"];

export interface StatusResult {
  success: boolean;
  error?: string;
}

/** Update a lead's status from the admin inbox. Re-verifies admin auth (never
    trusts that middleware ran) before touching data. */
export async function setInquiryStatus(
  id: string,
  status: InquiryStatus,
): Promise<StatusResult> {
  await requireAdmin(); // redirects to /admin/login if the session is invalid

  if (!id || !VALID.includes(status)) {
    return { success: false, error: "Invalid request." };
  }

  try {
    await updateInquiryStatus(id, status);
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("setInquiryStatus error:", error);
    return { success: false, error: "Could not update status." };
  }
}
