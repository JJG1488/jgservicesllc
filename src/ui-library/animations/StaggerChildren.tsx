'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { durations, easings, stagger, viewport, type Duration, type Easing } from './animation.config';

/**
 * Props for the StaggerChildren component
 */
export interface StaggerChildrenProps {
  /** Children elements to stagger */
  children: React.ReactNode;

  /**
   * Stagger delay between children
   * @default 'normal' (0.1s)
   */
  staggerDelay?: keyof typeof stagger | number;

  /**
   * Initial delay before first child
   * @default 0
   */
  initialDelay?: number;

  /**
   * Animation duration for each child
   * @default 'normal' (0.6s)
   */
  duration?: Duration | number;

  /**
   * Easing function
   * @default 'smooth'
   */
  easing?: Easing;

  /** Additional CSS classes for container */
  className?: string;

  /**
   * Viewport threshold (0-1)
   * @default 0.1
   */
  threshold?: number;

  /**
   * Trigger animation only once
   * @default true
   */
  triggerOnce?: boolean;

  /**
   * Viewport margin
   * @default '-100px'
   */
  viewportMargin?: string;

  /**
   * Animation variant for children
   * @default 'fadeUp'
   */
  variant?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'fade';

  /**
   * Disable animation
   * @default false
   */
  disabled?: boolean;
}

/**
 * StaggerChildren - Sequential animation for child elements
 *
 * Automatically animates children elements with a staggered delay,
 * creating a cascade effect. Perfect for lists, grids, and sequential reveals.
 *
 * @component
 * @example
 * ```tsx
 * // Basic staggered list
 * <StaggerChildren>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </StaggerChildren>
 * ```
 *
 * @example
 * ```tsx
 * // Fast stagger with scale effect
 * <StaggerChildren
 *   staggerDelay="small"
 *   variant="scaleIn"
 * >
 *   {features.map(feature => (
 *     <FeatureCard key={feature.id} {...feature} />
 *   ))}
 * </StaggerChildren>
 * ```
 *
 * @example
 * ```tsx
 * // Slow, dramatic reveal
 * <StaggerChildren
 *   staggerDelay={0.3}
 *   duration="slow"
 *   variant="fadeLeft"
 * >
 *   <h2>First</h2>
 *   <h2>Second</h2>
 *   <h2>Third</h2>
 * </StaggerChildren>
 * ```
 *
 * @param props - Component props
 * @returns Animated container
 *
 * @see {@link StaggerChildrenProps} for all available props
 * @see {@link stagger} for stagger delay presets
 *
 * @remarks
 * - Children are automatically indexed and animated
 * - Uses Intersection Observer for scroll triggering
 * - Great for lists, nav menus, feature grids
 * - Supports multiple animation variants
 *
 * @packageDocumentation
 */
export default function StaggerChildren({
  children,
  staggerDelay = 'normal',
  initialDelay = 0,
  duration = 'normal',
  easing = 'smooth',
  className = '',
  threshold = viewport.threshold,
  triggerOnce = viewport.once,
  viewportMargin,
  variant = 'fadeUp',
  disabled = false,
}: StaggerChildrenProps) {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
    rootMargin: viewportMargin || viewport.margin,
  });

  // Resolve stagger delay
  const resolvedStagger = typeof staggerDelay === 'string' ? stagger[staggerDelay] : staggerDelay;

  // Resolve duration
  const resolvedDuration = typeof duration === 'string' ? durations[duration] : duration;

  // Resolve easing
  const resolvedEasing = easings[easing];

  // Define animation variants
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -40 },
      visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  const selectedVariant = variants[variant];

  // Container variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: resolvedStagger,
        delayChildren: initialDelay,
      },
    },
  };

  // Child variants
  const childVariants = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        duration: resolvedDuration,
        ease: resolvedEasing,
      },
    },
  };

  // If disabled, render without animation
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={childVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={childVariants}>{children}</motion.div>
      }
    </motion.div>
  );
}
