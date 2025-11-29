# MagneticButton Component

An interactive button/link component with a magnetic hover effect that follows your cursor using smooth spring-based physics. Perfect for creating engaging CTAs and navigation elements.

## Features

- 🧲 **Magnetic attraction** - Button follows cursor with spring physics
- 🔗 **Link or button** - Works as Next.js Link or native button
- ⚙️ **Highly configurable** - Adjust strength, stiffness, damping, and more
- 🎯 **Fully typed** - Complete TypeScript support
- 🎨 **Design system ready** - Preset strength levels
- ⚡ **Performance optimized** - Efficient mouse tracking
- 📱 **Touch friendly** - Graceful fallback on mobile

## Installation

### Copy to Your Project

1. **Copy the entire MagneticButton folder:**
   ```bash
   cp -r src/ui-library/primitives/MagneticButton /your-project/src/components/
   ```

2. **Install dependencies:**
   ```bash
   npm install framer-motion
   # or
   pnpm add framer-motion
   ```

3. **Import and use:**
   ```tsx
   import MagneticButton from '@/components/MagneticButton/MagneticButton';

   function MyComponent() {
     return (
       <MagneticButton href="/contact">
         <span className="btn-primary">Contact Us</span>
       </MagneticButton>
     );
   }
   ```

## Usage Examples

### Basic Button

```tsx
import MagneticButton from '@/components/MagneticButton/MagneticButton';

export default function BasicExample() {
  return (
    <MagneticButton onClick={() => alert('Clicked!')}>
      <button className="btn-primary">
        Click Me
      </button>
    </MagneticButton>
  );
}
```

### Link to Internal Page

```tsx
<MagneticButton href="/services">
  <div className="glass-card px-8 py-4 rounded-xl">
    <h3 className="text-xl font-semibold gradient-text">
      View Services
    </h3>
  </div>
</MagneticButton>
```

### External Link

```tsx
<MagneticButton
  href="https://github.com/yourusername"
  external
>
  <button className="btn-secondary">
    Visit GitHub
  </button>
</MagneticButton>
```

### Custom Magnetic Strength

```tsx
import { magneticStrength } from '@/components/MagneticButton/MagneticButton.data';

// Subtle effect
<MagneticButton strength={magneticStrength.subtle}>
  <span className="text-blue-300 hover:text-blue-100">
    Subtle Hover
  </span>
</MagneticButton>

// Strong effect
<MagneticButton strength={magneticStrength.strong}>
  <button className="btn-primary text-lg px-10 py-5">
    Strong Attraction!
  </button>
</MagneticButton>

// Extreme effect
<MagneticButton strength={magneticStrength.extreme}>
  <div className="glass-lg rounded-2xl p-8">
    <h2 className="text-3xl gradient-text">Extreme Pull!</h2>
  </div>
</MagneticButton>
```

### Custom Spring Animation

```tsx
<MagneticButton
  stiffness={200}
  damping={20}
  mass={0.2}
>
  <button className="btn-primary">
    Snappier Animation
  </button>
</MagneticButton>
```

### Custom Scaling

```tsx
<MagneticButton
  hoverScale={1.15}
  tapScale={0.9}
>
  <button className="btn-primary">
    Dramatic Scaling
  </button>
</MagneticButton>
```

### Disabled Magnetic Effect

```tsx
<MagneticButton disabled onClick={handleSubmit}>
  <button className="btn-primary" disabled={isSubmitting}>
    {isSubmitting ? 'Submitting...' : 'Submit'}
  </button>
</MagneticButton>
```

### CTA Button Grid

```tsx
const ctas = [
  { text: 'Get Started', href: '/signup', strength: 0.4 },
  { text: 'View Demo', href: '/demo', strength: 0.3 },
  { text: 'Learn More', href: '/about', strength: 0.2 },
];

export default function CTAGrid() {
  return (
    <div className="flex gap-6">
      {ctas.map((cta) => (
        <MagneticButton
          key={cta.text}
          href={cta.href}
          strength={cta.strength}
        >
          <button className="btn-primary px-8 py-4">
            {cta.text}
          </button>
        </MagneticButton>
      ))}
    </div>
  );
}
```

### Hero CTA Section

