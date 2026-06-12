# Handoff: JG Services LLC — Full Site Redesign ("Sapphire Atelier")

## Overview
A complete visual + interaction redesign of **jgservicesllc.com** (15 pages) in an elevated
dark-glass / jewel-tone aesthetic. The goal of this handoff is to implement the redesign in the
**existing production repo** (`JJG1488/jgservicesllc` — Next.js 16, TypeScript, Tailwind CSS 4,
App Router, Supabase, deployed on Vercel), reusing its established patterns (framer-motion,
`FadeIn`/`ScaleIn`, `next/font`, `next/image`, existing components).

## About the design files
The files in this bundle are **design references created in HTML/CSS/JS** — interactive prototypes
that show the intended look and behavior. **They are not production code to copy verbatim.** The
task is to **recreate these designs inside the existing Next.js app** using its real environment
(React components, Tailwind, design tokens, framer-motion, Supabase data) — not to ship the static
HTML. The prototype deliberately uses two runtimes (a React home page + a small vanilla runtime for
sub-pages) purely to keep the prototype light; in production **everything becomes React/Next.js
components**.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, radii, motion, and interactions.
Recreate pixel-faithfully using the codebase's libraries. Exact tokens are in
`docs/design-system.md` and below.

---

## Design tokens (authoritative)
Port these into `src/app/design-system-generated.css` / `globals.css`. Brand color is driven by
two variables so the whole site re-themes at once — **reference the vars, never hard-code hex in
components.**

```
--accent-a: #2563eb;   /* sapphire-600 (brand start) */
--accent-b: #9333ea;   /* amethyst-600 (brand end)   */
--grad-brand: linear-gradient(135deg, var(--accent-a), var(--accent-b));
--grad-text:  linear-gradient(135deg, #7cb0ff, #b79bff, #d8b4fe);  /* headings only */

/* Ink (cool, desaturated) */
--bg-0:#070a14; --bg-1:#0a1024; --bg-2:#0e1430;
--ink-100:#f4f7ff; --ink-200:#c9d4f0; --ink-300:#97a6cf; --ink-400:#6b78a3;
--emerald-400:#34d399;  /* success/live signals ONLY */

/* Surfaces — glass (default) */
--surface-bg: linear-gradient(135deg, rgba(37,99,235,.10), rgba(147,51,234,.10));
--surface-border: rgba(147,51,234,.20);
--surface-blur: blur(14px);
/* Solid mode: [data-surface="solid"] overrides --surface-bg:#11162e, --surface-blur:blur(0) */

/* Radii */ --radius-sm:.625rem; --radius:1rem; --radius-lg:1.5rem; --radius-xl:2rem;
/* Container */ max-width:1240px; padding-inline: clamp(1.25rem,4vw,2.5rem);
/* Section rhythm */ padding-block: clamp(4.5rem,9vw,8rem);
/* Easing */ --ease: cubic-bezier(.22,1,.36,1);
```

### Typography
- **Display (headings):** Playfair Display 700 — already loaded in the repo.
- **UI / body:** **Sora** 300–700 — ADD via `next/font/google`.
- **Mono (kickers, chips, code, labels):** **JetBrains Mono** — ADD via `next/font/google`.
- **Script (wordmark only):** Ephesis — already loaded.
- Headings use clamp() fluid sizing; body 0.92–1.1rem; kicker 0.74rem uppercase / 0.28em tracking.

### Motion
Scroll reveals (fade+rise), count-ups, drifting aurora background blobs, hover lifts, gradient
shimmer. Transform/opacity only. Must be disabled under `prefers-reduced-motion` and in print
(prototype uses a `.motion-off` body class). In production, reuse the existing `FadeIn`/`ScaleIn`.

---

## Screens / Views
Full per-component layout, colors, type, states, and exact copy for every page are documented in
the prototype files (listed below) and summarized in `docs/design-system.md`. Page inventory:

1. **Home** (`index.html`) — sticky glass nav; split hero (headline + animated build-terminal panel
   over the real tech banner) with a centered "spotlight" variant; tech marquee; 3 service preview
   cards; interactive process stepper; **real 6-project** portfolio bento; count-up stats
   (50+, 100%, <2.8s, 95+); why-us grid; testimonial; CTA; footer. Has a **Tweaks panel**
   (glass/solid surface, hero layout, accent palette, display font, motion) — this is a
   prototyping aid; in production expose only what you want as a theme setting.
2. **Services** (`services.html`) — 6 expandable service cards (real titles, pricing, timelines,
   features, tech chips) + why-us grid + CTA.
3. **Process** (`process.html`) — interactive 3-phase stepper (Idea & Blueprint / Design &
   Development / Launch & Support) + "what to expect" + CTA.
4. **Projects** (`projects.html`) — category filter pills + responsive card grid; **real projects**
   with live URLs (see data below); placeholder tile when an image is missing.
5. **Contact** (`contact.html`) — validated form (name, email, type, budget, message) → success
   state; contact sidebar; schedule CTA.
6. **Schedule** (`schedule.html`) — 14-day date picker + time-slot grid → booking confirmation.
7. **FAQ** (`faq.html`) — search + category filter + accordion; **real 29 Q&As** (verbatim).
8. **Intake** (`intake.html`) — 5-step wizard (type → features → timeline → info → review) with a
   **live estimate** and progress rail → submission success.
