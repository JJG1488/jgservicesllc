/**
 * FloatingCard Default Configuration
 *
 * This file contains default configuration values for the FloatingCard component.
 * These values control animations, transitions, and visual effects.
 *
 * @see tokens.config.ts for design system tokens
 */

/**
 * Animation timing configuration
 */
export const animationTiming = {
  /** Initial fade-in duration (seconds) */
  fadeInDuration: 0.6,

  /** Hover lift duration (seconds) */
  hoverDuration: 0.3,

  /** Shadow transition duration (seconds) */
  shadowDuration: 0.3,
} as const;

/**
 * Float animation configuration
 */
export const floatAnimation = {
  /** Distance to float up on initial render (pixels) */
  initialOffset: 20,

  /** Distance to float up on hover (pixels) */
  hoverLift: -10,

  /** Viewport margin for triggering animation */
  viewportMargin: '-100px',

  /** Viewport trigger - animate only once or every time */
  viewportOnce: true,
} as const;

/**
 * Shadow configuration
 */
export const shadowConfig = {
  /** Base shadow (resting state) */
  base: 'shadow-md',

  /** Hover shadow (lifted state) */
  hover: 'shadow-2xl',
} as const;

/**
 * Background styles (glass effect variants)
 */
export const backgroundStyles = {
  /** Solid white background (original default) */
  solid: 'bg-white',

  /** Glass effect - small blur */
  glassSm: 'glass-sm',

  /** Glass effect - medium blur (default) */
  glassMd: 'glass-md',

  /** Glass effect - large blur */
  glassLg: 'glass-lg',

  /** Glass card with gradient */
  glassCard: 'glass-card',

  /** Custom: Allow any Tailwind classes */
  custom: '',
} as const;

/**
 * Complete default configuration object
 */
export const floatingCardDefaults = {
  delay: 0,
  background: 'glassMd' as keyof typeof backgroundStyles,
  rounded: 'rounded-lg',
  animation: animationTiming,
  float: floatAnimation,
  shadows: shadowConfig,
} as const;

/**
 * Type definitions for configuration
 */
export type BackgroundStyle = keyof typeof backgroundStyles;
export type FloatingCardConfig = typeof floatingCardDefaults;
