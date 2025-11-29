# FadeIn Animation Component

A scroll-triggered fade-in animation that activates when content enters the viewport. Supports directional slides and uses the design system animation tokens.

## Features

- 📜 **Scroll-triggered** - Uses Intersection Observer API
- 🎯 **Direction support** - Fade from up, down, left, right
- ⏱️ **Duration presets** - Fast, normal, slow, or custom
- 🎨 **Easing options** - Multiple easing functions
- ⚡ **Performance optimized** - Efficient viewport detection
- 🎛️ **Highly configurable** - Fine-tune all parameters
- 🔧 **Design system integrated** - Uses animation tokens

## Installation

### Copy to Your Project

```bash
cp -r src/ui-library/animations /your-project/src/components/
```

### Dependencies

```bash
pnpm add framer-motion react-intersection-observer
```

## Usage Examples

### Basic Usage

```tsx
import FadeIn from '@/ui-library/animations/FadeIn';

<FadeIn>
  <h1>This fades in when scrolled into view</h1>
</FadeIn>
```

### All Directions

```tsx
// From bottom (default)
<FadeIn direction="up">
  <p>Fades in from bottom</p>
</FadeIn>

// From top
<FadeIn direction="down">
  <p>Fades in from top</p>
</FadeIn>

// From left
<FadeIn direction="left">
  <p>Slides in from left</p>
</FadeIn>

// From right
<FadeIn direction="right">
  <p>Slides in from right</p>
</FadeIn>

// No slide (pure fade)
<FadeIn direction="none">
  <p>Just fades, no movement</p>
</FadeIn>
```

### Duration Presets

```tsx
import { durations } from '@/ui-library/animations/animation.config';

<FadeIn duration="fast">
  <p>Fast fade (0.2s)</p>
</FadeIn>

<FadeIn duration="normal">
  <p>Normal fade (0.3s)</p>
</FadeIn>

<FadeIn duration="slow">
  <p>Slow fade (0.5s)</p>
</FadeIn>

// Custom duration
<FadeIn duration={1.5}>
  <p>Very slow fade (1.5s)</p>
</FadeIn>
```

### Easing Functions

```tsx
<FadeIn easing="smooth">
  <p>Smooth easing (default)</p>
</FadeIn>

<FadeIn easing="bounce">
  <p>Bouncy entrance</p>
</FadeIn>

<FadeIn easing="ease">
  <p>Subtle easing</p>
</FadeIn>

<FadeIn easing="easeOut">
  <p>Ease out (slow end)</p>
</FadeIn>
```

### Staggered Animations

```tsx
const items = ['First', 'Second', 'Third', 'Fourth'];

{items.map((item, index) => (
  <FadeIn key={item} delay={index * 0.15} direction="left">
    <div className="p-4 glass-card rounded-lg">
      {item}
    </div>
  </FadeIn>
))}
```

### Hero Section

```tsx
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <FadeIn direction="down">
          <h1 className="text-6xl font-bold gradient-text">
            Welcome
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <p className="text-xl text-blue-100">
            Your journey starts here
          </p>
        </FadeIn>

        <FadeIn delay={0.4} direction="none">
          <button className="btn-primary">
            Get Started
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
```

### Feature Grid

```tsx
const features = [
  { title: 'Fast', icon: '⚡' },
  { title: 'Secure', icon: '🔒' },
  { title: 'Scalable', icon: '📈' },
];

<div className="grid grid-cols-3 gap-6">
  {features.map((feature, i) => (
    <FadeIn
      key={feature.title}
      delay={i * 0.1}
      direction={i % 2 === 0 ? 'left' : 'right'}
    >
      <div className="glass-card p-8 text-center">
        <div className="text-4xl mb-4">{feature.icon}</div>
        <h3 className="text-xl font-semibold">{feature.title}</h3>
      </div>
    </FadeIn>
  ))}
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | Content to animate |
| `delay` | `number` | `0` | Delay in seconds |
| `duration` | `Duration \| number` | `'normal'` | Animation duration |
| `direction` | `Direction` | `'up'` | Fade direction |
| `easing` | `Easing` | `'smooth'` | Easing function |
| `className` | `string` | `''` | Additional CSS classes |
| `threshold` | `number` | `0.1` | Viewport threshold (0-1) |
| `triggerOnce` | `boolean` | `true` | Animate only once |
| `viewportMargin` | `string` | `'-100px'` | Viewport margin |
| `disabled` | `boolean` | `false` | Disable animation |
| `onAnimationComplete` | `() => void` | `undefined` | Completion callback |

## Duration Presets

| Preset | Value | Use Case |
|--------|-------|----------|
| `fast` | 0.2s | Quick reveals |
| `normal` | 0.3s | Default, balanced |
| `slow` | 0.5s | Dramatic entries |
| `instant` | 0.15s | Subtle effects |
| `lazy` | 0.8s | Very slow |

## Direction Options

- `up` - Fade in from bottom (default)
- `down` - Fade in from top
- `left` - Slide in from left
- `right` - Slide in from right
- `upLarge` - Large offset from bottom
- `downLarge` - Large offset from top
- `leftLarge` - Large offset from left
- `rightLarge` - Large offset from right
- `none` - Pure fade, no movement

## Easing Functions

- `smooth` - Default smooth easing
- `bounce` - Bouncy effect
- `ease` - Subtle transition
- `linear` - No easing
- `easeIn` - Slow start
- `easeOut` - Slow end
- `easeInOut` - Slow start and end

## Performance

- ✅ Uses Intersection Observer (no scroll listeners!)
- ✅ GPU-accelerated transforms
- ✅ Lazy evaluation (only animates when visible)
- ✅ Minimal re-renders
- ✅ Efficient threshold detection

## Accessibility

- ✅ Respects `prefers-reduced-motion`
- ✅ No FOUC (Flash of Unstyled Content)
- ✅ Content accessible even if JS fails
- ✅ Screen reader friendly

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Modern mobile browsers

## Troubleshooting

### Animation not triggering?

1. Check that element is initially out of viewport
2. Adjust `threshold` (try 0.01 for early trigger)
3. Modify `viewportMargin` for earlier/later trigger
4. Ensure `disabled` is not `true`

### Performance issues?

- Use `triggerOnce={true}` (default)
- Reduce number of animated elements
- Increase `threshold` value
- Use `duration="fast"` for quicker animations

## Related Components

- **ScaleIn** - Scale up animation
- **SlideIn** - Simplified slide animation
- **StaggerChildren** - Sequential child animations

---

**Version:** 1.0.0
**Last Updated:** 2025-01-28
**Dependencies:** Framer Motion 11.x+, react-intersection-observer 9.x+
