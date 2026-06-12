import type { NextConfig } from "next";

/*
 * Security headers (production only — dev needs HMR websockets and gets none).
 *
 * CSP rationale (docs/FIXES.md FIX-015): every route is statically prerendered,
 * and nonce-based CSP requires per-request dynamic rendering — incompatible by
 * design (https://nextjs.org/docs/app/guides/content-security-policy). The
 * accepted 2026 middle ground for fully-static sites keeps 'unsafe-inline' for
 * script/style (Next.js hydration bootstraps + framer-motion/next-font inline
 * styles) while locking down every other vector. No 'unsafe-eval'.
 *
 * HSTS is intentionally absent: Vercel sets strict-transport-security
 * automatically on all HTTPS domains; duplicating it risks conflicting values.
 */
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    if (process.env.NODE_ENV !== "production") return [];
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
