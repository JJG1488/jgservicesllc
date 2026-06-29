# CLAUDE.md — jgservicesllc.com

Context file for AI-assisted development on this repo. Read this before making changes.

## What this is

The production website of **JG Services LLC** (James Gault — custom web development,
e-commerce, SEO; Michigan, USA). Implements the **"Sapphire Atelier"** redesign: a
dark glass / jewel-tone aesthetic (sapphire→amethyst gradient, Playfair Display
headings, Ephesis wordmark, Sora UI font, JetBrains Mono labels).

- **Stack:** Next.js 16 (App Router, Turbopack), TypeScript (strict), Tailwind CSS 4,
  framer-motion 12, Lenis smooth scroll, MDX blog. Deployed on Vercel. npm is the
  package manager.
- **Design source of truth:** `docs/jg/design_handoff_site_redesign/` — an interactive
  HTML/CSS prototype. It is reference material, NOT app code (ESLint ignores `docs/**`).
  When in doubt about copy, layout, behavior, or pricing, the prototype wins.
- **Documentation:** `docs/ARCHITECTURE.md` (decisions + layering),
  `docs/FIXES.md` (every root-cause fix, problem → solution),
  `docs/REDESIGN-IMPLEMENTATION.md` (prototype → production mapping + deviations).

## Commands

```bash
npm run dev          # dev server
npm run build        # production build — ALWAYS run before committing
npm run start        # serve the production build
npm run lint         # eslint (flat config; docs/** ignored)
npm run type-check   # tsc --noEmit
```

## Hard conventions (do not violate)

1. **Brand color flows from `--accent-a` / `--accent-b` only.** Never hard-code
   sapphire/amethyst hex in components — use design-system classes
   (`.btn-primary`, `.grad-text`, `.chip`, …), CSS vars (`var(--grad-brand)`), or the
   Tailwind token utilities (`text-sapphire-300`, `bg-bg-1`, `text-ink-300`).
   Emerald (`--emerald-400`) is reserved for **success/live signals only**.
2. **Surfaces** read `--surface-*` via `.surface` / `.surface-strong` / `.lift`;
   `[data-surface="solid"]` must keep flipping glass→solid site-wide for free.
3. **No emoji in code or copy** (encoding fragility — see docs/FIXES.md FIX-002).
   ALL icons come from `src/components/ui/icons.tsx` (first-party stroke set).
   There is **no third-party icon library** — lucide-react was removed once its
   last usage migrated (FIX-005, FIX-012). Add new icons to the PATHS set.
4. **Typography:** Playfair Display = display headings (`.display`), Sora = UI/body,
   JetBrains Mono = kickers/chips/terminal (`.mono`, `.kicker`), Ephesis = the
   "JG Services LLC" wordmark ONLY (`.script`).
5. **Motion:** transform/opacity only; everything must respect
   `prefers-reduced-motion` (use `Reveal`/`CountUp` or framer-motion's
   `useReducedMotion`; CSS is gated globally). Final content state must render
   without JS/motion (no permanently hidden content).
6. **Images:** raster assets via `next/image` from `public/images/`. Missing
   imagery degrades to the gradient placeholder tile (`.proj-shot.ph` / `.tile.ph`)
   with a mono label — never a broken img.
7. **Data lives in `src/data/*.ts`** (typed by `src/types/index.ts`) and company
   facts in `site.config.ts`. Do not duplicate content arrays inside components.
8. **Marketing pages** go in `src/app/(site)/` (inherit Header/Footer).
   `/admin` stays outside that group, noindexed, with its own shell.
9. **Build before committing.** `npm run build && npm run lint && npm run type-check`
   must all pass. `npm audit` must stay at 0 vulnerabilities.

## Edge cases & gotchas

- **`docs/**` is design reference** — never lint, import from, or "fix" it. The
  prototype runs on browser globals and intentionally fails app lint rules.
- **Route-group paths:** files under `(site)` import as `@/app/(site)/...` —
  the URL has no `(site)` segment but the filesystem path does (FIX-007).
- **package.json `overrides`** pins `postcss ^8.5.10` inside Next's tree to clear
  GHSA-qx2v-qp2m-jg93 (FIX-004), and `uuid ^11.1.1` to clear a firebase-admin
  transitive advisory (FIX-018). Re-evaluate both on dependency upgrades; drop
  each once the upstream ships a patched version.
- **Legacy palette is gone.** The pre-redesign navy-/electric-/amber-/slate-
  utilities and `--font-syne`/`--font-ibm-plex` aliases were fully purged
  (FIX-012). Never reintroduce them — use the ink/sapphire/amethyst tokens.
- **`greencareprofessionals.png` does not exist** — the Greencare project renders
  the gradient placeholder by design (`image: null` in `src/data/projects.ts`).
  Drop the real screenshot into `public/images/` and update the data entry.
- **Admin is REAL and auth-gated** (FIX-019, was mock pre-2026-06-29). The
  Inquiries view + dashboard read live Firestore via `firebase-admin` (server
  only — see `src/lib/inquiries.ts`); status changes write back. Auth is a single
  app password: `ADMIN_PASSWORD` + `ADMIN_SESSION_SECRET` (jose-signed cookie),
  gated by `src/proxy.ts` (the Next 16 "proxy"/middleware) and re-checked in
  `src/app/admin/(dashboard)/layout.tsx` via `requireAdmin()`. Login lives at
  `/admin/login` (outside the gated `(dashboard)` group). Project status comes
  from `src/data/projects.ts` (`status` field); admin Settings persist to
  Firestore (`settings/site`, via `src/lib/settings.ts` + `settings-actions.ts`),
  so `mock-data.ts` now only holds the appearance-picker option lists. **Firestore
  must be locked** (`allow read,
  write: if false;`) — all access is the server service account, which bypasses
  rules; never add a client Firebase SDK without revisiting the CSP (`connect-src`).
