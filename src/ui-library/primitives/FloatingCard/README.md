# FloatingCard Component

An animated card that gracefully fades in when scrolling into view and floats upward on hover. Perfect for service grids, feature showcases, and any content that needs engaging scroll animations.

## Features

- 🎬 **Scroll animations** - Fades in when entering viewport
- ✨ **Hover float effect** - Lifts up smoothly on hover
- 🎨 **Multiple backgrounds** - Solid or glass effects
- ⏱️ **Staggered delays** - Create sequential animations
- 🎯 **Fully typed** - Complete TypeScript support
- 🎛️ **Highly configurable** - Control all animation parameters
- ⚡ **Performance optimized** - Uses Intersection Observer

## Installation

### Copy to Your Project

1. **Copy the FloatingCard folder:**
   ```bash
   cp -r src/ui-library/primitives/FloatingCard /your-project/src/components/
   ```

2. **Install dependencies:**
   ```bash
   pnpm add framer-motion
   ```

3. **Import and use:**
   ```tsx
   import FloatingCard from '@/components/FloatingCard/FloatingCard';

   <FloatingCard>
     <div className="p-8">
       <h3>Your Content</h3>
     </div>
   </FloatingCard>
   ```

## Usage Examples

### Basic Usage

```tsx
<FloatingCard>
  <div className="p-8">
    <h3 className="text-2xl font-bold mb-4">Feature Title</h3>
    <p className="text-blue-100">Feature description</p>
  </div>
</FloatingCard>
```

### Service Grid with Staggered Animation

```tsx
const services = [
  { id: 1, title: 'Web Design', icon: '🎨' },
  { id: 2, title: 'Development', icon: '💻' },
  { id: 3, title: 'SEO', icon: '📈' },
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <FloatingCard key={service.id} delay={index * 0.15}>
          <div className="p-8 text-center">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
          </div>
        </FloatingCard>
      ))}
    </div>
  );
}
```

### Different Background Styles

```tsx
// Default: Glass medium effect
<FloatingCard background="glassMd">
  <div className="p-6">Glass Medium</div>
</FloatingCard>

// Solid white (original style)
<FloatingCard background="solid">
  <div className="p-6">White Background</div>
</FloatingCard>

// Glass card with gradient
<FloatingCard background="glassCard">
  <div className="p-6">Glass Card</div>
</FloatingCard>

// Small glass effect
<FloatingCard background="glassSm">
  <div className="p-6">Glass Small</div>
</FloatingCard>

// Large glass effect
<FloatingCard background="glassLg">
  <div className="p-6">Glass Large</div>
</FloatingCard>
```

### Custom Animation Values

```tsx
<FloatingCard
  initialOffset={40}
  hoverLift={-20}
  delay={0.3}
>
  <div className="p-8">
    <h3>Dramatic Animation</h3>
  </div>
</FloatingCard>
```

### Disable Animations

```tsx
// No hover effect
<FloatingCard disableHover>
  <div className="p-6">Static hover</div>
</FloatingCard>

// No initial fade-in
<FloatingCard disableInitialAnimation>
  <div className="p-6">Immediately visible</div>
</FloatingCard>

// Both disabled
<FloatingCard disableHover disableInitialAnimation>
  <div className="p-6">Completely static</div>
</FloatingCard>
```

### With Click Handler

```tsx
<FloatingCard onClick={() => alert('Card clicked!')}>
  <div className="p-6 cursor-pointer">
    <h3>Clickable Card</h3>
  </div>
</FloatingCard>
```

### Feature Showcase

```tsx
const features = [
  { title: 'Fast', description: 'Lightning quick performance' },
  { title: 'Secure', description: 'Enterprise-grade security' },
  { title: 'Scalable', description: 'Grows with your business' },
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <FloatingCard key={feature.title} delay={i * 0.2}>
              <div className="p-10 text-center">
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  {feature.title}
                </h3>
                <p className="text-blue-100">
                  {feature.description}
                </p>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | Card content |
| `delay` | `number` | `0` | Animation delay (seconds) |
| `className` | `string` | `''` | Additional CSS classes |
| `background` | `BackgroundStyle` | `'glassMd'` | Background variant |
| `initialOffset` | `number` | `20` | Initial Y offset (pixels) |
| `hoverLift` | `number` | `-10` | Hover lift distance (pixels) |
| `disableHover` | `boolean` | `false` | Disable hover animation |
| `disableInitialAnimation` | `boolean` | `false` | Disable fade-in |
| `onClick` | `() => void` | `undefined` | Click handler |

## Background Styles

| Style | Description | Use Case |
|-------|-------------|----------|
| `glassSm` | Small blur glass effect | Subtle glass UI |
| `glassMd` | Medium blur glass effect | Default, balanced |
| `glassLg` | Large blur glass effect | Heavy glass emphasis |
| `glassCard` | Glass with gradient | Premium cards |
| `solid` | Solid white background | Traditional look |
| `custom` | Empty (use className) | Full control |

## Animation Behavior

### Initial Animation
1. Card starts at `opacity: 0` and `y: initialOffset`
2. When entering viewport, animates to `opacity: 1` and `y: 0`
3. Uses Intersection Observer (efficient!)
4. Triggers once by default (configurable)

### Hover Animation
1. Card lifts up by `hoverLift` pixels
2. Shadow increases from `shadow-md` to `shadow-2xl`
3. Smooth 0.3s transition
4. Returns to normal on mouse leave

## Customization

### Changing Defaults

Edit `FloatingCard.data.ts`:

```tsx
export const floatingCardDefaults = {
  delay: 0.1,                      // Default delay
  background: 'glassCard',         // Default background
  rounded: 'rounded-2xl',          // Default border radius
  animation: {
    fadeInDuration: 0.8,           // Slower fade-in
    hoverDuration: 0.4,            // Slower hover
    shadowDuration: 0.4,           // Slower shadow
  },
  float: {
    initialOffset: 30,             // Larger initial offset
    hoverLift: -15,                // Higher lift
    viewportMargin: '-50px',       // Earlier trigger
    viewportOnce: false,           // Animate every time
  },
} as const;
```

## Performance

- ✅ Uses Intersection Observer (no scroll listeners!)
- ✅ GPU-accelerated transforms
- ✅ Animates only when in viewport
- ✅ Efficient re-renders with Framer Motion
- ✅ Minimal JavaScript overhead

## Accessibility

- ✅ Respects `prefers-reduced-motion`
- ✅ Keyboard navigable (if clickable)
- ✅ Proper focus states
- ✅ Screen reader friendly

## Troubleshooting

### Card not animating on scroll?

1. Ensure card is initially out of viewport
2. Check that `disableInitialAnimation` is not `true`
3. Adjust `viewportMargin` if needed

### Hover not working?

- Verify `disableHover` is not `true`
- Check that you're actually hovering the element
- Ensure Framer Motion is installed

### Shadow not changing?

- Tailwind must be configured
- Check that `shadow-md` and `shadow-2xl` utilities work
- Verify no conflicting CSS

## Related Components

- **GlowCard** - Card with cursor-tracking glow
- **AnimatedButton** - Button with gradient animation
- **MagneticButton** - Button with magnetic effect

## License

Free to use in your projects. No attribution required.

---

**Version:** 1.0.0
**Last Updated:** 2025-01-28
**Dependencies:** Framer Motion 11.x+
**Framework:** React 18+
