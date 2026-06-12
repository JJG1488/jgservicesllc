# Fix Log — Problems & Solutions

Chronological record of every root-cause fix in this repo. Each entry states the
problem as observed, the diagnosis, the fix that was applied, and why that fix is
the correct one (not a band-aid). Newest entries at the bottom.

---

## FIX-001 — Prototype: "Invalid or unexpected token" (unterminated string)
*Recorded in the design handoff (`docs/jg/design_handoff_site_redesign/docs/changelog.md`), kept here for the permanent record.*

- **Affected:** prototype `admin.js`, `demos.html`, `blog.html`.
- **Symptom:** a page's dynamic region rendered empty; console showed `Uncaught SyntaxError: Invalid or unexpected token`. The whole script failed to parse, so no content or handlers attached.
- **Root cause:** in each card-template `return`, a concatenated string literal opened with a single quote but closed with a double quote (`'…</article>"`). A single-quoted literal only terminates on a single quote, so it ran unterminated to EOF.
- **Fix:** close each literal with a matching single quote.
- **Prevention:** keep quote types consistent per literal; prefer external `.js` files over large inline `<script>` blocks so browsers report precise error locations. In this production repo the issue class is eliminated entirely: all UI is TypeScript/JSX compiled by Turbopack — unterminated strings are build-time errors, never silent runtime failures.

## FIX-002 — Prototype: emoji inside script string literals (robustness)
- Multi-codepoint emoji (variation selectors) inside `<script>` strings are fragile across encode/serve round-trips. The prototype replaced all admin emoji with inline SVG icons.
- **Carried into production as a convention:** no emoji in code or copy; all iconography is the inline SVG set in `src/components/ui/icons.tsx`.

---

## FIX-003 — App could not build: 16 undeclared dependencies (2026-06-11)
- **Symptom:** `npm run build` impossible from a fresh clone. The scaffold imported `framer-motion` (27 files), `lucide-react` (20), `class-variance-authority`, `zod`, `tailwind-merge`, `clsx`, `remark-gfm`, `rehype-slug`, `reading-time`, `react-hook-form`, `@hookform/resolvers`, `lenis`, `gray-matter`, `@radix-ui/react-slot`, `@mdx-js/mdx`, and `resend` — but `package.json` declared only `next`, `react`, `react-dom`. `node_modules` had never been installed.
- **Root cause:** the component scaffold was authored (or copied in) without ever declaring its dependency tree; the lockfile was the untouched create-next-app one.
- **Fix:** full dependency audit via import scan (`grep` of all external module specifiers across `src/`), then declared every package at its current stable version (June 2026): framer-motion 12.40, lucide-react 1.17, zod 4.4, react-hook-form 7.78, resolvers 5.4, lenis 1.3.23, etc. Regenerated the lockfile from scratch. Next.js bumped 16.1.6 → 16.2.9 (latest stable) with matching `eslint-config-next`.
- **Why this and not pinning old versions:** every package checked against npm `time.modified` to confirm active maintenance; nothing deprecated was admitted. `framer-motion` 12.x is the same actively-published codebase as `motion` (last publish 2026-06-03) — kept under its existing import name to avoid 27-file churn with zero functional gain.

## FIX-004 — npm audit: PostCSS < 8.5.10 XSS advisory inside Next.js (2026-06-11)
- **Symptom:** `npm audit` reported 2 moderate findings: GHSA-qx2v-qp2m-jg93 (PostCSS unescaped `</style>` in stringified output) against the PostCSS copy *vendored inside* `next`'s dependency tree. npm's suggested "fix" was downgrading to `next@9.3.3` — nonsense.
- **Root cause:** Next.js pins an internal `postcss@8.4.31`; the advisory range is `<8.5.10`.
- **Fix:** npm `overrides` entry forcing `postcss: ^8.5.10` within `next`'s tree (a patch-level bump inside semver 8.x — API-stable), then a clean reinstall because npm does not retroactively replace already-materialized nested copies. Verified: `npm ls postcss` shows 8.5.15 deduped; `npm audit` → 0 vulnerabilities.
- **Fallback note:** if a future Next.js release conflicts with the override, remove the override block — by then Next will ship a patched PostCSS itself.

## FIX-005 — lucide-react 1.x removed brand icons (2026-06-11)
- **Symptom:** Turbopack build failure — `Export Linkedin doesn't exist in target module` (and `Github`) from `footer.tsx` and `contact-info.tsx`.
- **Root cause:** Lucide deprecated all brand icons in 2025 and removed them in the 1.0 release; the scaffold predated that.
- **Fix:** social marks now live as first-party inline SVGs (`src/components/ui/brand-icons.tsx`, plus the design-system icon set in `src/components/ui/icons.tsx` which includes `github`/`linkedin` strokes). This also satisfies the design convention (FIX-002): brand-controlled inline SVG over third-party icon churn.

## FIX-006 — Contact form email: unescaped user input interpolated into HTML (2026-06-11)
- **Symptom (latent):** `src/app/(site)/contact/actions.ts` built the Resend email body by string-interpolating raw `name`, `email`, `company`, `message` into HTML — an HTML-injection vector into outbound mail (phishing-friendly markup, broken rendering).
- **Fix:** all user-supplied values are HTML-escaped server-side before interpolation; the server action also re-validates input shape on the server (zod), never trusting client validation alone.

