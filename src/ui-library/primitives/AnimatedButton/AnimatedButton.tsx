'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  buttonVariants,
  buttonSizes,
  baseStyles,
  animatedButtonDefaults,
  type ButtonVariant,
  type ButtonSize,
} from './AnimatedButton.data';

/**
 * Props for the AnimatedButton component
 */
export interface AnimatedButtonProps {
  /** Link destination */
  href: string;

  /** Button content */
  children: React.ReactNode;

  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Size of the button
   * @default 'md'
   */
  size?: ButtonSize;

  /** Additional CSS classes */
  className?: string;

  /**
   * Disable gradient animation on hover
   * @default false
   */
  disableGradient?: boolean;

  /**
   * Disable scale animation
   * @default false
   */
  disableScale?: boolean;

  /**
   * Open link in new tab
   * @default false
   */
  external?: boolean;

  /**
   * Disable the button
   * @default false
   */
  disabled?: boolean;

  /**
   * Scale on hover
   * @default 1.05
   */
  hoverScale?: number;

  /**
   * Scale on tap/click
   * @default 0.95
   */
  tapScale?: number;

  /**
   * Custom gradient colors (overrides variant gradient)
   * @example "from-red-400 to-orange-500"
   */
  customGradient?: string;

  /**
   * Click handler (fires before navigation)
   */
  onClick?: () => void;
}

/**
 * AnimatedButton - An interactive link styled as a button with gradient animation
 *
 * Creates a button-styled link with smooth scale animations and an optional
 * sliding gradient background effect on hover. Perfect for CTAs, navigation,
 * and interactive UI elements.
 *
 * @component
 * @example
 * ```tsx
 * // Basic primary button
 * <AnimatedButton href="/get-started">
 *   Get Started
 * </AnimatedButton>
 * ```
 *
 * @example
 * ```tsx
 * // Secondary variant with large size
 * <AnimatedButton
 *   href="/contact"
 *   variant="secondary"
 *   size="lg"
 * >
 *   Contact Us
 * </AnimatedButton>
 * ```
 *
 * @example
 * ```tsx
 * // Custom gradient with external link
 * <AnimatedButton
 *   href="https://github.com"
 *   external
 *   customGradient="from-green-400 to-emerald-500"
 * >
 *   View on GitHub
 * </AnimatedButton>
 * ```
 *
 * @example
 * ```tsx
 * // Outline variant without gradient effect
 * <AnimatedButton
 *   href="/learn-more"
 *   variant="outline"
 *   disableGradient
 * >
 *   Learn More
 * </AnimatedButton>
 * ```
 *
 * @example
 * ```tsx
 * // Disabled state
 * <AnimatedButton
 *   href="/unavailable"
 *   disabled
 * >
 *   Coming Soon
 * </AnimatedButton>
 * ```
 *
 * @param props - Component props
 * @returns Animated button link
 *
 * @see {@link AnimatedButtonProps} for all available props
 * @see {@link animatedButtonDefaults} for default configuration values
 *
 * @remarks
 * - Always renders as a link (Next.js Link component)
 * - Gradient slides in from left on hover
 * - Fully customizable with variant system
 * - Supports external links with proper attributes
 * - Designed to work with design system tokens
 *
 * @packageDocumentation
 */
export default function AnimatedButton({
  href,
  children,
  variant = animatedButtonDefaults.variant,
  size = animatedButtonDefaults.size,
  className = '',
  disableGradient = false,
  disableScale = false,
  external = false,
  disabled = false,
  hoverScale = animatedButtonDefaults.animation.hoverScale,
  tapScale = animatedButtonDefaults.animation.tapScale,
  customGradient,
  onClick,
}: AnimatedButtonProps) {
  const variantConfig = buttonVariants[variant];
  const sizeConfig = buttonSizes[size];

  // Combine all CSS classes
  const buttonClasses = `
    ${baseStyles.common}
    ${baseStyles.focus}
    ${disabled ? baseStyles.disabled : ''}
    ${variantConfig.base}
    ${variantConfig.hover}
    ${sizeConfig}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Gradient background class
  const gradientClasses = customGradient
    ? `bg-gradient-to-r ${customGradient}`
    : `bg-gradient-to-r ${variantConfig.gradient}`;

  /**
   * Handle click event
   */
  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  /**
   * Button content with animations
   */
  const content = (
    <>
      {/* Text content with scale animation */}
      <motion.div
        whileHover={disableScale || disabled ? undefined : { scale: hoverScale }}
        whileTap={disableScale || disabled ? undefined : { scale: tapScale }}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Animated gradient background */}
      {!disableGradient && (
        <motion.div
          className={`absolute inset-0 ${gradientClasses} opacity-0 group-hover:opacity-100`}
          initial={{ x: '-100%' }}
          whileHover={disabled ? undefined : { x: '0%' }}
          transition={{
            duration: animatedButtonDefaults.animation.gradientDuration,
          }}
        />
      )}
    </>
  );

  // Render external link
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        onClick={handleClick}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  // Render internal link
  return (
    <Link
      href={disabled ? '#' : href}
      className={buttonClasses}
      onClick={handleClick}
      aria-disabled={disabled}
    >
      {content}
    </Link>
  );
}
