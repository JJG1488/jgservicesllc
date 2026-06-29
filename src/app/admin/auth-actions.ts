"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  ADMIN_COOKIE,
  SESSION_MAX_AGE,
  createSessionToken,
} from "@/lib/admin-session";

export interface LoginResult {
  error?: string;
}

/* Constant-time-ish compare so a wrong password can't be narrowed byte-by-byte
   via response timing. (Length still leaks, which is acceptable for a single
   shared admin secret behind rate-limited platform infra.) */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

/** useActionState login handler. Sets the session cookie and redirects to the
    requested page on success; returns an error message on failure. */
export async function login(
  _prev: LoginResult | undefined,
  formData: FormData,
): Promise<LoginResult> {
  const password = String(formData.get("password") ?? "");
  const fromRaw = String(formData.get("from") ?? "/admin");
  // Only allow internal admin redirects — never an attacker-supplied URL.
  const from = fromRaw.startsWith("/admin") ? fromRaw : "/admin";

  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return { error: "Admin login is not configured (ADMIN_PASSWORD unset)." };
  }
  if (!password || !safeEqual(password, expected)) {
    return { error: "Incorrect password." };
  }

  const token = await createSessionToken();
  (await cookies()).set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });

  redirect(from);
}

export async function logout(): Promise<void> {
  (await cookies()).delete(ADMIN_COOKIE);
  redirect("/admin/login");
}
