# Handoff — porting the prototype into the production Next.js app

This prototype is a **design + interaction spec**. It does not touch your real repo. Below is the
exact, ordered path to bring it into `jgservicesllc` (Next.js 16 / TS / Tailwind 4). Engineering
tasks (tests, audits, Supabase) are yours to run in the real codebase — they can't be done from the
design environment.

See also: design-system.md, architecture.md, changelog.md.

## Mapping
| Prototype | Real repo target |
|---|---|
| `styles.css` tokens + `pages.css` | `src/app/design-system-generated.css`, `globals.css` |
| `nav-config.js` | `src/components/Navigation.tsx`, `Footer.tsx`, `src/app/projects/page.tsx` data |
| `index.html` sections | `src/app/page.tsx` + section components |
| `services/process/faq/...` | the matching `src/app/*/page.tsx` |
| `intake.html` | `src/components/IntakeWizard.tsx` + steps |
| `admin.html` | `src/app/admin/page.tsx` |
| fonts (Sora, JetBrains Mono) | `src/app/layout.tsx` (`next/font/google`) |

## Steps (also summarized in ALL CAPS in the chat)
1. Review the prototype, lock Tweak choices (surface, hero, accent, font).
2. Add Sora + JetBrains Mono via `next/font/google` (you already load Playfair + Ephesis).
3. Port `--accent-a/b`, `--grad-text`, `--surface-*`, ink scale into the generated CSS.
4. Convert pages section-by-section to `.tsx`, reusing `FadeIn`/`ScaleIn` for the reveals.
5. Replace the home bento + `projects/page.tsx` with the real 6 projects (already in nav-config.js).
6. Swap raw `<img>` for `next/image`; optimize/re-add `cornerstone.png` (was too large to import).
7. Verify dependencies on the real repo: `pnpm outdated`, `pnpm audit`; upgrade flagged/deprecated.
8. For admin/auth/data + Supabase RLS, follow https://supabase.com/docs/guides/database/postgres/row-level-security
   (RLS is a backend concern — the prototype's admin is presentational only).
9. `pnpm type-check && pnpm lint && pnpm build` before committing; run Lighthouse, confirm 95+.
10. Replace placeholder copy (testimonial, blog posts, demo blurbs) with approved content.