- **`firebase-admin` is server-only.** Only import `@/lib/firebase-admin`,
  `@/lib/inquiries`, `@/lib/admin-auth` from server components/actions (they carry
  `import "server-only"`). Client UI uses `@/lib/admin-session` (edge-safe, jose)
  and `@/components/admin/inquiry-meta` (pure). `FIREBASE_PRIVATE_KEY` is stored
  `\n`-escaped; the init does `.replace(/\\n/g, "\n")`.
- **Lead capture persists first, emails second** (FIX-019). Contact + intake both
  write the lead to Firestore, then attempt a best-effort Resend email — so no
  lead is dropped even with `RESEND_API_KEY` unset/failing. Intake now submits via
  `src/app/(site)/intake/actions.ts` (was client-only). `/schedule` and `/contract`
  are still client-side state machines that don't persist.
- **Contact form** input is HTML-escaped server-side before the email body
  (FIX-006) and re-validated with the shared zod schema (FIX-011) — keep both if
  you touch it. The Resend "from" is `info@jgservicesllc.com`; sends fail unless
  that domain is verified in Resend (leads still persist regardless). The
  canonical host lives ONLY in `site.config.ts` (`url`) (FIX-017).
- **Hydration:** never derive "today"/timestamps during server render of client
  components without guarding — the schedule page derives its 14-day window
  client-side after mount for this reason.

## Version history

- **v0.1.0 (2026-03)** — create-next-app scaffold; navy/electric "Syne + IBM Plex"
  design; pages: home, services, projects, process, faq, blog, contact, legal.
  Never buildable from a clean clone (16 undeclared dependencies).
- **v1.0.0 (2026-06-11)** — **Sapphire Atelier redesign.**
  - Repaired the dependency tree (FIX-003), cleared all npm audit findings
    (FIX-004), replaced removed lucide brand icons (FIX-005).
  - Ported the full design system (tokens, glass surfaces, type scale, motion)
    from the prototype; new fonts (Playfair Display, Sora, JetBrains Mono, Ephesis).
  - Rebuilt all existing pages to the new design with real content: 6 real
    projects (with live URLs), 6 services with real pricing, 3-phase process,
    all 29 FAQ Q&As, real privacy/terms copy.
  - New pages: `/schedule` (date/slot picker), `/intake` (5-step wizard with live
    estimate), `/contract` (reviewable agreement + e-sign flow), `/resources`
    (live cost/ROI estimator), `/demos`, `/admin` (presentational dashboard).
  - Security: escaped contact-email interpolation (FIX-006), robots noindex on
    admin, external links hardened with rel="noopener noreferrer".
  - 19 routes, all statically prerendered; build/lint/type-check green;
    npm audit 0 vulnerabilities.
  - **Hardening round (same day):** a 5-dimension adversarial review (45
    confirmed findings, 7 major) was applied in full — single-brand page
    titles (FIX-008), hydration-safe reduced-motion handling via `useMounted`
    (FIX-009), Lenis disabled under prefers-reduced-motion (FIX-010), contact
    form server validation + honeypot + IP rate limit + PII-safe logging
    (FIX-011), full legacy-palette purge + lucide-react removal (FIX-012),
    WCAG 2.1 AA accessibility pass — skip link, inert mobile menu, contrast,
    focus parity, radio semantics, aria-live counts (FIX-013), and blog slug
    path-traversal guard + MDX trust boundary (FIX-014).
- **v1.0.0 → production (2026-06-11).** Live on https://www.jgservicesllc.com
  via the existing Vercel project (`jgservicesllc`). Production security
  headers shipped (FIX-015); stale pnpm project overrides neutralized with
  config-as-code `vercel.json` (FIX-016); canonical host corrected to www
  (FIX-017). Legacy site history preserved on the `legacy-site` GitHub branch;
  redesign pushed as `redesign/sapphire-atelier`. Deployment + rollback
  runbook: docs/DEPLOYMENT.md. (Historical note: at v1.0.0 GitHub `main` still
  held the legacy code; it has since been aligned to the redesign — as of
  2026-06-29 `origin/main` == `origin/redesign/sapphire-atelier` == the
  Sapphire Atelier code, so `main` is safe to build from again.)
- **v1.1.0 (2026-06-29)** — **Inquiry capture + real admin inbox (FIX-018/019).**
  - Contact + intake submissions now persist to **Firestore** via `firebase-admin`
    (server only), with email as a best-effort notification — no lead dropped even
    without Resend. Intake wizard wired to a server action (was client-only).
  - `/admin` is now real and **password-protected**: jose-signed session cookie,
    `src/proxy.ts` gate + `requireAdmin()`, `/admin/login` page, restructured into
    `admin/(dashboard)/` (gated) vs `admin/login/`. Inquiries view shows real leads
    with expandable detail (email/message/source) + status workflow; dashboard KPIs
    /chart/pipeline computed from real data server-side.
  - New env vars (set in Vercel prod + preview): `ADMIN_PASSWORD`,
    `ADMIN_SESSION_SECRET`. `uuid` pinned to `^11.1.1` via overrides to keep
    `npm audit` at 0 (FIX-018). Confirmed via the pulled prod env that
    `RESEND_API_KEY` was never set — pre-v1.1.0 production leads were dropped and
    are unrecoverable. **Manual step:** lock Firestore security rules to deny all
    client access. build/lint/type-check green; npm audit 0.
