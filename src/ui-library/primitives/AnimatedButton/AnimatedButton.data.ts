/**
 * AnimatedButton Default Configuration
 *
 * This file contains default configuration values for the AnimatedButton component.
 * These values control the button styles, variants, and animation behavior.
 *
 * @see tokens.config.ts for design system tokens
 */

/**
 * Button variant configurations
 */
export const buttonVariants = {
  /** Primary variant - gradient sapphire to amethyst */
  primary: {
    base: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
    hover: 'hover:from-blue-700 hover:to-purple-700',
    gradient: 'from-blue-400 to-purple-500',
  },

  /** Secondary variant - glass effect with border */
  secondary: {
    base: 'bg-white/5 text-white border-2 border-blue-300/30',
    hover: 'hover:bg-white/10 hover:border-blue-300/50',
    gradient: 'from-blue-400/20 to-purple-500/20',
  },

  /** Outline variant - transparent with colored border */
  outline: {
    base: 'bg-transparent text-blue-300 border-2 border-blue-600',
    hover: 'hover:bg-blue-600/10 hover:border-blue-500',
    gradient: 'from-blue-600/20 to-purple-600/20',
  },

  /** Ghost variant - minimal styling */
  ghost: {
    base: 'bg-transparent text-blue-300',
    hover: 'hover:bg-white/5',
    gradient: 'from-blue-400/10 to-purple-500/10',
  },
} as const;

/**
 * Button size configurations
 */
export const buttonSizes = {
  /** Small size */
  sm: 'py-2 px-6 text-sm',

  /** Medium size - default */
  md: 'py-3 px-8 text-base',

  /** Large size */
  lg: 'py-4 px-10 text-lg',

  /** Extra large size */
  xl: 'py-5 px-12 text-xl',
} as const;

/**
 * Animation configuration
 */
export const animationConfig = {
  /** Scale on hover */
  hoverScale: 1.05,

  /** Scale on tap/click */
  tapScale: 0.95,

  /** Gradient slide duration (seconds) */
  gradientDuration: 0.3,

  /** General transition duration (seconds) */
  transitionDuration: 0.3,
} as const;

/**
 * Base button styles (shared across all variants)
 */
export const baseStyles = {
  common: 'inline-block font-bold rounded-lg transition-all duration-300 relative overflow-hidden group',
  focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent',
  disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
} as const;

/**
 * Complete default configuration object
 */
export const animatedButtonDefaults = {
  variant: 'primary' as keyof typeof buttonVariants,
  size: 'md' as keyof typeof buttonSizes,
  animation: animationConfig,
  rounded: 'lg',
} as const;

/**
 * Type definitions for configuration
 */
export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;
export type AnimatedButtonConfig = typeof animatedButtonDefaults;
