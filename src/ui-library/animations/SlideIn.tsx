'use client'

import FadeIn, { type FadeInProps } from './FadeIn';

/**
 * Props for the SlideIn component
 * (Extends FadeIn with sensible defaults for sliding)
 */
export interface SlideInProps extends Omit<FadeInProps, 'direction'> {
  /**
   * Direction to slide in from
   * @default 'left'
   */
  from?: 'left' | 'right' | 'up' | 'down';
}

/**
 * SlideIn - Simplified slide animation wrapper
 *
 * A convenience wrapper around FadeIn specifically for slide effects.
 * Provides a simpler API with sensible defaults for sliding animations.
 *
 * @component
 * @example
 * ```tsx
 * // Slide in from left (default)
 * <SlideIn>
 *   <div>Content slides in from left</div>
 * </SlideIn>
 * ```
 *
 * @example
 * ```tsx
 * // Slide in from right with delay
 * <SlideIn from="right" delay={0.3}>
 *   <p>Slides from right side</p>
 * </SlideIn>
 * ```
 *
 * @example
 * ```tsx
 * // Vertical slide
 * <SlideIn from="up" duration="slow">
 *   <h2>Slides down from top</h2>
 * </SlideIn>
 * ```
 *
 * @param props - Component props
 * @returns Animated wrapper
 *
 * @see {@link FadeIn} for the underlying component
 * @see {@link SlideInProps} for all available props
 *
 * @remarks
 * - This is a thin wrapper around FadeIn
 * - Provides a cleaner API for slide-only animations
 * - All FadeIn props are supported
 * - Direction is simplified to 'from' prop
 *
 * @packageDocumentation
 */
export default function SlideIn({
  from = 'left',
  ...props
}: SlideInProps) {
  return <FadeIn direction={from} {...props} />;
}
