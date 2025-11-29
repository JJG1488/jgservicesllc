'use client'

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { magneticButtonDefaults, type MagneticStrength } from './MagneticButton.data';

/**
 * Props for the MagneticButton component
 */
export interface MagneticButtonProps {
  /** Content to render inside the button */
  children: React.ReactNode;

  /**
   * Optional href for link behavior
   * If provided, renders as Next.js Link component
   */
  href?: string;

  /**
   * Click handler for button behavior
   * Only used if href is not provided
   */
  onClick?: () => void;

  /** Additional CSS classes to apply */
  className?: string;

  /**
   * Magnetic attraction strength (0-1)
   * @default 0.3
   * @example
   * strength={0.15} // Subtle effect
   * strength={0.5}  // Strong effect
   * strength={0.8}  // Extreme effect
   */
  strength?: number | MagneticStrength;

  /**
   * Spring stiffness for animation
   * @default 150
   */
  stiffness?: number;

  /**
   * Spring damping for animation
   * @default 15
   */
  damping?: number;

  /**
   * Spring mass for animation
   * @default 0.1
   */
  mass?: number;

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
   * Disable magnetic effect
   * @default false
   */
  disabled?: boolean;

  /**
   * Open link in new tab (only for href)
   * @default false
   */
  external?: boolean;
}

/**
 * MagneticButton - An interactive button/link with magnetic hover effect
 *
 * Creates a button or link that "magnetically" follows the cursor when hovered,
 * with smooth spring-based animations. Perfect for CTAs, navigation links, and
 * interactive UI elements that need to feel alive and responsive.
 *
 * @component
 * @example
 * ```tsx
 * // Basic button with click handler
 * <MagneticButton onClick={() => console.log('Clicked!')}>
 *   <span className="btn-primary">Click Me</span>
 * </MagneticButton>
 * ```
 *
 * @example
 * ```tsx
 * // Link to internal page
 * <MagneticButton href="/contact">
 *   <span className="btn-secondary">Contact Us</span>
 * </MagneticButton>
 * ```
 *
 * @example
 * ```tsx
 * // Strong magnetic effect
 * <MagneticButton strength={0.8} href="/pricing">
 *   <div className="glass-card px-8 py-4 rounded-xl">
 *     <h3 className="gradient-text">View Pricing</h3>
 *   </div>
 * </MagneticButton>
 * ```
 *
 * @example
 * ```tsx
 * // External link with custom animation
 * <MagneticButton
 *   href="https://example.com"
 *   external
 *   stiffness={200}
 *   hoverScale={1.1}
 * >
 *   <span className="btn-primary">Visit Website</span>
 * </MagneticButton>
 * ```
 *
 * @example
 * ```tsx
 * // Disabled magnetic effect (static button)
 * <MagneticButton disabled onClick={handleSubmit}>
 *   <button className="btn-primary">Submit Form</button>
 * </MagneticButton>
 * ```
 *
 * @param props - Component props
 * @returns Interactive magnetic button or link
 *
 * @see {@link MagneticButtonProps} for all available props
 * @see {@link magneticButtonDefaults} for default configuration values
 *
 * @remarks
 * - Renders as Next.js Link if `href` is provided
 * - Renders as native button if `onClick` is provided
 * - Renders as div if neither href nor onClick is provided
 * - Uses spring physics for natural, organic motion
 * - Automatically resets position when mouse leaves
 * - Fully typed with TypeScript
 *
 * @packageDocumentation
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  strength = magneticButtonDefaults.strength,
  stiffness = magneticButtonDefaults.spring.stiffness,
  damping = magneticButtonDefaults.spring.damping,
  mass = magneticButtonDefaults.spring.mass,
  hoverScale = magneticButtonDefaults.scale.hoverScale,
  tapScale = magneticButtonDefaults.scale.tapScale,
  disabled = false,
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  /**
   * Calculate magnetic attraction based on cursor position
   */
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || disabled) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();

    // Calculate distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Apply magnetic strength
    const x = (clientX - centerX) * (strength as number);
    const y = (clientY - centerY) * (strength as number);

    setPosition({ x, y });
  };

  /**
   * Reset position when mouse leaves
   */
  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  /**
   * Animated content wrapper
   */
  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={disabled ? undefined : { x: position.x, y: position.y }}
      transition={{
        type: 'spring',
        stiffness,
        damping,
        mass,
      }}
      className={`inline-block ${className}`}
    >
      <motion.div
        whileHover={disabled ? undefined : { scale: hoverScale }}
        whileTap={disabled ? undefined : { scale: tapScale }}
        className="relative"
      >
        {children}
      </motion.div>
    </motion.div>
  );

  // Render as link
  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    ) : (
      <Link href={href}>{content}</Link>
    );
  }

  // Render as button
  if (onClick) {
    return <button onClick={onClick}>{content}</button>;
  }

  // Render as plain div
  return content;
}
