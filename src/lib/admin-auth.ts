import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, verifySessionToken } from "./admin-session";

/* Server-only auth helpers (read the cookie via next/headers). Middleware is
   the first gate; these are defense-in-depth for the gated layout and for any
   server action that mutates data — never trust that middleware ran. */

export async function isAdmin(): Promise<boolean> {
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  return verifySessionToken(token);
}

/** Redirects to the login page when the caller is not an authenticated admin. */
export async function requireAdmin(): Promise<void> {
  if (!(await isAdmin())) {
    redirect("/admin/login");
  }
}
