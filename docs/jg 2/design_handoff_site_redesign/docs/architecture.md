# Architecture — JG Services LLC prototype

## File map
```
jg/
  index.html            Home (React 18 + Babel SPA)
  services|process|projects|contact|schedule|faq|intake|
  contract|privacy|terms|resources|demos|blog|admin .html   Sub-pages (vanilla)
  styles.css            Design tokens + core components (shared by all pages)
  pages.css             Page-level components (forms, accordion, wizard, tables, admin)
  nav-config.js         window.SITE: nav, footer, company, projects[], tech[]
  site.js               Sub-page runtime (nav/footer inject, reveals, count-ups, menu)
  data.js               Home content model (window.JG) — services, process, why, stats…
  faq-data.js           window.FAQ (29 Q&As, real)
  components.jsx        Home React primitives (BrandMark, Icon, hooks, SectionHead)
  sections-a.jsx        Home: Nav, Hero, Marquee, Services, Process
  sections-b.jsx        Home: Work, Stats, Why, Testimonial, CTA, Footer
  app.jsx               Home composition + Tweaks
  tweaks-panel.jsx      Tweaks shell (host protocol)
  admin.js              Admin dashboard logic (external to keep parsing clean)
  docs/                 This documentation
../public/images/       Real brand + portfolio assets (referenced as ../public/images/…)
```

## Composition model
- **Two runtimes by design.** The home page is a React SPA because it carries the most
  interaction (Tweaks, animated terminal, count-ups). Every other page is plain HTML + a small
  vanilla runtime (`site.js`) so pages stay light, fast, and directly editable. Both consume the
  same `nav-config.js`, so nav/footer/company/projects have a single source of truth.
- **Theming via CSS custom properties.** `--accent-a/--accent-b` drive the brand gradient
  everywhere (buttons, logo, icons, chart bars). `[data-surface="solid"]` overrides the
  `--surface-*` tokens to flip glassmorphism to solid surfaces site-wide with zero per-component
  changes — O(1) theme switch.

## Performance notes (Big-O / runtime)
- Rendering each list (projects, services, FAQ, inquiries) is O(n) over small n (≤30); filtering
  is O(n) per interaction — negligible. No nested loops over large data.
- Scroll reveals and count-ups use a single `IntersectionObserver` each (O(1) per element,
  observers disconnect after firing) instead of scroll-event polling — avoids layout thrash.
- Animations are GPU-friendly (`transform`/`opacity` only) and globally disabled via
  `.motion-off` for `prefers-reduced-motion` and print.
- Images are real screenshots; in production serve them through `next/image` (responsive +
  AVIF/WebP) — see handoff. The prototype lazy-loads (`loading="lazy"`).

## Fallbacks / resilience
- If `IntersectionObserver` is unavailable, reveals/count-ups render their final state immediately
  (no hidden content).
- `nav-config.js` getters guard against a missing `window.SITE` so a page never hard-crashes on a
  load-order issue.
- Missing imagery (e.g. cornerstone.png, too large to import) degrades to a labeled gradient
  placeholder tile rather than a broken image.
- The home React app pins exact React/Babel versions with SRI integrity hashes.

## Porting to the real Next.js app
Each prototype section maps 1:1 to an existing component pattern (`framer-motion` + `FadeIn`/
`ScaleIn`). Lift tokens into `design-system-generated.css`, convert sections to `.tsx`, and replace
the vanilla runtime with the existing React components. See docs/handoff.md.
