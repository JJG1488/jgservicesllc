# JG Services LLC — Design Prototype (Sapphire Atelier)

This folder (`/jg`) is a **high-fidelity, interactive HTML prototype** of a full redesign of
jgservicesllc.com. It is a design artifact, not the production Next.js app. Use it as the
visual + interaction source of truth when porting changes into the real codebase.

## What this is
- A linked, multi-page clickable site in the brand's dark glass / jewel-tone aesthetic.
- Faithful to the live site's DNA (sapphire→amethyst gradient, glassmorphism, Playfair display,
  Ephesis wordmark) but elevated: deeper ink base, refined type scale, Sora UI font, JetBrains
  Mono labels, count-ups, scroll reveals, and a glass↔solid surface system.

## Pages
`index.html` (home), `services.html`, `process.html`, `projects.html`, `contact.html`,
`schedule.html`, `faq.html`, `intake.html` (5-step wizard + live estimate), `contract.html`
(reviewable + sign), `privacy.html`, `terms.html`, `resources.html` (live cost estimator),
`demos.html`, `blog.html`, `admin.html` (dashboard / inquiries / projects / settings).

## Architecture (see docs/architecture.md)
- `styles.css` — design tokens + core components. `pages.css` — page-level components.
- `nav-config.js` — single source for nav, footer, company, and the real project list.
- `site.js` — vanilla runtime for sub-pages: injects nav/footer, scroll state, mobile menu,
  scroll-reveals, count-ups, smooth anchors.
- Home only: React 18 + Babel (`components.jsx`, `sections-a.jsx`, `sections-b.jsx`, `app.jsx`,
  `data.js`, `tweaks-panel.jsx`) with a live Tweaks panel (glass/solid, hero layout, accent, font).

## Conventions
- Brand gradient is driven by `--accent-a` / `--accent-b`; never hard-code sapphire/amethyst hex
  in components — reference the CSS vars so theming stays global.
- Surfaces use `.surface` + `--surface-*` vars so `[data-surface="solid"]` can flip the whole site.
- No emoji inside `<script>` string literals (caused encoding/parse fragility) — use inline SVG.
- Real content (services, FAQ, legal, projects) is lifted verbatim from the live repo where it
  existed; placeholder copy is clearly generic and must be replaced before production.

## Version history
- v1 — home page flagship (Sapphire Atelier).
- v2 — full multi-page site (15 pages), real project data, docs.
See docs/changelog.md for details and recorded fixes.
