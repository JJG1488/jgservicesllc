# Jewel Tone Dark Theme Documentation

## Overview

The dark theme has been completely redesigned with a luxurious jewel tone palette featuring:
- **Emerald Green** - Growth, prosperity, and natural beauty
- **Sapphire Blue** - Trust, stability, and professional excellence
- **Ruby Red** - Passion, energy, and bold statements
- **Amethyst Purple** - Creativity, wisdom, and luxury

## Color Palette

### Emerald Green Tones
```css
--color-emerald-50: #ecfdf5   /* Lightest - text highlights */
--color-emerald-100: #d1fae5
--color-emerald-200: #a7f3d0  /* Secondary text in dark mode */
--color-emerald-300: #6ee7b7
--color-emerald-400: #34d399
--color-emerald-500: #10b981  /* Primary accent */
--color-emerald-600: #059669
--color-emerald-700: #047857
--color-emerald-800: #065f46
--color-emerald-900: #064e3b  /* Borders, dark accents */
--color-emerald-950: #022c22  /* Darkest - backgrounds */
```

### Sapphire Blue Tones
```css
--color-sapphire-50: #eff6ff
--color-sapphire-100: #dbeafe  /* Body text in dark mode */
--color-sapphire-200: #bfdbfe
--color-sapphire-300: #93c5fd
--color-sapphire-400: #60a5fa
--color-sapphire-500: #3b82f6  /* Primary accent */
--color-sapphire-600: #2563eb
--color-sapphire-700: #1e40af
--color-sapphire-800: #1e3a8a
--color-sapphire-900: #172554  /* Borders, dark accents */
--color-sapphire-950: #0c1838  /* Darkest - backgrounds */
```

### Ruby Red Tones
```css
--color-ruby-50: #fef2f2
--color-ruby-100: #fee2e2
--color-ruby-200: #fecaca
--color-ruby-300: #fca5a5
--color-ruby-400: #f87171
--color-ruby-500: #ef4444     /* Primary accent */
--color-ruby-600: #dc2626
--color-ruby-700: #b91c1c
--color-ruby-800: #991b1b
--color-ruby-900: #7f1d1d     /* Dark accents */
--color-ruby-950: #450a0a     /* Darkest - backgrounds */
```

### Amethyst Purple Tones
```css
--color-amethyst-50: #faf5ff
--color-amethyst-100: #f3e8ff
--color-amethyst-200: #e9d5ff
--color-amethyst-300: #d8b4fe
--color-amethyst-400: #c084fc
--color-amethyst-500: #a855f7  /* Primary accent */
--color-amethyst-600: #9333ea
--color-amethyst-700: #7e22ce
--color-amethyst-800: #6b21a8
--color-amethyst-900: #581c87  /* Dark accents */
--color-amethyst-950: #3b0764  /* Darkest - backgrounds */
```

### Rich Dark Backgrounds
```css
--color-dark-bg-primary: #0a0e17      /* Main background */
--color-dark-bg-secondary: #111827    /* Cards, elevated surfaces */
--color-dark-bg-tertiary: #1f2937     /* Nested cards */
--color-dark-bg-elevated: #242d3d     /* Modals, popovers */
```

## Usage Guidelines

### Background Colors

**Primary Background:**
```tsx
<body className="bg-white dark:bg-[#0a0e17]">
```

**Card Backgrounds:**
```tsx
<div className="bg-white dark:bg-gradient-to-br dark:from-emerald-950 dark:to-emerald-900">
  {/* Card content */}
</div>
```

**Mixed Gradient Backgrounds:**
```tsx
<div className="dark:bg-gradient-to-br dark:from-emerald-950 dark:via-sapphire-950 dark:to-amethyst-950">
  {/* Content with harmonious jewel tones */}
</div>
```

### Text Colors

**Headings (Brightest):**
```tsx
<h1 className="text-gray-900 dark:text-emerald-50">
  Main Heading
</h1>
```

**Body Text (Readable):**
```tsx
<p className="text-gray-700 dark:text-sapphire-100">
  Primary body text
</p>
```

