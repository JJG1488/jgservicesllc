# GlowCard Component

An interactive card component with a mouse-tracking radial gradient glow effect. Perfect for creating modern, premium UI elements that respond to user interaction.

## Features

- 🎨 **Customizable glow colors** - Use any RGBA color or design system tokens
- ✨ **Mouse-tracking effect** - Glow follows cursor for engaging interaction
- 🎭 **Smooth animations** - Powered by Framer Motion
- ⚡ **Performance optimized** - Glow only renders on hover
- 🎯 **Fully typed** - Complete TypeScript support
- 🎛️ **Highly configurable** - Props for lift, duration, and callbacks
- 🔧 **Zero dependencies** - Only requires Framer Motion (already in most React projects)

## Installation

### Copy to Your Project

1. **Copy the entire GlowCard folder:**
   ```bash
   cp -r src/ui-library/primitives/GlowCard /your-project/src/components/
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install framer-motion
   # or
   pnpm add framer-motion
   # or
   yarn add framer-motion
   ```

3. **Import and use:**
   ```tsx
   import GlowCard from '@/components/GlowCard/GlowCard';

   function MyComponent() {
     return (
       <GlowCard>
         <h3>Your content here</h3>
       </GlowCard>
     );
   }
   ```

## Usage Examples

### Basic Usage

```tsx
import GlowCard from '@/components/GlowCard/GlowCard';

export default function BasicExample() {
  return (
    <GlowCard>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">Featured Content</h3>
        <p>This card glows when you hover over it!</p>
      </div>
    </GlowCard>
  );
}
```

### Custom Glow Color

```tsx
<GlowCard glowColor="rgba(147, 51, 234, 0.5)">
  <div className="glass-card rounded-2xl p-8">
    <h3>Purple Glow</h3>
    <p>Using amethyst purple from design tokens</p>
  </div>
</GlowCard>
```

### Using Design System Colors

```tsx
import GlowCard from '@/components/GlowCard/GlowCard';
import { glowColors } from '@/components/GlowCard/GlowCard.data';

export default function DesignTokenExample() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Primary sapphire glow */}
      <GlowCard glowColor={glowColors.primary}>
        <div className="glass-card p-6">Primary</div>
      </GlowCard>

      {/* Secondary amethyst glow */}
      <GlowCard glowColor={glowColors.secondary}>
        <div className="glass-card p-6">Secondary</div>
      </GlowCard>

      {/* Accent emerald glow */}
      <GlowCard glowColor={glowColors.accent}>
        <div className="glass-card p-6">Accent</div>
      </GlowCard>
    </div>
  );
}
```

### Custom Animation Settings

```tsx
<GlowCard
  hoverLift={-10}
  duration={0.5}
  onHover={() => console.log('Card hovered!')}
  onHoverEnd={() => console.log('Hover ended')}
>
  <div className="p-8">
    <h3>Slow & Dramatic</h3>
    <p>Lifts 10px with 0.5s animation</p>
  </div>
</GlowCard>
```

### Disable Hover Effects

```tsx
<GlowCard disableHover>
  <img src="/static-image.jpg" alt="No hover effect" />
</GlowCard>
```

### With Glass Card Styling

```tsx
<GlowCard
  glowColor="rgba(37, 99, 235, 0.5)"
  className="glass-card rounded-2xl"
>
  <div className="p-10">
    <h2 className="text-4xl font-bold gradient-text mb-4">
      Premium Feature
    </h2>
    <p className="text-blue-100">
      Combines glassmorphism with glow effect for a stunning UI
    </p>
  </div>
</GlowCard>
```

### Grid of Service Cards

