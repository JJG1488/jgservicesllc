# AnimatedButton Component

An interactive link styled as a button with scale animations and a sliding gradient background effect. Perfect for CTAs, navigation, and any interactive element that needs visual polish.

## Features

- 🎨 **4 built-in variants** - Primary, secondary, outline, ghost
- 📏 **4 size options** - Small to extra-large
- ✨ **Gradient animation** - Slides in on hover
- 🎭 **Scale effects** - Hover and tap animations
- 🔗 **Link or external** - Works with Next.js Link or native anchor
- 🎯 **Fully typed** - Complete TypeScript support
- 🎛️ **Highly customizable** - Override variants, gradients, scales
- ♿ **Accessible** - Proper focus states and ARIA attributes

## Installation

### Copy to Your Project

1. **Copy the AnimatedButton folder:**
   ```bash
   cp -r src/ui-library/primitives/AnimatedButton /your-project/src/components/
   ```

2. **Install dependencies:**
   ```bash
   pnpm add framer-motion
   ```

3. **Import and use:**
   ```tsx
   import AnimatedButton from '@/components/AnimatedButton/AnimatedButton';

   <AnimatedButton href="/get-started">
     Get Started
   </AnimatedButton>
   ```

## Usage Examples

### Basic Usage

```tsx
import AnimatedButton from '@/components/AnimatedButton/AnimatedButton';

export default function Hero() {
  return (
    <AnimatedButton href="/get-started">
      Get Started Free
    </AnimatedButton>
  );
}
```

### All Variants

```tsx
// Primary (default) - Gradient blue to purple
<AnimatedButton href="/pricing" variant="primary">
  View Pricing
</AnimatedButton>

// Secondary - Glass effect
<AnimatedButton href="/demo" variant="secondary">
  Watch Demo
</AnimatedButton>

// Outline - Transparent with border
<AnimatedButton href="/learn-more" variant="outline">
  Learn More
</AnimatedButton>

// Ghost - Minimal styling
<AnimatedButton href="/docs" variant="ghost">
  Documentation
</AnimatedButton>
```

### Different Sizes

```tsx
import { buttonSizes } from '@/components/AnimatedButton/AnimatedButton.data';

<AnimatedButton href="/small" size="sm">
  Small Button
</AnimatedButton>

<AnimatedButton href="/medium" size="md">
  Medium Button
</AnimatedButton>

<AnimatedButton href="/large" size="lg">
  Large Button
</AnimatedButton>

<AnimatedButton href="/xl" size="xl">
  Extra Large
</AnimatedButton>
```

### External Links

```tsx
<AnimatedButton
  href="https://github.com/yourusername"
  external
>
  Visit GitHub
</AnimatedButton>
```

### Custom Gradient

```tsx
<AnimatedButton
  href="/custom"
  customGradient="from-emerald-400 to-teal-500"
>
  Custom Gradient
</AnimatedButton>

<AnimatedButton
  href="/danger"
  customGradient="from-red-400 to-orange-500"
>
  Danger Action
</AnimatedButton>
```

### Disable Animations

```tsx
// No gradient slide
<AnimatedButton
  href="/no-gradient"
  disableGradient
>
  Static Background
</AnimatedButton>

// No scale effect
<AnimatedButton
  href="/no-scale"
  disableScale
>
  No Scale
</AnimatedButton>

// Both disabled
<AnimatedButton
  href="/static"
  disableGradient
  disableScale
>
  Completely Static
</AnimatedButton>
```

### Disabled State

```tsx
<AnimatedButton
  href="/coming-soon"
  disabled
>
  Coming Soon
</AnimatedButton>
```

### With Click Handler

```tsx
<AnimatedButton
  href="/submit"
  onClick={() => {
    console.log('Button clicked!');
    trackEvent('cta_clicked');
  }}
>
  Track & Navigate
</AnimatedButton>
```

### Custom Scale Values

```tsx
<AnimatedButton
  href="/dramatic"
  hoverScale={1.15}
  tapScale={0.9}
>
  Dramatic Effect
</AnimatedButton>
```

### CTA Section

```tsx
export default function CTASection() {
  return (
    <div className="flex gap-6 justify-center">
      <AnimatedButton
        href="/get-started"
        variant="primary"
        size="lg"
      >
        Get Started Free
      </AnimatedButton>

      <AnimatedButton
        href="/demo"
        variant="secondary"
        size="lg"
      >
        Watch Demo
      </AnimatedButton>
    </div>
  );
}
```

### Hero Buttons

