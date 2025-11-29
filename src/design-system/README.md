# Design System

This design system provides a centralized, themeable configuration for all design tokens used throughout the application.

## Overview

The design system consists of three main files:

- **`tokens.config.ts`** - Master configuration of all design tokens
- **`generateCSS.ts`** - Script to convert tokens to CSS custom properties
- **`index.ts`** - Export point for TypeScript imports

## Usage

### Using Tokens in TypeScript/TSX

```typescript
import { tokens } from '@/design-system';

// Access color values
const primaryColor = tokens.colors.primary[600]; // #2563eb

// Access spacing
const padding = tokens.spacing.lg; // 1.5rem

// Access typography
const fontFamily = tokens.typography.fontFamily.playfair;
```

### Using Generated CSS Classes

The design system automatically generates utility classes that can be used in your components:

```tsx
// Glass effects
<div className="glass-sm">Small glass effect</div>
<div className="glass-md">Medium glass effect</div>
<div className="glass-lg">Large glass effect</div>
<div className="glass-card">Glass card with hover effect</div>

// Gradients
<h1 className="gradient-text">Gradient text</h1>
<div className="hero-gradient">Hero background</div>

// Buttons
<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>

// Layout
<section className="section-container">
  Content with consistent spacing
</section>

// Typography
<h1 className="font-ephesis">Ephesis Font</h1>
<p className="font-playfair">Playfair Display Font</p>
```

### Using CSS Custom Properties

All tokens are available as CSS custom properties:

```css
.my-component {
  color: var(--color-primary-600);
  padding: var(--spacing-lg);
  border-radius: var(--rounded-lg);
  font-family: var(--font-playfair);
  transition: all var(--duration-normal) var(--ease-smooth);
}
```

## Customizing the Theme

### For This Project

1. Edit `src/design-system/tokens.config.ts`
2. Modify any values (colors, spacing, etc.)
3. Run `pnpm build` to regenerate CSS
4. All components automatically use the new theme

### For a New Project

1. **Copy the design system folder:**
   ```bash
   cp -r src/design-system /path/to/new-project/src/
   ```

2. **Install dependencies (if needed):**
   ```bash
   pnpm add framer-motion  # Only if using animation components
   ```

3. **Import in your globals.css:**
   ```css
   @import "../design-system-generated.css";
   ```

4. **Customize tokens:**
   - Edit `tokens.config.ts` with your brand colors
   - Change spacing, typography, etc. as needed
   - Run build to regenerate

## Token Categories

### Colors

Eight color palettes, each with 11 shades (50-950):

- `primary` - Sapphire blue (#2563eb)
- `secondary` - Amethyst purple (#9333ea)
- `accent` - Emerald green (#10b981)
- `neutral` - Grayscale
- `emerald` - Extended emerald palette
- `sapphire` - Extended sapphire palette
- `ruby` - Red tones
- `amethyst` - Extended amethyst palette

### Spacing

Consistent spacing scale:
- `xs` → `5xl` (8px → 96px)

### Typography

**Font Families:**
- `playfair` - Playfair Display (serif)
- `ephesis` - Ephesis (cursive)
- `sans` - System sans-serif stack
- `mono` - Monospace code font

**Font Sizes:**
- `xs` → `7xl` (12px → 72px)

**Font Weights:**
- `light`, `normal`, `medium`, `semibold`, `bold`

**Line Heights:**
- `tight`, `normal`, `relaxed`

### Glass Effects

Four glass morphism variants:
- `glass.sm` - Subtle glass effect
- `glass.md` - Standard glass effect
- `glass.lg` - Heavy glass effect
- `glass.card` - Card-specific with hover

Each includes:
- `background` - RGBA background
- `blur` - Backdrop blur amount
- `border` - Border color
- `shadow` - Box shadow

### Border Radius

Consistent rounding scale:
- `none`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `full`

### Shadows

Shadow presets:
- `sm` → `2xl` - Standard shadows
- `glow` - Special glow effect for cards

### Animation

**Easing Functions:**
- `default` / `smooth` - [0.25, 0.4, 0.25, 1]
- `bounce` - [0.34, 1.56, 0.64, 1]
- `ease` - [0.43, 0.13, 0.23, 0.96]

**Durations:**
- `fast` - 200ms
- `normal` - 300ms
- `slow` - 500ms

## Build Process

The CSS generation happens automatically during build:

1. TypeScript reads `tokens.config.ts`
2. `generateCSS.ts` converts to CSS custom properties
3. Output: `src/app/design-system-generated.css`
4. Imported by `globals.css`

### Manual Generation

```bash
ts-node src/design-system/generateCSS.ts
```

## Examples

### Creating a Themed Button

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

function Button({ variant = 'primary', children }: ButtonProps) {
  return (
    <button className={`btn-${variant}`}>
      {children}
    </button>
  );
}
```

### Creating a Glass Card

```tsx
import { tokens } from '@/design-system';

function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass-md rounded-2xl p-8">
      {children}
    </div>
  );
}
```

### Using Tokens in Framer Motion

```tsx
import { motion } from 'framer-motion';
import { tokens } from '@/design-system';

function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: tokens.animation.duration.normal / 1000,
        ease: tokens.animation.easing.smooth,
      }}
      className="glass-card"
    >
      Content
    </motion.div>
  );
}
```

## Theme Variants

### Creating Alternative Themes

1. **Duplicate `tokens.config.ts`:**
   ```bash
   cp tokens.config.ts tokens.ocean.config.ts
   ```

2. **Modify the ocean theme:**
   ```typescript
   // tokens.ocean.config.ts
   export const tokens: DesignTokens = {
     colors: {
       primary: { 600: '#0ea5e9' }, // Sky blue
       secondary: { 600: '#06b6d4' }, // Cyan
       // ... rest of config
     },
   };
   ```

3. **Switch themes in `index.ts`:**
   ```typescript
   // Change this line to use different theme:
   export { tokens } from './tokens.ocean.config';
   ```

### Dark/Light Mode Support

While this project is dark-mode only, you can extend for light mode:

```typescript
export const lightThemeTokens: DesignTokens = {
  // Light mode specific values
  background: {
    primary: '#ffffff',
    secondary: '#f9fafb',
    // ...
  },
};
```

## Maintenance

### Adding New Tokens

1. **Update the interface in `tokens.config.ts`:**
   ```typescript
   export interface DesignTokens {
     // ... existing
     newCategory: {
       value1: string;
       value2: string;
     };
   }
   ```

2. **Add values:**
   ```typescript
   export const tokens: DesignTokens = {
     // ... existing
     newCategory: {
       value1: '1rem',
       value2: '2rem',
     },
   };
   ```

3. **Update `generateCSS.ts` if needed** (for CSS custom properties)

4. **Rebuild:** `pnpm build`

### Removing Tokens

1. Remove from TypeScript interface
2. Remove from tokens object
3. Remove from CSS generation (if applicable)
4. Search codebase for usage and update
5. Rebuild

## Troubleshooting

**CSS not updating after token changes?**
- Run `pnpm build` to regenerate
- Check that `design-system-generated.css` is imported in `globals.css`
- Clear browser cache

**TypeScript errors?**
- Ensure token interfaces match actual values
- Check that all required properties are defined

**Colors not showing?**
- Verify CSS custom property names match generated file
- Check console for CSS syntax errors

## Contributing

When adding new components or utilities:

1. Use tokens from this design system
2. Document new utility classes in this README
3. Add examples of usage
4. Keep tokens.config.ts as single source of truth

---

**Last Updated:** 2025-01-28
**Version:** 1.0.0
