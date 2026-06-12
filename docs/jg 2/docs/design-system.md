# Design System — Sapphire Atelier

A faithful, elevated evolution of the live jgservicesllc.com dark glass / jewel-tone look.

## Color
All brand color flows from two CSS variables so the whole site re-themes at once:
- `--accent-a` (default `#2563eb`, sapphire-600) → `--accent-b` (default `#9333ea`, amethyst-600)
- `--grad-brand` = 135° gradient of the two — used on buttons, the JG monogram, icons, chart bars.
- `--grad-text` = blue→violet (`#7cb0ff → #b79bff → #d8b4fe`) — used only on display headings via
  `.grad-text` (kept fixed for legibility even when accents change).

Ink scale (cool, desaturated): `--bg-0 #070a14` (page base) · `--bg-1` · `--bg-2` · text
`--ink-100 #f4f7ff` → `--ink-400 #6b78a3`. Emerald (`#34d399`) is reserved for "live / success"
signals only (terminal checks, won badges, form success).

Curated accent palettes (Tweaks + admin Appearance): Sapphire/Amethyst (brand), Indigo/Cyan,
Violet/Magenta, Emerald/Sapphire — all share comparable chroma/lightness, varying hue.

## Surfaces
`.surface` reads `--surface-bg`, `--surface-border`, `--surface-blur`, `--surface-shadow`.
- **Glass (default):** translucent sapphire/amethyst fill, 14px blur, amethyst border + glow.
- **Solid:** `[data-surface="solid"]` swaps to opaque `#11162e` panels, no blur, neutral borders.
`.surface-strong` = denser variant; `.lift` adds the hover-raise with stronger glow.

## Typography
- **Display:** Playfair Display (700) — brand-true serif for headings (`.display`).
- **UI/body:** Sora (300–700) — modern geometric sans, the workhorse.
- **Mono/labels:** JetBrains Mono — kickers, chips, metadata, code/terminal.
- **Script:** Ephesis — used *only* for the "JG Services LLC" wordmark.
Scale: clamp-based fluid headings; body 0.92–1.1rem; kicker 0.74rem uppercase, 0.28em tracking.

## Spacing & geometry
Radii: `--radius-sm .625rem` / `--radius 1rem` / `--radius-lg 1.5rem` / `--radius-xl 2rem`.
Container max 1240px; fluid `--pad-x clamp(1.25rem, 4vw, 2.5rem)`. Section rhythm
`clamp(4.5rem, 9vw, 8rem)`.

## Motion
- Easing `--ease cubic-bezier(.22,1,.36,1)`; spring `--ease-spring`.
- Scroll reveals (`.reveal` → `.in`), count-ups, drifting aurora blobs, hover lifts, gradient
  shimmer. All gated by `.motion-off` (reduced-motion + print safe) and use transform/opacity only.

## Core components
Buttons (`.btn-primary` gradient, `.btn-ghost` frosted), chips, kickers, `.surface` cards,
`.svc-card` (expandable), `.proc-step`/`.proc-panel`, `.bento`/`.tile` (portfolio), `.stat`
(count-up), `.acc` (accordion), `.pill` (filters), forms (`.input/.textarea/.select/.opt-card`),
`.wiz-*` (wizard), `.table/.badge` (admin), `.kpi/.chart` (dashboard), `.prose/.toc` (legal).

## Accessibility
WCAG-AA text contrast on the dark base; focus rings on inputs; 44px+ hit targets; reduced-motion
honored; semantic landmarks (`nav`/`main`/`footer`), labelled controls, `aria-hidden` on décor.