```tsx
export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <AnimatedButton
        href="/signup"
        variant="primary"
        size="xl"
        customGradient="from-blue-500 to-purple-600"
      >
        Start Building Today
      </AnimatedButton>

      <AnimatedButton
        href="/learn-more"
        variant="outline"
        size="xl"
      >
        Learn More
      </AnimatedButton>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | **Required** | Link destination |
| `children` | `React.ReactNode` | **Required** | Button content |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Visual variant |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Button size |
| `className` | `string` | `''` | Additional CSS classes |
| `disableGradient` | `boolean` | `false` | Disable gradient animation |
| `disableScale` | `boolean` | `false` | Disable scale animation |
| `external` | `boolean` | `false` | Open in new tab |
| `disabled` | `boolean` | `false` | Disable the button |
| `hoverScale` | `number` | `1.05` | Scale on hover |
| `tapScale` | `number` | `0.95` | Scale on tap |
| `customGradient` | `string` | `undefined` | Custom gradient classes |
| `onClick` | `() => void` | `undefined` | Click handler |

## Variants

### Primary
- Gradient from blue-600 to purple-600
- White text
- Hover: Brighter gradient overlay
- Use for: Main CTAs, primary actions

### Secondary
- Glass effect background (white/5)
- White text with blue border
- Hover: Increased opacity
- Use for: Secondary CTAs, alternative actions

### Outline
- Transparent background
- Blue text and border
- Hover: Subtle background fill
- Use for: Tertiary actions, less emphasis

### Ghost
- Transparent background
- Blue text, no border
- Hover: Subtle background
- Use for: Minimal actions, inline links

## Sizes

| Size | Padding | Text Size | Use Case |
|------|---------|-----------|----------|
| `sm` | `py-2 px-6` | `text-sm` | Compact UIs, inline actions |
| `md` | `py-3 px-8` | `text-base` | Default, most use cases |
| `lg` | `py-4 px-10` | `text-lg` | Hero sections, emphasis |
| `xl` | `py-5 px-12` | `text-xl` | Maximum impact, landing pages |

## Customization

### Changing Default Values

Edit `AnimatedButton.data.ts`:

```tsx
export const animatedButtonDefaults = {
  variant: 'secondary',  // Change default variant
  size: 'lg',            // Change default size
  animation: {
    hoverScale: 1.08,
    tapScale: 0.92,
    gradientDuration: 0.4,
    transitionDuration: 0.4,
  },
  rounded: 'xl',         // Change border radius
} as const;
```

### Creating Custom Variants

Add to `buttonVariants` in `AnimatedButton.data.ts`:

```tsx
export const buttonVariants = {
  // ... existing variants
  success: {
    base: 'bg-gradient-to-r from-emerald-600 to-green-600 text-white',
    hover: 'hover:from-emerald-700 hover:to-green-700',
    gradient: 'from-emerald-400 to-green-500',
  },
  danger: {
    base: 'bg-gradient-to-r from-red-600 to-orange-600 text-white',
    hover: 'hover:from-red-700 hover:to-orange-700',
    gradient: 'from-red-400 to-orange-500',
  },
} as const;
```

Then use:

```tsx
<AnimatedButton href="/delete" variant="danger">
  Delete Account
</AnimatedButton>
```

## Animation Details

### Gradient Slide
- Starts at -100% (left of viewport)
- Slides to 0% on hover
- Duration: 0.3s
- Creates a "filling" effect

### Scale Animation
- Hover: Grows to 105%
- Tap: Shrinks to 95%
- Smooth spring animation
- GPU-accelerated transform

## Performance

- ✅ GPU-accelerated transforms
- ✅ Efficient re-renders
- ✅ Optimized animations
- ✅ No layout shifts

## Accessibility

- ✅ Keyboard navigation support
- ✅ Focus ring styling
- ✅ `aria-disabled` attribute
- ✅ Proper link semantics
- ✅ External link attributes (`rel="noopener noreferrer"`)

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers

## Troubleshooting

### Gradient not animating?

1. Check that `disableGradient` is not `true`
2. Ensure you're hovering over the button
3. Verify Framer Motion is installed

### Styles not applying?

- Ensure Tailwind CSS is configured
- Check that utility classes are recognized
- Verify no conflicting CSS

### TypeScript errors?

- Copy both `.tsx` and `.data.ts` files
- Update import paths to match your structure

## Related Components

- **MagneticButton** - Button with magnetic cursor tracking
- **GlowCard** - Card with glow effect
- **FloatingCard** - Card with float animation

## License

Free to use in your projects. No attribution required.

---

**Version:** 1.0.0
**Last Updated:** 2025-01-28
**Dependencies:** Framer Motion 11.x+, Next.js 13+
**Framework:** React 18+
