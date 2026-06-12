# Sapphire Atelier — Prototype → Production Mapping

How the design handoff (`docs/jg/design_handoff_site_redesign/`) was implemented in
this repo on 2026-06-11, and every place the implementation knowingly diverges.

## Mapping

| Prototype source | Production target |
|---|---|
| `styles.css` (tokens + core components) | `src/app/design-system.css` (verbatim port + production tweaks) |
| `pages.css` (page-level components) | `src/app/pages.css` (verbatim port) |
| `nav-config.js` (nav/footer/company/projects) | `site.config.ts` + `src/data/projects.ts` |
| `data.js` (services/process/why/stats/trust/testimonial) | `src/data/{services,process,home}.ts` |
| `faq-data.js` (29 Q&As, 7 categories) | `src/data/faq.ts` (verbatim) |
| `components.jsx` (BrandMark, Icon set, Reveal, CountUp, SectionHead) | `src/components/ui/{brand-mark,icons,reveal,count-up,section-head}.tsx` |
| `sections-a/b.jsx` + `index.html` (home) | `src/app/(site)/page.tsx` + `src/components/sections/home/*` |
| `services/process/projects/contact/faq/privacy/terms/blog .html` | matching `src/app/(site)/*/page.tsx` + section components |
| `schedule/intake/contract/resources/demos .html` (new pages) | new `(site)` routes + section components |
| `admin.html` + `admin.js` | `src/app/admin/` (own layout) + `src/components/admin/*` |
| Tweaks panel (glass/solid, accents, font) | Admin → Settings → Appearance (writes `--accent-*`, `[data-surface]`, font var) |

Production adjustments baked into the CSS port: font stacks resolve through
`next/font` variables; the hero banner references `/images/...`; `.motion-off`
gating is additionally enforced via `prefers-reduced-motion` and `print` media
queries; final reveal state is the no-JS default.

## Per-track deviations (deliberate, reviewed)

**Home** — After the fidelity review, hero and closing CTA were restored to exact
prototype copy: kicker "JG Services LLC · Web Development", primary "Start your
project" → /#contact, ghost "See the work" → /#work; closing CTA is the prototype's
"Ready to start your *project*?" band (id="contact") with phone + email buttons and
the three-check trust row. All 6 services render as expandable cards (prototype
behavior) plus an added "All services" link; process steps are real `<button>`s
with `aria-current="step"`; terminal plays once and stops (WCAG 2.2.2), rendering
the full transcript statically under reduced motion.

**Services** — toggle label "What's included"/"Show less"; cards expand
independently; title period sits inside the gradient span.

**Contact** — sidebar consolidated into one surface card with three sections;
server action extended (type/budget), input HTML-escaped, subject line stripped of
newlines (header-injection guard); success state scrolls into view respecting
reduced motion.

**FAQ** — added a visually-hidden `aria-live` results count; collapsed panels are
`aria-hidden`; multiple items may be open (prototype allows it).

**Contract** — signed timestamp uses ISO format; native (sr-only) checkbox instead
of the prototype's display:none input; e-signature is client-state only (no
persistence — see manual steps); rebuilt the legal layout inline rather than
importing the legal track's component (acceptable duplication, candidate for a
follow-up refactor).

**Schedule / Intake / Resources** — formulas, prices, slots, and labels lifted from
the prototypes' inline scripts; all are client-side state machines with no backend
persistence yet.

**Admin** — all data is mock (`mock-data.ts`, clearly marked); settings pickers
actually write `--accent-a/b`, `[data-surface]`, and the display-font var
(prototype parity); admin-only icons live locally in `admin-icons.tsx`; theme
palette hexes in mock data are sanctioned literals (they define alternative
palettes, not the brand default).

**Blog** — design applied to listing + post pages; `hello-world.mdx` remains the
only real post. Prototype blog cards are placeholder copy — real posts pending.

**Data layer** — `Service.description` dropped in favor of `shortDescription`;
`Project.tech` → `tags`, `image: string | null`; `ProcessPhase` reshaped to the
prototype's `{n, title, tag, blurb, detail, points}`; ids are newly-authored
kebab-case slugs (prototype data has none). Cornerstone got its real image
(`cornerstone.png` exists here; the prototype's `null` predated the asset) —
Greencare is the one true placeholder.

## Known not-done (requires owner action)

See the manual-steps list delivered with the implementation (and CLAUDE.md):
Supabase + RLS + auth for admin, calendar integration for /schedule, persistence
for /intake and /contract submissions, RESEND_API_KEY for contact email,
greencareprofessionals.png screenshot, real blog posts, testimonial confirmation.
