/**
 * MagneticButton Default Configuration
 *
 * This file contains default configuration values for the MagneticButton component.
 * These values control the magnetic attraction effect and spring animation.
 *
 * @see tokens.config.ts for design system tokens
 */

/**
 * Magnetic effect strength levels
 */
export const magneticStrength = {
  /** Subtle magnetic effect */
  subtle: 0.15,

  /** Normal magnetic effect - default */
  normal: 0.3,

  /** Strong magnetic effect */
  strong: 0.5,

  /** Extreme magnetic effect */
  extreme: 0.8,
} as const;

/**
 * Spring animation configuration
 */
export const springAnimation = {
  /** Spring stiffness - higher = snappier */
  stiffness: 150,

  /** Spring damping - higher = less bouncy */
  damping: 15,

  /** Spring mass - lower = faster response */
  mass: 0.1,
} as const;

/**
 * Scale animation configuration
 */
export const scaleAnimation = {
  /** Scale on hover */
  hoverScale: 1.05,

  /** Scale on tap/click */
  tapScale: 0.95,
} as const;

/**
 * Complete default configuration object
 */
export const magneticButtonDefaults = {
  strength: magneticStrength.normal,
  spring: springAnimation,
  scale: scaleAnimation,
} as const;

/**
 * Type definitions for configuration
 */
export type MagneticStrength = typeof magneticStrength[keyof typeof magneticStrength];
export type MagneticButtonConfig = typeof magneticButtonDefaults;
