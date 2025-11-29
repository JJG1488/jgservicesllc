'use client'

import { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Section from '../layouts/Section';
import Grid from '../layouts/Grid';
import FadeIn from '../animations/FadeIn';

/**
 * Stat Item Configuration
 */
export interface StatItem {
  /** Stat value (number or string) */
  value: number | string;
  /** Stat label/description */
  label: string;
  /** Icon (emoji or React node) */
  icon?: string | ReactNode;
  /** Suffix for animated numbers (e.g., "+", "%", "K") */
  suffix?: string;
  /** Prefix for numbers (e.g., "$", "#") */
  prefix?: string;
  /** Animation duration for counter (ms) */
  duration?: number;
}

/**
 * Props for the StatsSection component
 */
export interface StatsSectionProps {
  /**
   * Section title
   */
  title?: string | ReactNode;

  /**
   * Section subtitle/description
   */
  subtitle?: string | ReactNode;

  /**
   * Array of stats to display
   */
  stats: StatItem[];

  /**
   * Number of columns
   * @default 4
   */
  columns?: 1 | 2 | 3 | 4;

  /**
   * Animate numbers (count up)
   * @default true
   */
  animated?: boolean;

  /**
   * Background style
   * @default 'glass'
   */
  background?: 'glass' | 'gradient' | 'none';

  /**
   * Section spacing
   * @default 'lg'
   */
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Animated Counter Component
 */
function AnimatedCounter({
  value,
  duration = 2000,
  prefix = '',
  suffix = '',
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/**
 * StatsSection - Display statistics and metrics
 *
 * A component for displaying key metrics, statistics, or achievements with
 * optional animated counters. Perfect for showcasing business impact.
 *
 * @component
 * @example
 * ```tsx
 * // Basic stats section
 * <StatsSection
 *   title="By the Numbers"
 *   subtitle="Our impact in the industry"
 *   stats={[
 *     { value: 100, label: "Projects Completed", suffix: "+", icon: "🚀" },
 *     { value: 50, label: "Happy Clients", suffix: "+", icon: "😊" },
 *     { value: 5, label: "Years Experience", suffix: "+", icon: "⏱️" },
 *     { value: 99, label: "Satisfaction Rate", suffix: "%", icon: "⭐" },
 *   ]}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Stats with no title, glass background
 * <StatsSection
 *   stats={[
 *     { value: 1000000, label: "Revenue Generated", prefix: "$", suffix: "+" },
 *     { value: 250, label: "Features Shipped", suffix: "+" },
 *     { value: 24, label: "Hour Support" },
 *     { value: 10, label: "Team Members" },
 *   ]}
 *   background="glass"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // 3-column layout without animation
 * <StatsSection
 *   columns={3}
 *   animated={false}
 *   stats={[
 *     { value: "500+", label: "Projects" },
 *     { value: "24/7", label: "Support" },
 *     { value: "100%", label: "Satisfaction" },
 *   ]}
 * />
 * ```
 *
 * @param props - Component props
 * @returns Stats section
 *
 * @see {@link StatsSectionProps} for all available props
 * @see {@link StatItem} for stat item configuration
 *
 * @remarks
 * - Automatically animates numbers on scroll into view
 * - Supports prefix/suffix for currency, percentages, etc.
 * - Responsive column layout
 * - Integrates with design system
 *
 * @packageDocumentation
 */
export default function StatsSection({
  title,
  subtitle,
  stats,
  columns = 4,
  animated = true,
  background = 'glass',
  spacing = 'lg',
  className = '',
}: StatsSectionProps) {
  const backgroundClass = {
    glass: 'glass-card p-12 rounded-3xl',
    gradient: 'glass-card p-12 rounded-3xl hero-gradient',
    none: '',
  }[background];

  return (
    <Section spacing={spacing} className={className}>
      <div className={backgroundClass}>
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <FadeIn>
                {typeof title === 'string' ? (
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                    {title}
                  </h2>
                ) : (
                  title
                )}
              </FadeIn>
            )}
            {subtitle && (
              <FadeIn delay={0.2}>
                {typeof subtitle === 'string' ? (
                  <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                    {subtitle}
                  </p>
                ) : (
                  subtitle
                )}
              </FadeIn>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <Grid columns={columns} gap="lg">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="text-center">
                {/* Icon */}
                {stat.icon && (
                  <div className="text-4xl mb-3">
                    {typeof stat.icon === 'string' ? stat.icon : stat.icon}
                  </div>
                )}

                {/* Value */}
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {animated && typeof stat.value === 'number' ? (
                    <AnimatedCounter
                      value={stat.value}
                      duration={stat.duration || 2000}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <>
                      {stat.prefix}
                      {typeof stat.value === 'number'
                        ? stat.value.toLocaleString()
                        : stat.value}
                      {stat.suffix}
                    </>
                  )}
                </div>

                {/* Label */}
                <p className="text-blue-100 font-medium">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </Grid>
      </div>
    </Section>
  );
}
