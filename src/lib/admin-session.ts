import { SignJWT, jwtVerify } from "jose";

/* Edge-safe admin session primitives. Deliberately dependency-light (jose
   only, no next/headers, no node:crypto) so the SAME verify path runs in
   middleware (edge) and in server components/actions (node). */

export const ADMIN_COOKIE = "jg_admin_session";
const ALG = "HS256";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days, in seconds

function secret(): Uint8Array {
  const value = process.env.ADMIN_SESSION_SECRET;
  if (!value || value.length < 16) {
    // Fail loud on sign; verify() catches this and fails closed.
    throw new Error("ADMIN_SESSION_SECRET is missing or too short (need ≥16 chars).");
  }
  return new TextEncoder().encode(value);
}

/** Mint a signed session token for the single admin user. */
export async function createSessionToken(): Promise<string> {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: ALG })
    .setSubject("admin")
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(secret());
}

/** True only for a valid, unexpired admin token. Fails closed on any error
    (bad signature, expiry, or missing secret). */
export async function verifySessionToken(
  token: string | undefined | null,
): Promise<boolean> {
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, secret(), { algorithms: [ALG] });
    return payload.role === "admin";
  } catch {
    return false;
  }
}