```tsx
export default function HeroCTA() {
  return (
    <div className="flex gap-6 justify-center">
      <MagneticButton
        href="/get-started"
        strength={0.5}
        hoverScale={1.1}
      >
        <button className="btn-primary text-lg px-10 py-5">
          Get Started Free
        </button>
      </MagneticButton>

      <MagneticButton
        href="/demo"
        strength={0.3}
      >
        <button className="btn-secondary text-lg px-10 py-5">
          Watch Demo
        </button>
      </MagneticButton>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | **Required** | Button content |
| `href` | `string` | `undefined` | Link destination (renders as Next.js Link) |
| `onClick` | `() => void` | `undefined` | Click handler (renders as button) |
| `className` | `string` | `''` | Additional CSS classes |
| `strength` | `number` | `0.3` | Magnetic attraction strength (0-1) |
| `stiffness` | `number` | `150` | Spring stiffness (higher = snappier) |
| `damping` | `number` | `15` | Spring damping (higher = less bouncy) |
| `mass` | `number` | `0.1` | Spring mass (lower = faster) |
| `hoverScale` | `number` | `1.05` | Scale on hover |
| `tapScale` | `number` | `0.95` | Scale on tap/click |
| `disabled` | `boolean` | `false` | Disable magnetic effect |
| `external` | `boolean` | `false` | Open link in new tab (only for href) |

## Preset Strength Levels

Import from `MagneticButton.data.ts`:

```tsx
import { magneticStrength } from '@/components/MagneticButton/MagneticButton.data';
```

| Strength | Value | Use Case |
|----------|-------|----------|
| `magneticStrength.subtle` | `0.15` | Subtle, professional effect |
| `magneticStrength.normal` | `0.3` | Default, balanced effect |
| `magneticStrength.strong` | `0.5` | Eye-catching, playful |
| `magneticStrength.extreme` | `0.8` | Dramatic, attention-grabbing |

## Customization

### Changing Default Values

Edit `MagneticButton.data.ts` to change defaults for your entire project:

```tsx
export const magneticButtonDefaults = {
  strength: magneticStrength.strong,  // Change default strength
  spring: {
    stiffness: 200,                   // Snappier animation
    damping: 20,                      // Less bouncy
    mass: 0.15,                       // Slightly heavier feel
  },
  scale: {
    hoverScale: 1.08,                 // Slightly bigger hover
    tapScale: 0.92,                   // Slightly bigger tap
  },
} as const;
```

### Creating Preset Variants

```tsx
// variants.ts
export const buttonVariants = {
  primary: {
    strength: 0.4,
    hoverScale: 1.08,
    className: 'btn-primary text-lg px-8 py-4',
  },
  secondary: {
    strength: 0.3,
    hoverScale: 1.05,
    className: 'btn-secondary px-6 py-3',
  },
  ghost: {
    strength: 0.2,
    hoverScale: 1.03,
    className: 'text-blue-300 hover:text-blue-100 px-4 py-2',
  },
};

// Usage
<MagneticButton {...buttonVariants.primary} href="/pricing">
  Get Started
</MagneticButton>
```

## Physics Explained

### Strength (0-1)
- Controls how far the button moves relative to cursor position
- `0.1` = Barely moves
- `0.3` = Normal, balanced movement
- `0.8` = Moves almost to cursor

### Stiffness (50-300)
- How quickly the button responds to cursor
- Lower = slower, more fluid
- Higher = faster, more responsive
- Default: 150

### Damping (10-30)
- How much the button bounces/oscillates
- Lower = more bouncy
- Higher = smoother, less bounce
- Default: 15

### Mass (0.1-1)
- How "heavy" the button feels
- Lower = lighter, faster response
- Higher = heavier, slower response
- Default: 0.1

## Performance Notes

- **Optimized mouse tracking** - Only calculates on hover
- **Spring physics** - GPU-accelerated transforms
- **Automatic cleanup** - Resets on mouse leave
- **Mobile friendly** - Gracefully degrades on touch devices

## Behavior on Different Devices

- **Desktop** - Full magnetic effect with mouse tracking
- **Tablet** - Reduced effect or scale-only on touch
- **Mobile** - Scale animation on tap, no magnetic effect

## Accessibility

- ✅ Works with keyboard navigation
- ✅ Preserves button/link semantics
- ✅ ARIA-friendly (inherits from children)
- ✅ Focus states maintained

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers

## Troubleshooting

### Button not moving?

1. Check that `disabled` is not set to `true`
2. Verify `strength` is > 0
3. Ensure you're hovering over the element
4. Check that Framer Motion is installed

### Animation feels sluggish?

- Increase `stiffness` (try 200-300)
- Decrease `mass` (try 0.05)
- Decrease `damping` slightly

### Too bouncy?

- Increase `damping` (try 20-25)
- Decrease `stiffness`

## Related Components

- **GlowCard** - Card with mouse-tracking glow effect
- **AnimatedButton** - Button with scale and glow animations
- **FloatingCard** - Card with continuous floating animation

## License

Free to use in your projects. No attribution required.

---

**Version:** 1.0.0
**Last Updated:** 2025-01-28
**Dependencies:** Framer Motion 11.x+, Next.js 13+ (optional)
**Framework:** React 18+
