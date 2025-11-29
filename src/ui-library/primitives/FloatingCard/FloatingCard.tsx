'use client'

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import {
  floatingCardDefaults,
  backgroundStyles,
  type BackgroundStyle,
} from './FloatingCard.data';

/**
 * Props for the FloatingCard component
 */
export interface FloatingCardProps {
  /** Content to render inside the card */
  children: ReactNode;

  /**
   * Animation delay in seconds
   * @default 0
   */
  delay?: number;

  /** Additional CSS classes */
  className?: string;

  /**
   * Background style variant
   * @default 'glassMd'
   */
  background?: BackgroundStyle;

  /**
   * Initial Y offset for fade-in animation (pixels)
   * @default 20
   */
  initialOffset?: number;

  /**
   * Hover lift distance (pixels, negative = up)
   * @default -10
   */
  hoverLift?: number;

  /**
   * Disable hover animation
   * @default false
   */
  disableHover?: boolean;

  /**
   * Disable initial fade-in animation
   * @default false
   */
  disableInitialAnimation?: boolean;

  /**
   * Callback when card is clicked
   */
  onClick?: () => void;
}

/**
 * FloatingCard - An animated card that fades in on scroll and floats on hover
 *
 * Creates a card with smooth fade-in animation when it enters the viewport,
 * plus a floating hover effect. Perfect for service cards, feature highlights,
 * and content grids that need engaging animations.
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage with default glass effect
 * <FloatingCard>
 *   <div className="p-8">
 *     <h3>Service Title</h3>
 *     <p>Service description</p>
 *   </div>
 * </FloatingCard>
 * ```
 *
 * @example
 * ```tsx
 * // With staggered delay for grid
 * {services.map((service, i) => (
 *   <FloatingCard key={service.id} delay={i * 0.1}>
 *     <ServiceCard {...service} />
 *   </FloatingCard>
 * ))}
 * ```
 *
 * @example
 * ```tsx
 * // Solid white background (legacy style)
 * <FloatingCard background="solid">
 *   <div className="p-6">
 *     <h3>White Card</h3>
 *   </div>
 * </FloatingCard>
 * ```
 *
 * @example
 * ```tsx
 * // Custom hover effect
 * <FloatingCard
 *   hoverLift={-20}
 *   background="glassCard"
 * >
 *   <div className="p-8">
 *     <h3>Dramatic Lift</h3>
 *   </div>
 * </FloatingCard>
 * ```
 *
 * @param props - Component props
 * @returns Animated floating card
 *
 * @see {@link FloatingCardProps} for all available props
 * @see {@link floatingCardDefaults} for default configuration values
 *
 * @remarks
 * - Animates once when entering viewport (by default)
 * - Uses Intersection Observer via Framer Motion
 * - Hover effect adds shadow and lifts card
 * - Fully customizable via props
 * - Designed to work with design system glass effects
 *
 * @packageDocumentation
 */
export default function FloatingCard({
  children,
  delay = floatingCardDefaults.delay,
  className = '',
  background = floatingCardDefaults.background,
  initialOffset = floatingCardDefaults.float.initialOffset,
  hoverLift = floatingCardDefaults.float.hoverLift,
  disableHover = false,
  disableInitialAnimation = false,
  onClick,
}: FloatingCardProps) {
  const backgroundClass = backgroundStyles[background];

  return (
    <motion.div
      initial={
        disableInitialAnimation
          ? undefined
          : { opacity: 0, y: initialOffset }
      }
      whileInView={
        disableInitialAnimation
          ? undefined
          : { opacity: 1, y: 0 }
      }
      viewport={{
        once: floatingCardDefaults.float.viewportOnce,
        margin: floatingCardDefaults.float.viewportMargin,
      }}
      transition={{
        duration: floatingCardDefaults.animation.fadeInDuration,
        delay,
      }}
      whileHover={
        disableHover
          ? undefined
          : {
              y: hoverLift,
              transition: {
                duration: floatingCardDefaults.animation.hoverDuration,
              },
            }
      }
      className={`
        ${backgroundClass}
        ${floatingCardDefaults.rounded}
        ${floatingCardDefaults.shadows.base}
        hover:${floatingCardDefaults.shadows.hover}
        transition-shadow
        duration-${Math.round(floatingCardDefaults.animation.shadowDuration * 1000)}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