9. **Contract** (`contract.html`) — reviewable service agreement (TOC + sections) + e-sign flow
   (type name + agree → signed confirmation with timestamp).
10. **Privacy** (`privacy.html`) / **Terms** (`terms.html`) — **real legal copy from the repo** +
    sticky TOC.
11. **Resources** (`resources.html`) — live cost/ROI estimator (slider + toggles) + tool cards.
12. **Demos** (`demos.html`) — demo-type showcase cards.
13. **Blog** (`blog.html`) — article grid.
14. **Admin** (`admin.html`) — app shell (own sidebar, no marketing nav): Dashboard (KPIs +
    count-ups + bar chart + pipeline + recent inquiries), Inquiries (filterable table), Projects
    (status cards), Settings (profile + theme/font pickers + save toast). **Presentational only** —
    wire to your real Supabase data + auth.

## Interactions & behavior
Documented inline in each prototype. Key ones: nav scroll-state + mobile menu; smooth in-page
anchors; service/FAQ accordions (CSS grid-rows 0fr↔1fr); process/admin tab switching; form
validation (required + email regex) with inline errors → success replacement; wizard state machine
with a live estimate (`base + Σ feature costs) × timeline multiplier`, range = cost…cost×1.3);
schedule selection gating the confirm button; e-sign enable-on-valid; count-ups via
IntersectionObserver; reveals via IntersectionObserver (final-state fallback if unsupported).

## State management
Prototype uses local component state (React useState on home; plain JS objects on sub-pages). In
production: form/wizard/schedule/contract state → React state or your form lib; admin data →
Supabase queries (see RLS note below); theme (accent/surface/font) → a settings record or
`next-themes`-style provider if you choose to expose it.

## Real data captured (from the live repo)
- **Projects** (title · category · tags · liveUrl) — in `nav-config.js` → `SITE.projects`:
  BrandForge AI (brandforgeai.pro), Greencare Professionals, LUXE E-Commerce, A&M Construction,
  Cornerstone Plumbing & Electric, A Family Venture Express. Use these to replace
  `src/app/projects/page.tsx` data and the home bento.
- **Services / pricing / FAQ / Privacy / Terms** — lifted verbatim; FAQ in `faq-data.js`.

## Assets
Real images live in the repo at `public/images/` (the prototype references `../public/images/…`).
Used: `hero_banner_jgserivesllc.jpg` (hero bg), `brandforgeai.png`, `greencareprofessionals.png`,
`nextjscomponent.png` (LUXE), `a_and_m_construction.png`, `A_FAMILY_VENTURE.png`. **`cornerstone.png`
exceeded the import limit** — it exists in your repo; re-wire it (the prototype shows a gradient
placeholder tile in its place). The JG monogram is an inline gradient SVG (in `site.js` /
`components.jsx`) — keep using `src/components/Logo.tsx`. In production, serve all raster images
through `next/image`.

## Files in this bundle
- `index.html` + `styles.css`, `pages.css` (all styles), `nav-config.js`, `site.js`, `data.js`,
  `faq-data.js`, `admin.js`, `components.jsx`, `sections-a.jsx`, `sections-b.jsx`, `app.jsx`,
  `tweaks-panel.jsx`, and the 14 sub-page HTML files.
- `docs/design-system.md`, `docs/architecture.md`, `docs/changelog.md`, `docs/handoff.md`.
- To view the prototype live (with images), open the project's `jg/index.html` in a browser served
  from the project root so `../public/images/…` resolves.

## Implementation order (recommended)
1. Add Sora + JetBrains Mono via `next/font/google` in `src/app/layout.tsx`.
2. Port the tokens above into `design-system-generated.css`; keep `--accent-*` driving the gradient.
3. Build shared `Navigation.tsx` + `Footer.tsx` from `nav-config.js`.
4. Convert pages section-by-section to `.tsx`, reusing `FadeIn`/`ScaleIn` for reveals; replace the
   vanilla `IntersectionObserver` helpers.
5. Replace projects data (home bento + `projects/page.tsx`) with `SITE.projects`; re-add
   `cornerstone.png`; swap all `<img>` → `next/image`.
6. Wire Admin to Supabase. **Enable RLS on every table and write explicit policies** per
   https://supabase.com/docs/guides/database/postgres/row-level-security — never expose the
   service-role key client-side. The prototype admin is UI-only.
7. `pnpm outdated && pnpm audit` → upgrade flagged/deprecated deps (the design adds none).
8. `pnpm type-check && pnpm lint && pnpm build`; run Lighthouse, confirm 95+ / sub-2.8s.
9. Replace placeholder copy (testimonial, blog posts, demo blurbs); confirm pricing is current.
10. Deploy to Vercel.

## A known gotcha (recorded for the dev)
In template-string concatenation, keep quote types consistent per literal — a string opened with
`'` must close with `'`. A `'…</article>"` typo silently breaks the whole script. See
`docs/changelog.md` (FIX-001). Prefer external `.js` over large inline `<script>` blocks so the
browser reports precise error locations.
