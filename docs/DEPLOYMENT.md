# Deployment Runbook — jgservicesllc.com

Production went live on **2026-06-11** (Sapphire Atelier v1.0.0). This is the
operational record: how it deploys, how to verify, and how to roll back.

## Topology

- **Vercel project:** `jgservicesllc` (`prj_SQpn9Grpytc5GkDVPGg6yjNJygSL`,
  team `jjg1488s-projects`), Node 22.x, framework Next.js.
- **Domains:** `www.jgservicesllc.com` (primary) ← `jgservicesllc.com` (307
  redirect, path-preserving) ← `jgservicesllc.vercel.app`. The canonical URL in
  code is `siteConfig.url = https://www.jgservicesllc.com` — sitemap, robots,
  and metadataBase all derive from it (never hardcode the host elsewhere).
- **GitHub:** `JJG1488/jgservicesllc`. The redesign lives on branch
  `redesign/sapphire-atelier`; the **legacy site's history is preserved on
  `legacy-site`** (tip `2f6e2370`). ⚠️ Until `main` is updated to the redesign,
  a push to `main` would auto-deploy the OLD site over production (the Vercel
  project is git-connected to `main`). Aligning `main` is the single most
  urgent manual step.

## Build configuration as code

- `vercel.json` pins `npm ci` / `npm run build`. This exists because the Vercel
  project still carries **stale dashboard overrides (`pnpm install` /
  `pnpm build`)** from the legacy codebase, which fail on this npm repo with
  `ERR_INVALID_THIS` (see docs/FIXES.md FIX-016). Repo config takes precedence,
  so deployments of this codebase are immune; clearing the dashboard overrides
  is a recommended (optional) cleanup.
- Security headers ship from `next.config.ts` (FIX-015) — production-only CSP,
  nosniff, frame-deny, referrer, permissions. Vercel adds HSTS itself.

## Standard release procedure

1. `npm run build && npm run lint && npm run type-check` — all green locally.
2. Commit. `vercel deploy --yes` → **preview**; previews sit behind Vercel
   Deployment Protection (anonymous = 401, by design). Verify routes/headers
   with a share link (`_vercel_share`) or the dashboard.
3. Promote: `vercel deploy --prod --yes` (or, once `main` is aligned, push to
   `main` and let the git pipeline deploy production).
4. Post-deploy sweep: every route on `https://www.jgservicesllc.com` returns
   200, an unknown path returns 404, CSP header present, `<title>` carries the
   brand exactly once.

## Rollback (fallback options)

- **One release back:** `vercel rollback` (or Vercel dashboard → Deployments →
  previous Ready production deployment → Promote). Instant, no rebuild.
- **To the legacy site entirely:** the pre-redesign code is branch
  `legacy-site` on GitHub. Check it out and `vercel deploy --prod`, or promote
  the last pre-2026-06-11 production deployment from the dashboard. (Legacy
  expects the Firebase env vars that are still stored on the project — they
  were intentionally left in place to keep this path viable.)
- **Bad headers/CSP emergency:** revert the `next.config.ts` headers commit and
  redeploy; the site functions identically without them.

## Environment variables (project state, 2026-06-11)

- Legacy (Firebase + WEBHOOK_SECRET): unused by the new app; retained solely to
  keep the legacy rollback path viable. Delete once the redesign has bedded in.
- **Missing and wanted: `RESEND_API_KEY`** (Production) — without it the
  contact form returns "Email service is not configured." to users in
  production by design (it refuses to silently drop submissions, FIX-011).

## Monitoring suggestions (not yet configured)

Enable Vercel Analytics + Speed Insights in the dashboard (no code needed for
basic web analytics; Speed Insights tracks Core Web Vitals against the 95+/2.8s
claims printed on the home page). Consider an uptime check on
`https://www.jgservicesllc.com/` and alerting on 5xx rates in Vercel
Observability.
