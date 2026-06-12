# Architecture — jgservicesllc.com ("Sapphire Atelier")

Production implementation of the Sapphire Atelier redesign (design source:
`docs/jg/design_handoff_site_redesign/`). Next.js 16 App Router, TypeScript strict,
Tailwind CSS 4, framer-motion 12, deployed on Vercel.

## Layering

```
src/app/design-system.css   Tokens + core component classes (port of prototype styles.css)
src/app/pages.css           Page-level component classes  (port of prototype pages.css)
src/app/globals.css         Tailwind import + @theme token mapping + base styles
src/lib/fonts.ts            Playfair Display / Sora / JetBrains Mono / Ephesis (next/font)
site.config.ts              Single source of truth: nav, footer, company info
src/types/index.ts          Shared domain types
src/data/*.ts               Typed content (services, projects, process, faq, home, tech)
src/components/ui/*         Primitives (Reveal, CountUp, SectionHead, Icon, BrandMark, …)
src/components/layout/*     Header / Footer / PageHeader chrome
src/components/sections/*   Per-page section components
src/app/(site)/*            Marketing routes (get Header/Footer via the group layout)
src/app/admin/*             Admin app shell (own layout, noindex, NO marketing chrome)
```

## Key decisions & why

### 1. Design system as real CSS + Tailwind token mapping (hybrid)
The handoff mandates pixel fidelity and an O(1) theme switch. The prototype's
`styles.css`/`pages.css` were ported as-is into `design-system.css`/`pages.css`
(single audit surface, identical rendering), while `globals.css` `@theme` maps the
same tokens to Tailwind utilities (`text-ink-300`, `bg-bg-1`, `font-display`) for
layout glue. Components use design-system class names for visual parity and
Tailwind only for spacing/arrangement.

**Theming is O(1) by construction:** every brand color flows from `--accent-a` /
`--accent-b`; surfaces read `--surface-*`, so `[data-surface="solid"]` flips
glassmorphism off site-wide with zero per-component changes. **Never hard-code
sapphire/amethyst hex in a component.** Emerald is reserved for success/live
signals only.

### 2. Route groups separate marketing chrome from the admin shell
`(site)/layout.tsx` carries Header/Footer; `/admin` has its own sidebar shell and
`robots: noindex` (plus a `Disallow: /admin` in robots.txt). URL space is
unchanged — route groups are filesystem-only.

### 3. Motion strategy
- `Reveal` (framer-motion `whileInView`, once, transform/opacity only) replaces the
  prototype's IntersectionObserver helper — O(1) per element, no scroll polling.
- `CountUp` animates with rAF easing, starts in view, renders the final value
  immediately for reduced-motion users.
- `MotionConfig reducedMotion="user"` in the root layout plus
  `prefers-reduced-motion` / `print` gates in CSS disable all decorative motion
  globally (aurora drift included).
- Lenis provides smooth scrolling (`ScrollProvider`).

### 4. Performance (Big-O posture)
- All list rendering (projects, services, FAQ, inquiries) is O(n) over n ≤ 30;
  filters are O(n) per keystroke — negligible, no memo ceremony needed.
- Every page is statically prerendered (SSG) — interactivity is client *islands*
  inside server components, so the JS sent per page stays bounded.
- Raster images go through `next/image` (AVIF/WebP, responsive); source PNGs were
  downscaled to ≤1600px width (the 4.1MB cornerstone.png → 0.8MB at source, far
  smaller over the wire after optimization).
- Marquee/aurora/hover effects animate `transform`/`opacity` only (compositor-only,
  no layout thrash).

### 5. Fallbacks / resilience
- Missing project imagery (e.g. Greencare) degrades to a labeled gradient
  placeholder tile, never a broken `<img>`.
- Reveals render final state when JS/IO is unavailable or motion is reduced — no
  permanently hidden content.
- Contact form: server action re-validates with zod and escapes all user input
  before building email HTML; without `RESEND_API_KEY` it degrades to logging
  instead of failing.
- Legacy navy/electric token aliases remain in `globals.css` (marked DEPRECATED)
  so any straggler component degrades to on-brand colors instead of unstyled;
  remove once grep shows zero references.

### 6. Admin is presentational until Supabase is wired
The admin dashboard ships with clearly-marked mock data. When wiring Supabase:
**enable RLS on every table and write explicit policies** per
https://supabase.com/docs/guides/database/postgres/row-level-security — and never
expose the service-role key client-side. Auth must gate the route (middleware +
server-side checks), not just the UI.

### 7. Dependency policy
Everything current and actively maintained as of June 2026; `npm audit` must be
clean (see FIXES.md FIX-003/004). The `overrides` block in package.json exists
solely to patch Next's vendored PostCSS — re-evaluate it on every Next upgrade.
