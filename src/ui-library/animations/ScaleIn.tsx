'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { durations, easings, scales, viewport, type Duration, type Easing, type Scale } from './animation.config';

/**
 * Props for the ScaleIn component
 */
export interface ScaleInProps {
  /** Content to animate */
  children: React.ReactNode;

  /**
   * Animation delay in seconds
   * @default 0
   */
  delay?: number;

  /**
   * Animation duration preset or custom value
   * @default 'normal' (0.5s)
   */
  duration?: Duration | number;

  /**
   * Initial scale preset or custom value
   * @default 'small' (0.8)
   */
  initialScale?: Scale | number;

  /**
   * Easing function preset
   * @default 'smooth'
   */
  easing?: Easing;

  /** Additional CSS classes */
  className?: string;

  /**
   * Viewport threshold (0-1)
   * @default 0.1
   */
  threshold?: number;

  /**
   * Trigger animation only once
   * @default true
   */
  triggerOnce?: boolean;

  /**
   * Viewport margin for early/late triggering
   * @default '-100px'
   */
  viewportMargin?: string;

  /**
   * Disable animation (render static)
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback when animation completes
   */
  onAnimationComplete?: () => void;
}

/**
 * ScaleIn - Scroll-triggered scale-up animation
 *
 * Scales up and fades in content when it enters the viewport.
 * Perfect for cards, images, and attention-grabbing elements.
 *
 * @component
 * @example
 * ```tsx
 * // Basic scale in
 * <ScaleIn>
 *   <div className="glass-card p-8">
 *     <h3>Scales up!</h3>
 *   </div>
 * </ScaleIn>
 * ```
 *
 * @example
 * ```tsx
 * // Bounce effect with delay
 * <ScaleIn easing="bounce" delay={0.2}>
 *   <img src="/logo.png" alt="Logo" />
 * </ScaleIn>
 * ```
 *
 * @example
 * ```tsx
 * // Start from tiny scale
 * <ScaleIn initialScale="tiny" duration="slow">
 *   <div className="icon">🎉</div>
 * </ScaleIn>
 * ```
 *
 * @example
 * ```tsx
 * // Image gallery with stagger
 * {images.map((img, i) => (
 *   <ScaleIn key={img.id} delay={i * 0.1}>
 *     <img src={img.url} alt={img.alt} />
 *   </ScaleIn>
 * ))}
 * ```
 *
 * @param props - Component props
 * @returns Animated wrapper
 *
 * @see {@link ScaleInProps} for all available props
 * @see {@link scales} for scale presets
 *
 * @remarks
 * - Uses Intersection Observer for performance
 * - Combines opacity fade with scale animation
 * - Great for drawing attention to content
 * - Works well with bounce easing
 *
 * @packageDocumentation
 */
export default function ScaleIn({
  children,
  delay = 0,
  duration = 'normal',
  initialScale = 'small',
  easing = 'smooth',
  className = '',
  threshold = viewport.threshold,
  triggerOnce = viewport.once,
  viewportMargin,
  disabled = false,
  onAnimationComplete,
}: ScaleInProps) {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
    rootMargin: viewportMargin || viewport.margin,
  });

  // Resolve duration
  const resolvedDuration = typeof duration === 'string' ? durations[duration] : duration;

  // Resolve easing
  const resolvedEasing = easings[easing];

  // Resolve initial scale
  const resolvedInitialScale = typeof initialScale === 'string' ? scales[initialScale] : initialScale;

  // If disabled, render children without animation
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        scale: resolvedInitialScale,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              scale: scales.normal,
            }
          : {
              opacity: 0,
              scale: resolvedInitialScale,
            }
      }
      transition={{
        duration: resolvedDuration,
        delay,
        ease: resolvedEasing,
      }}
      className={className}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.div>
  );
}