**Secondary Text (Subtle):**
```tsx
<p className="text-gray-600 dark:text-emerald-200">
  Secondary information
</p>
```

### Borders

**Sapphire Borders:**
```tsx
<div className="border border-gray-200 dark:border-sapphire-900">
```

**Emerald Borders:**
```tsx
<div className="border border-gray-300 dark:border-emerald-900">
```

### Buttons

**Emerald Button:**
```tsx
<button className="bg-emerald-500 hover:bg-emerald-600 text-white">
  Growth Action
</button>
```

**Sapphire Button:**
```tsx
<button className="bg-sapphire-600 hover:bg-sapphire-700 text-white">
  Trust Action
</button>
```

**Ruby Button:**
```tsx
<button className="bg-ruby-600 hover:bg-ruby-700 text-white">
  Bold Action
</button>
```

**Amethyst Button:**
```tsx
<button className="bg-amethyst-600 hover:bg-amethyst-700 text-white">
  Creative Action
</button>
```

## Enhanced Visual Effects

### Jewel-Toned Shadows

The dark theme includes enhanced shadows with jewel tone glows:

```css
/* Large shadows with emerald and sapphire glow */
.dark .shadow-lg {
  box-shadow: 0 10px 30px -5px rgba(5, 150, 105, 0.2),
              0 0 20px rgba(30, 58, 138, 0.15);
}

/* Extra large shadows with emerald and amethyst glow */
.dark .shadow-xl {
  box-shadow: 0 20px 40px -10px rgba(5, 150, 105, 0.3),
              0 0 30px rgba(147, 51, 234, 0.2);
}
```

### Glow Effects

Use the `GlowCard` component with jewel-toned glows:

```tsx
import GlowCard from "@/components/ui/GlowCard";

// Emerald glow
<GlowCard glowColor="rgba(5, 150, 105, 0.4)">
  <div className="p-6">Content</div>
</GlowCard>

// Sapphire glow
<GlowCard glowColor="rgba(30, 64, 175, 0.4)">
  <div className="p-6">Content</div>
</GlowCard>

// Ruby glow
<GlowCard glowColor="rgba(185, 28, 28, 0.4)">
  <div className="p-6">Content</div>
</GlowCard>

// Amethyst glow
<GlowCard glowColor="rgba(126, 34, 206, 0.4)">
  <div className="p-6">Content</div>
</GlowCard>
```

## Gradient Combinations

### Two-Tone Gradients

**Emerald to Sapphire:**
```tsx
<div className="bg-gradient-to-r from-emerald-500 to-sapphire-600">
```

**Ruby to Amethyst:**
```tsx
<div className="bg-gradient-to-r from-ruby-600 to-amethyst-600">
```

**Sapphire to Amethyst:**
```tsx
<div className="bg-gradient-to-r from-sapphire-600 to-amethyst-600">
```

### Three-Tone Gradients

**Emerald → Sapphire → Amethyst:**
```tsx
<h1 className="bg-gradient-to-r from-emerald-400 via-sapphire-400 to-amethyst-400 bg-clip-text text-transparent">
```

**Sapphire → Ruby → Amethyst:**
```tsx
<div className="bg-gradient-to-br from-sapphire-950 via-ruby-950 to-amethyst-950">
```

## Design Principles

### 1. **Depth Through Darkness**
Use the rich dark backgrounds (`#0a0e17`, `#111827`) as the foundation. These deep colors make the jewel tones pop.

### 2. **Layered Elevation**
- Primary background: `--color-dark-bg-primary`
- Cards: `--color-dark-bg-secondary`
- Nested elements: `--color-dark-bg-tertiary`
- Floating elements: `--color-dark-bg-elevated`

### 3. **Strategic Color Use**
- **Emerald**: Growth, success, positive actions
- **Sapphire**: Trust, information, primary brand
- **Ruby**: Warnings, important actions, energy
- **Amethyst**: Premium features, creativity, luxury

### 4. **Contrast for Readability**
- Headings: Use lightest shades (50-100)
- Body text: Use mid-light shades (100-200)
- Secondary text: Use lighter mid-tones (200-300)

