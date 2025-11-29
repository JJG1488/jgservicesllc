'use client'

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { glowCardDefaults, type GlowColor } from './GlowCard.data';

/**
 * Props for the GlowCard component
 */
export interface GlowCardProps {
  /** Content to render inside the card */
  children: React.ReactNode;

  /** Additional CSS classes to apply to the card */
  className?: string;

  /**
   * Color of the glow effect (RGBA string)
   * @default 'rgba(59, 130, 246, 0.5)' (blue-500)
   * @example
   * glowColor="rgba(147, 51, 234, 0.5)" // Purple glow
   * glowColor="rgba(16, 185, 129, 0.5)" // Emerald glow
   */
  glowColor?: string | GlowColor;

  /**
   * Distance to lift the card on hover (in pixels)
   * @default -5
   */
  hoverLift?: number;

  /**
   * Animation duration in seconds
   * @default 0.3
   */
  duration?: number;

  /**
   * Disable hover effects
   * @default false
   */
  disableHover?: boolean;

  /**
   * Callback fired when card is hovered
   */
  onHover?: () => void;

  /**
   * Callback fired when hover ends
   */
  onHoverEnd?: () => void;
}

/**
 * GlowCard - An interactive card component with mouse-tracking glow effect
 *
 * Creates a card with a radial gradient glow that follows the user's cursor,
 * providing an engaging interactive experience. Perfect for highlighting
 * important content or creating modern, premium UI elements.
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage with default blue glow
 * <GlowCard>
 *   <h3>Featured Content</h3>
 *   <p>Your content here</p>
 * </GlowCard>
 * ```
 *
 * @example
 * ```tsx
 * // Custom purple glow with glass card styling
 * <GlowCard
 *   glowColor="rgba(147, 51, 234, 0.5)"
 *   className="glass-card rounded-2xl p-8"
 * >
 *   <h3>Premium Feature</h3>
 * </GlowCard>
 * ```
 *
 * @example
 * ```tsx
 * // Disable hover effects for static cards
 * <GlowCard disableHover>
 *   <img src="/static-content.jpg" alt="Static" />
 * </GlowCard>
 * ```
 *
 * @example
 * ```tsx
 * // Custom animation timing
 * <GlowCard
 *   hoverLift={-10}
 *   duration={0.5}
 *   onHover={() => console.log('Card hovered!')}
 * >
 *   <div>Slow, dramatic hover effect</div>
 * </GlowCard>
 * ```
 *
 * @param props - Component props
 * @returns Interactive card with glow effect
 *
 * @see {@link GlowCardProps} for all available props
 * @see {@link glowCardDefaults} for default configuration values
 *
 * @remarks
 * - Uses Framer Motion for smooth animations
 * - Glow effect only appears on hover to save performance
 * - Two glow layers: inner radial glow and border glow
 * - Fully customizable via props and CSS classes
 * - Designed to work with design system tokens
 *
 * @packageDocumentation
 */
export default function GlowCard({
  children,
  className = '',
  glowColor = glowCardDefaults.glowColor,
  hoverLift = glowCardDefaults.animation.hoverLift,
  duration = glowCardDefaults.animation.duration,
  disableHover = false,
  onHover,
  onHoverEnd,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  /**
   * Track mouse position relative to card for glow effect positioning
   */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || disableHover) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  /**
   * Handle mouse enter - activate glow effect
   */
  const handleMouseEnter = () => {
    if (disableHover) return;
    setIsHovered(true);
    onHover?.();
  };

  /**
   * Handle mouse leave - deactivate glow effect
   */
  const handleMouseLeave = () => {
    if (disableHover) return;
    setIsHovered(false);
    onHoverEnd?.();
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      whileHover={disableHover ? undefined : { y: hoverLift }}
      transition={{ duration }}
    >
      {/* Inner glow effect - follows cursor */}
      {isHovered && !disableHover && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0"
          style={{
            background: `radial-gradient(${glowCardDefaults.gradient.innerRadius}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent ${glowCardDefaults.gradient.spread}%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: glowCardDefaults.animation.glowOpacity }}
          transition={{ duration: glowCardDefaults.animation.glowFadeDuration }}
        />
      )}

      {/* Border glow - softer, wider spread */}
      {isHovered && !disableHover && (
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(${glowCardDefaults.gradient.outerRadius}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent ${glowCardDefaults.gradient.spread}%)`,
            zIndex: -1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: glowCardDefaults.animation.borderGlowOpacity }}
          transition={{ duration: glowCardDefaults.animation.glowFadeDuration }}
        />
      )}

      {/* Content wrapper - ensures content stays above glow effects */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
