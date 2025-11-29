'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { durations, easings, directionOffsets, viewport, type Direction, type Duration, type Easing } from './animation.config';

/**
 * Props for the FadeIn component
 */
export interface FadeInProps {
  /** Content to animate */
  children: React.ReactNode;

  /**
   * Animation delay in seconds
   * @default 0
   */
  delay?: number;

  /**
   * Animation duration preset or custom value
   * @default 'normal' (0.6s)
   */
  duration?: Duration | number;

  /**
   * Direction to fade in from
   * @default 'up'
   */
  direction?: Direction;

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
 * FadeIn - Scroll-triggered fade-in animation
 *
 * Fades in content when it enters the viewport, with optional directional
 * slide effect. Uses Intersection Observer for performance-optimized
 * scroll-triggered animations.
 *
 * @component
 * @example
 * ```tsx
 * // Basic fade in from bottom
 * <FadeIn>
 *   <h1>Welcome!</h1>
 * </FadeIn>
 * ```
 *
 * @example
 * ```tsx
 * // Fade in from left with delay
 * <FadeIn direction="left" delay={0.2}>
 *   <div>Slides in from left</div>
 * </FadeIn>
 * ```
 *
 * @example
 * ```tsx
 * // Custom duration and easing
 * <FadeIn
 *   duration="slow"
 *   easing="bounce"
 *   direction="down"
 * >
 *   <p>Bounces in slowly from top</p>
 * </FadeIn>
 * ```
 *
 * @example
 * ```tsx
 * // Staggered list items
 * {items.map((item, i) => (
 *   <FadeIn key={item.id} delay={i * 0.1}>
 *     <ListItem {...item} />
 *   </FadeIn>
 * ))}
 * ```
 *
 * @param props - Component props
 * @returns Animated wrapper
 *
 * @see {@link FadeInProps} for all available props
 * @see {@link durations} for duration presets
 * @see {@link easings} for easing presets
 *
 * @remarks
 * - Uses Intersection Observer API (efficient!)
 * - Animations triggered when element is 10% visible by default
 * - Supports all standard directions: up, down, left, right, none
 * - Integrates with design system animation tokens
 *
 * @packageDocumentation
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 'normal',
  direction = 'up',
  easing = 'smooth',
  className = '',
  threshold = viewport.threshold,
  triggerOnce = viewport.once,
  viewportMargin,
  disabled = false,
  onAnimationComplete,
}: FadeInProps) {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
    rootMargin: viewportMargin || viewport.margin,
  });

  // Resolve duration (can be preset string or number)
  const resolvedDuration = typeof duration === 'string' ? durations[duration] : duration;

  // Resolve easing
  const resolvedEasing = easings[easing];

  // Get direction offset
  const offset = directionOffsets[direction];

  // If disabled, render children without animation
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...offset,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {
              opacity: 0,
              ...offset,
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
