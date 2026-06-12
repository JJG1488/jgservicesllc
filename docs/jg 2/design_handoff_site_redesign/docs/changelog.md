# Changelog & Fixes

## v2 — Full multi-page site (current)
Built 14 sub-pages + reworked home into a linked site sharing one design system.

Added:
- `nav-config.js` single source of truth (nav, footer, company, real projects, tech).
- `site.js` vanilla runtime (nav/footer injection, scroll state, mobile menu, IntersectionObserver
  reveals + count-ups, smooth anchors) for all non-home pages.
- `pages.css` page-level component library (forms, accordion, wizard, legal prose, tables, admin).
- Pages: services, process, projects (filterable), contact (validated form), schedule (date/time
  picker), faq (search + filter + accordion, real 29 Q&As), intake (5-step wizard with live
  estimate), contract (review + e-sign), privacy + terms (real repo copy), resources (live cost
  estimator), demos, blog, admin (dashboard/inquiries/projects/settings).
- Home: replaced placeholder bento with the **real 6 projects**; nav now links to real pages;
  footer gained a Legal column.

Real content sourced from the live repo: services & pricing, process, FAQ (verbatim), privacy &
terms (verbatim), and the projects list (titles, descriptions, tags, live URLs).

### Fixes recorded

**FIX-001 — "Invalid or unexpected token" (unterminated string) in three render scripts.**
- *Affected:* `admin.js`, `demos.html`, `blog.html` — each had one occurrence.
- *Symptom:* the page's dynamic region rendered empty; console showed
  `Uncaught SyntaxError: Invalid or unexpected token`. The whole script failed to parse, so no
  content/handlers attached.
- *Diagnosis path:* The serve layer wraps inline `<script>` for source-mapping, which obscured the
  real location. Moving admin logic to an external `admin.js` produced an accurate pointer
  (`admin.js:84:85`), revealing the pattern; the same pattern was then found and fixed in the
  demos and blog inline scripts.
- *Root cause:* In each card-template `return`, the final concatenated string opened with a single
  quote (`'<div class="proj-actions">…`) but was closed with a double quote (`…</article>"`). A
  single-quoted literal only ends on a single quote, so it ran unterminated to EOF.
- *Fix:* Closed each literal with a matching single quote (`…</article>';`).
- *Prevention:* Keep quote types consistent per literal; prefer external `.js` for non-trivial
  scripts so the browser reports precise error locations; verify each list renders a non-zero count
  after building. (Non-ASCII chars like em-dashes/arrows in these scripts were investigated and
  ruled out — they were not the cause.)

**FIX-002 — Emoji in inline script strings (precaution).**
- Multi-codepoint emoji (e.g. 🗂️ with a variation selector) inside `<script>` string literals are
  fragile across encode/serve round-trips. Replaced all admin emoji with inline SVG icons. This was
  not the root cause of FIX-001 but is a durable robustness + on-brand improvement.

## v1 — Home flagship
Initial Sapphire Atelier home page: split hero with animated build terminal, tech marquee,
expandable services, interactive process, portfolio bento, count-up stats, why-us, testimonial,
CTA, footer. Tweaks panel: glass↔solid surfaces, split↔spotlight hero, 4 accent palettes,
Playfair↔Sora display font, motion toggle. Verified clean (console + interaction sweep).
