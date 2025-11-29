/**
 * Animation System Configuration
 *
 * Centralized animation configuration using design system tokens.
 * All animation components use these values for consistency.
 *
 * @see /src/design-system/tokens.config.ts for base design tokens
 */

import { tokens } from '@/design-system';

/**
 * Animation durations (in seconds)
 * Sourced from design system tokens
 */
export const durations = {
  /** Fast animations (200ms) */
  fast: tokens.animation.duration.fast / 1000,

  /** Normal animations (300ms) */
  normal: tokens.animation.duration.normal / 1000,

  /** Slow animations (500ms) */
  slow: tokens.animation.duration.slow / 1000,

  /** Custom durations */
  instant: 0.15,
  lazy: 0.8,
  crawl: 1.2,
} as const;

/**
 * Easing functions
 * Sourced from design system tokens
 */
export const easings = {
  /** Default smooth easing */
  default: tokens.animation.easing.default as [number, number, number, number],

  /** Smooth easing (same as default) */
  smooth: tokens.animation.easing.smooth as [number, number, number, number],

  /** Bounce easing for playful effects */
  bounce: tokens.animation.easing.bounce as [number, number, number, number],

  /** Ease for subtle transitions */
  ease: tokens.animation.easing.ease as [number, number, number, number],

  /** Linear (no easing) */
  linear: [0, 0, 1, 1] as [number, number, number, number],

  /** Ease in (slow start) */
  easeIn: [0.42, 0, 1, 1] as [number, number, number, number],

  /** Ease out (slow end) */
  easeOut: [0, 0, 0.58, 1] as [number, number, number, number],

  /** Ease in-out (slow start and end) */
  easeInOut: [0.42, 0, 0.58, 1] as [number, number, number, number],
} as const;

/**
 * Direction offsets for slide/fade animations
 */
export const directionOffsets = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  upLarge: { y: 80 },
  downLarge: { y: -80 },
  leftLarge: { x: 80 },
  rightLarge: { x: -80 },
  none: {},
} as const;

/**
 * Scale values for scale animations
 */
export const scales = {
  /** Start small (80%) */
  small: 0.8,

  /** Start medium (90%) */
  medium: 0.9,

  /** Start tiny (50%) */
  tiny: 0.5,

  /** Start large (110%) */
  large: 1.1,

  /** Final scale (100%) */
  normal: 1,
} as const;

/**
 * Viewport configuration for scroll-triggered animations
 */
export const viewport = {
  /** Trigger animation once */
  once: true,

  /** Trigger threshold (0-1) */
  threshold: 0.1,

  /** Viewport margin for early triggering */
  margin: '-100px',

  /** Viewport margin for late triggering */
  marginLate: '-50px',

  /** Viewport margin for early triggering */
  marginEarly: '-200px',
} as const;

/**
 * Stagger configuration for sequential animations
 */
export const stagger = {
  /** Small stagger (0.05s between items) */
  small: 0.05,

  /** Normal stagger (0.1s between items) */
  normal: 0.1,

  /** Large stagger (0.2s between items) */
  large: 0.2,

  /** Extra large stagger (0.3s between items) */
  xl: 0.3,
} as const;

/**
 * Preset animation configurations
 */
export const presets = {
  /** Fade in from bottom */
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: durations.normal, ease: easings.smooth },
  },

  /** Fade in from top */
  fadeInDown: {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: durations.normal, ease: easings.smooth },
  },

  /** Scale up fade in */
  scaleIn: {
    initial: { opacity: 0, scale: scales.small },
    animate: { opacity: 1, scale: scales.normal },
    transition: { duration: durations.normal, ease: easings.smooth },
  },

  /** Slide in from left */
  slideInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: durations.normal, ease: easings.smooth },
  },

  /** Slide in from right */
  slideInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: durations.normal, ease: easings.smooth },
  },

  /** Bounce in */
  bounceIn: {
    initial: { opacity: 0, scale: scales.small },
    animate: { opacity: 1, scale: scales.normal },
    transition: { duration: durations.slow, ease: easings.bounce },
  },

  /** Fade in (no movement) */
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: durations.normal, ease: easings.smooth },
  },
} as const;

/**
 * Export complete animation config
 */
export const animationConfig = {
  durations,
  easings,
  directionOffsets,
  scales,
  viewport,
  stagger,
  presets,
} as const;

/**
 * Type definitions
 */
export type Duration = keyof typeof durations;
export type Easing = keyof typeof easings;
export type Direction = keyof typeof directionOffsets;
export type Scale = keyof typeof scales;
export type Preset = keyof typeof presets;
export type AnimationConfig = typeof animationConfig;

export default animationConfig;
