/**
 * GlowCard Default Configuration
 *
 * This file contains default configuration values for the GlowCard component.
 * These values are derived from the design system and can be customized per project.
 *
 * @see tokens.config.ts for design system tokens
 */

/**
 * Default glow colors based on design system
 */
export const glowColors = {
  /** Primary sapphire glow - default brand color */
  primary: 'rgba(37, 99, 235, 0.5)',      // Primary 600 at 50% opacity

  /** Secondary amethyst glow - accent color */
  secondary: 'rgba(147, 51, 234, 0.5)',   // Secondary 600 at 50% opacity

  /** Accent emerald glow - success/highlight */
  accent: 'rgba(16, 185, 129, 0.5)',      // Accent 600 at 50% opacity

  /** Neutral gray glow - subtle effect */
  neutral: 'rgba(75, 85, 99, 0.5)',       // Neutral 600 at 50% opacity

  /** Ruby red glow - error/warning */
  ruby: 'rgba(220, 38, 38, 0.5)',         // Ruby 600 at 50% opacity

  /** Blue-400 glow - matches original default */
  blue: 'rgba(59, 130, 246, 0.5)',        // Blue-500 from original
} as const;

/**
 * Default animation configuration
 */
export const defaultAnimation = {
  /** Hover lift distance in pixels */
  hoverLift: -5,

  /** Animation duration in seconds */
  duration: 0.3,

  /** Glow fade in duration */
  glowFadeDuration: 0.3,

  /** Maximum glow opacity */
  glowOpacity: 1,

  /** Border glow opacity */
  borderGlowOpacity: 0.3,
} as const;

/**
 * Glow gradient configuration
 */
export const glowGradient = {
  /** Inner glow radius in pixels */
  innerRadius: 600,

  /** Outer glow radius in pixels */
  outerRadius: 800,

  /** Glow spread percentage (how far the glow extends before fading) */
  spread: 40,
} as const;

/**
 * Complete default configuration object
 */
export const glowCardDefaults = {
  glowColor: glowColors.blue,
  animation: defaultAnimation,
  gradient: glowGradient,
} as const;

/**
 * Type definitions for configuration
 */
export type GlowColor = typeof glowColors[keyof typeof glowColors];
export type GlowCardConfig = typeof glowCardDefaults;
