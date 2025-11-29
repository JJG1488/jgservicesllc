/**
 * Animation Library - Entry Point
 *
 * Centralized export point for all animation components and utilities.
 * Built on Framer Motion with design system integration.
 *
 * @example
 * ```typescript
 * // Import animation components
 * import { FadeIn, ScaleIn, StaggerChildren } from '@/ui-library/animations';
 *
 * // Import animation config
 * import { durations, easings, presets } from '@/ui-library/animations';
 * ```
 */

// ===== Animation Components =====

/**
 * FadeIn - Scroll-triggered fade animation with directional slide
 * @see /src/ui-library/animations/README-FadeIn.md
 */
export { default as FadeIn, type FadeInProps } from './FadeIn';

/**
 * ScaleIn - Scroll-triggered scale-up animation
 */
export { default as ScaleIn, type ScaleInProps } from './ScaleIn';

/**
 * SlideIn - Simplified slide animation (wrapper around FadeIn)
 */
export { default as SlideIn, type SlideInProps } from './SlideIn';

/**
 * StaggerChildren - Sequential animation for child elements
 */
export { default as StaggerChildren, type StaggerChildrenProps } from './StaggerChildren';

// ===== Animation Configuration =====

/**
 * Animation system configuration
 * Includes durations, easings, presets, and more
 */
export {
  durations,
  easings,
  directionOffsets,
  scales,
  viewport,
  stagger,
  presets,
  animationConfig,
  type Duration,
  type Easing,
  type Direction,
  type Scale,
  type Preset,
  type AnimationConfig,
} from './animation.config';

/**
 * Default export: Animation configuration
 */
export { default } from './animation.config';