## FIX-007 — Route-group import paths after the (site) restructure (2026-06-11)
- **Symptom:** build failure `Can't resolve '@/app/contact/actions'` after marketing routes moved into `src/app/(site)/`.
- **Root cause:** path aliases reference the literal directory layout; route groups change the filesystem path (not the URL).
- **Fix:** imports updated to `@/app/(site)/contact/actions`. Convention going forward: colocate server actions with their route and import them only from siblings, or hoist truly shared actions to `src/lib/actions/`.

---

## Verification round (2026-06-11) — adversarial review findings, all applied

A 5-dimension review (conventions / fidelity / accessibility / security / code
quality) with adversarial verification confirmed 45 findings (7 major). All
actionable items were fixed the same day:

## FIX-008 — Page titles rendered the brand twice
- `createMetadata` returned "Page | JG Services LLC" **and** the root layout's title template appended the brand again. Fix: `createMetadata` now returns the bare page title (template adds the brand once); the no-title case returns an absolute title.

## FIX-009 — Hydration mismatch for reduced-motion users
- `Reveal`/`CountUp`/`BuildTerminal` branched on `useReducedMotion()` whose value differs between SSR (false) and a reduced-motion user's first client render (true) — structural/text hydration mismatches. Fix: `src/hooks/use-mounted.ts` (`useSyncExternalStore`-based, hydration-safe) gates every reduced-motion branch so SSR and first client render are identical; the reduced state applies right after hydration.

## FIX-010 — Lenis smooth scrolling ignored prefers-reduced-motion
- `ScrollProvider` now reads the media query through a hydration-safe subscription and renders plain children (no Lenis) for reduced-motion users.

## FIX-011 — Contact form abuse hardening
- Server action now: validates with a shared zod schema server-side (length caps; enum types/budgets), keeps HTML-escaping + newline-stripped subject, adds a honeypot field (silent fake-success on trip), adds a best-effort in-memory IP rate limit (5/10min; platform WAF is the durable layer), and no longer logs PII in production (redacted warning + explicit error when RESEND_API_KEY is missing).

## FIX-012 — Legacy palette fully purged; icon library removed
- The last pre-redesign stragglers (MDX `Callout`/`CodeBlock`/`ImageFigure`) were migrated to Sapphire Atelier tokens (new `--color-warning: #fbbf24` token added; macOS traffic-light chrome uses sanctioned literal hexes). Dead `ImageFigure` and root `mdx-components.tsx` deleted. The DEPRECATED navy/electric/amber/slate alias block and font aliases were **deleted** from globals.css — greps confirm zero references. `lucide-react` had zero remaining imports and was uninstalled; all iconography is now the first-party set in `src/components/ui/icons.tsx`.

## FIX-013 — Accessibility round (WCAG 2.1 AA)
- Skip-to-content link + `id="main"`; mobile menu `inert` when closed (+ `aria-controls`); essential `--ink-400` text bumped to `--ink-300` for AA contrast; bento tiles got `:focus-within` parity with hover; marquee pauses on focus; build terminal plays once and stops (WCAG 2.2.2) — which also fixed a dead-code restart branch that left a rAF loop spinning forever; footer/TOC pseudo-headings demoted to styled `<p>`; filter results announce via `aria-live`; intake single-select groups use real radiogroup semantics with roving tabindex; ServiceCard toggle moved off the whole-article click; cost-estimator orphan labels fixed; success-state swaps move keyboard focus; contract timestamp now locale-formatted (prototype parity).

## FIX-014 — Blog slug path-traversal guard + MDX trust boundary
- `getPostBySlug` validates slugs against `/^[a-zA-Z0-9_-]+$/` before any filesystem access (and the shared frontmatter parsing was deduplicated); `blog/[slug]` sets `dynamicParams = false`; `mdx-remote.tsx` documents that MDX compiles to executable code and must only ever receive trusted repo-committed content.

### Accepted-risk / deferred (documented deliberately)
- Security headers — RESOLVED the same day; see FIX-015 below.
- Footer © year is computed at build time — refreshes on every deploy; accepted.
- `/admin` is publicly viewable but contains only clearly-marked mock data and is noindexed; real auth (Supabase + RLS) is a prerequisite before any real data lands there.

## FIX-015 — Security headers shipped with the production deployment (2026-06-11)
- **Problem:** no CSP / clickjacking / sniffing protections were configured.
- **Analysis:** all 19 routes are statically prerendered (deliberate: cache the result instead of recomputing per request). Nonce-based CSP requires per-request dynamic rendering (https://nextjs.org/docs/app/guides/content-security-policy) — adopting it would have destroyed static caching site-wide. The accepted 2026 middle ground for fully-static sites keeps `'unsafe-inline'` for script/style (Next hydration bootstraps; framer-motion/next-font inline styles) while locking everything else down. No `'unsafe-eval'`.
- **Fix:** production-only `headers()` in `next.config.ts`: CSP (`default-src 'self'`; `object-src 'none'`; `frame-ancestors 'none'`; `base-uri 'self'`; `form-action 'self'`; `upgrade-insecure-requests`), `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, minimal `Permissions-Policy`. Dev is exempt (HMR websockets). HSTS intentionally omitted — Vercel injects it on all HTTPS domains.
- **Verified:** headers present on `npm start` + curl; full browser session with CSP enforced showed zero console violations, all fonts/images loading.
- **Debt note:** `'unsafe-inline'` for scripts is documented debt, acceptable while the site renders no user-generated content. Revisit if any UGC or third-party scripts are ever added.