### 5. **Subtle Gradients**
Prefer gradients within the same color family for backgrounds:
```tsx
// Good: Single color gradient
dark:from-emerald-950 dark:to-emerald-900

// Better: Adjacent colors
dark:from-emerald-950 dark:via-sapphire-950 dark:to-amethyst-950
```

## Migration Guide

### Updating Existing Components

**Before:**
```tsx
<div className="bg-gray-900 text-gray-100">
  <h2 className="text-gray-100">Title</h2>
  <p className="text-gray-400">Description</p>
</div>
```

**After:**
```tsx
<div className="dark:bg-gradient-to-br dark:from-sapphire-950 dark:to-emerald-950 dark:text-emerald-50">
  <h2 className="dark:text-emerald-50">Title</h2>
  <p className="dark:text-sapphire-100">Description</p>
</div>
```

### Card Components

**Before:**
```tsx
<div className="bg-white dark:bg-gray-800 shadow-lg">
```

**After:**
```tsx
<GlowCard glowColor="rgba(5, 150, 105, 0.4)">
  <div className="bg-white dark:bg-gradient-to-br dark:from-emerald-950 dark:to-emerald-900 shadow-xl">
  </div>
</GlowCard>
```

## Theme Showcase Page

Visit `/theme-showcase` to see all jewel tones in action with:
- Complete color palette swatches
- Dark background variations
- Example cards with different jewel tone combinations
- Text color demonstrations
- Button variations
- Shadow and glow effects

## Technical Implementation

### File Structure
```
src/
  app/
    globals.css              # Theme definitions
    layout.tsx              # Dark mode setup
    theme-showcase/         # Demo page
      page.tsx
  components/
    ui/
      GlowCard.tsx          # Jewel-toned glow effects
```

### CSS Variables
All jewel tones are defined as CSS variables in `globals.css`:
- Access via `var(--color-emerald-500)` in custom CSS
- Use Tailwind utilities in JSX: `className="bg-emerald-500"`

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS variables with fallbacks
- Gradient support required for full experience

## Best Practices

✅ **DO:**
- Use jewel tones for accents and highlights
- Layer gradients for depth
- Apply glows to important elements
- Test readability in dark mode

❌ **DON'T:**
- Overuse bright jewel tones (use sparingly)
- Mix too many colors at once (2-3 max)
- Forget light mode styling
- Use pure black backgrounds (use rich darks instead)

## Examples from the Site

### Homepage Hero
```tsx
<section className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 dark:from-sapphire-950 dark:via-emerald-950 dark:to-amethyst-950">
```

### Process Cards
```tsx
<GlowCard glowColor="rgba(5, 150, 105, 0.4)">
  <div className="bg-white dark:bg-gradient-to-br dark:from-emerald-950 dark:to-emerald-900">
    {/* Emerald-themed content */}
  </div>
</GlowCard>
```

### Stats Section
```tsx
<div className="dark:bg-gradient-to-br dark:from-sapphire-950 dark:to-emerald-950">
  <h2 className="dark:text-emerald-50">Results That Speak</h2>
  <p className="dark:text-sapphire-100">Statistics and achievements</p>
</div>
```

## Troubleshooting

**Issue**: Colors not applying in dark mode
- **Solution**: Ensure `.dark` class is on `<html>` element

**Issue**: Gradients look too bright
- **Solution**: Use darker shades (900-950) for backgrounds

**Issue**: Text hard to read
- **Solution**: Use lighter shades (50-200) for text on dark backgrounds

**Issue**: Shadows not visible
- **Solution**: The jewel-toned shadows work best on elevated surfaces

## Future Enhancements

- [ ] Add jewel tone variants for all interactive states (hover, active, focus)
- [ ] Create color palette generator for custom jewel combinations
- [ ] Add accessibility checker for contrast ratios
- [ ] Create themed component library with preset jewel tone combinations
- [ ] Add animation presets with jewel tone transitions

---

**Last Updated**: 2025-10-26
**Version**: 1.0.0
**Status**: Production Ready ✅