```tsx
const services = [
  { title: 'Web Design', color: glowColors.primary },
  { title: 'Development', color: glowColors.secondary },
  { title: 'Consulting', color: glowColors.accent },
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service) => (
        <GlowCard key={service.title} glowColor={service.color}>
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-blue-100 mt-2">Service description...</p>
          </div>
        </GlowCard>
      ))}
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | **Required** | Content to render inside the card |
| `className` | `string` | `''` | Additional CSS classes for the card |
| `glowColor` | `string` | `'rgba(59, 130, 246, 0.5)'` | RGBA color for the glow effect |
| `hoverLift` | `number` | `-5` | Distance to lift card on hover (px) |
| `duration` | `number` | `0.3` | Animation duration (seconds) |
| `disableHover` | `boolean` | `false` | Disable hover effects entirely |
| `onHover` | `() => void` | `undefined` | Callback when card is hovered |
| `onHoverEnd` | `() => void` | `undefined` | Callback when hover ends |

## Available Glow Colors

Import from `GlowCard.data.ts`:

```tsx
import { glowColors } from '@/components/GlowCard/GlowCard.data';
```

| Color | Value | Use Case |
|-------|-------|----------|
| `glowColors.primary` | `rgba(37, 99, 235, 0.5)` | Primary brand color (sapphire) |
| `glowColors.secondary` | `rgba(147, 51, 234, 0.5)` | Secondary brand color (amethyst) |
| `glowColors.accent` | `rgba(16, 185, 129, 0.5)` | Success/highlight (emerald) |
| `glowColors.neutral` | `rgba(75, 85, 99, 0.5)` | Subtle effect (gray) |
| `glowColors.ruby` | `rgba(220, 38, 38, 0.5)` | Error/warning (red) |
| `glowColors.blue` | `rgba(59, 130, 246, 0.5)` | Original default (blue-500) |

## Customization

### Changing Default Values

Edit `GlowCard.data.ts` to change defaults for your entire project:

```tsx
export const glowCardDefaults = {
  glowColor: glowColors.primary,  // Change default glow color
  animation: {
    hoverLift: -8,                // Change default lift
    duration: 0.4,                // Change default duration
    glowFadeDuration: 0.2,        // Change glow fade speed
    glowOpacity: 0.8,             // Change max glow brightness
    borderGlowOpacity: 0.4,       // Change border glow opacity
  },
  gradient: {
    innerRadius: 500,             // Change inner glow size
    outerRadius: 700,             // Change outer glow size
    spread: 35,                   // Change glow spread %
  },
} as const;
```

### Creating Theme Variants

```tsx
// themes.ts
import { glowColors } from '@/components/GlowCard/GlowCard.data';

export const cardThemes = {
  ocean: {
    glow: 'rgba(14, 165, 233, 0.5)',  // Sky blue
    class: 'bg-gradient-to-br from-sky-900/20 to-cyan-900/20',
  },
  sunset: {
    glow: 'rgba(251, 146, 60, 0.5)',  // Orange
    class: 'bg-gradient-to-br from-orange-900/20 to-pink-900/20',
  },
  forest: {
    glow: glowColors.accent,
    class: 'bg-gradient-to-br from-emerald-900/20 to-green-900/20',
  },
};

// Usage
<GlowCard
  glowColor={cardThemes.ocean.glow}
  className={`glass-card ${cardThemes.ocean.class}`}
>
  <div className="p-6">Ocean theme</div>
</GlowCard>
```

## Performance Notes

- **Glow only renders on hover** - No performance impact when idle
- **Two glow layers** - Inner radial glow + border glow for depth
- **GPU-accelerated** - Uses CSS transforms for smooth animations
- **Optimized re-renders** - Mouse tracking limited to hovered card only

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

Requires support for:
- CSS `backdrop-filter` (for glassmorphism if used)
- CSS `radial-gradient`
- Modern JavaScript (ES6+)

## Troubleshooting

### Glow not appearing?

1. Ensure you're hovering over the card
2. Check that `disableHover` is not set to `true`
3. Verify glow color has opacity > 0 (e.g., `rgba(r, g, b, 0.5)` not `rgb(r, g, b)`)

### Card not lifting on hover?

- Check that `hoverLift` is a negative number (e.g., `-5` to lift up)
- Ensure Framer Motion is installed and imported correctly

### TypeScript errors?

- Make sure you've copied both `GlowCard.tsx` and `GlowCard.data.ts`
- Verify import paths match your project structure

## Related Components

- **FloatingCard** - Card with continuous floating animation
- **MagneticButton** - Button with magnetic hover effect
- **AnimatedButton** - Button with scale and glow animations

## License

Free to use in your projects. No attribution required.

## Contributing

Found a bug or have a suggestion? Open an issue in the main repository!

---

**Version:** 1.0.0
**Last Updated:** 2025-01-28
**Dependencies:** Framer Motion 11.x+
**Framework:** React 18+ / Next.js 13+
