'use client'

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import Section from '../layouts/Section';

/**
 * Hero Button Configuration
 */
export interface HeroButton {
  /** Button text */
  label: string;
  /** Button URL */
  href: string;
  /** Button style variant */
  variant?: 'primary' | 'secondary';
  /** External link (opens in new tab) */
  external?: boolean;
}

/**
 * Props for the Hero component
 */
export interface HeroProps {
  /**
   * Main heading text
   * Use {highlight} to wrap text in gradient-text class
   * @example "Transform {Your Business} Online"
   */
  title: string | ReactNode;

  /**
   * Subtitle/description text
   */
  subtitle?: string | ReactNode;

  /**
   * Call-to-action buttons
   */
  buttons?: HeroButton[];

  /**
   * Show animated background blobs
   * @default true
   */
  animatedBackground?: boolean;

  /**
   * Show scroll indicator
   * @default true
   */
  scrollIndicator?: boolean;

  /**
   * Minimum height
   * @default 'screen'
   */
  minHeight?: 'screen' | 'half' | 'auto';

  /**
   * Text alignment
   * @default 'center'
   */
  align?: 'left' | 'center' | 'right';

  /**
   * Custom background content
   */
  backgroundContent?: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Helper function to parse title with {highlight} syntax
 */
function parseTitle(title: string | ReactNode): ReactNode {
  if (typeof title !== 'string') return title;

  const parts = title.split(/\{([^}]+)\}/);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <span key={index} className="gradient-text">
          {part}
        </span>
      );
    }
    return part;
  });
}

/**
 * Hero - Full-width hero section with optional animations
 *
 * A versatile hero section component with animated backgrounds, gradient text,
 * CTA buttons, and scroll indicators. Perfect for landing pages and section intros.
 *
 * @component
 * @example
 * ```tsx
 * // Basic hero
 * <Hero
 *   title="Transform {Your Business} Online"
 *   subtitle="Professional web development services tailored to your needs."
 *   buttons={[
 *     { label: 'Get Started', href: '/contact', variant: 'primary' },
 *     { label: 'Learn More', href: '/services', variant: 'secondary' },
 *   ]}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Simple hero without animations
 * <Hero
 *   title="Welcome to {JGServicesLLC}"
 *   subtitle="Building modern web experiences"
 *   animatedBackground={false}
 *   scrollIndicator={false}
 *   minHeight="half"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Left-aligned hero
 * <Hero
 *   title="Projects"
 *   subtitle="Browse our latest work"
 *   align="left"
 *   minHeight="auto"
 *   animatedBackground={false}
 *   scrollIndicator={false}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Hero with custom JSX title
 * <Hero
 *   title={
 *     <h1>
 *       Transform <span className="gradient-text">Your Business</span>
 *     </h1>
 *   }
 *   subtitle="Custom subtitle text"
 * />
 * ```
 *
 * @param props - Component props
 * @returns Hero section element
 *
 * @see {@link HeroProps} for all available props
 * @see {@link HeroButton} for button configuration
 *
 * @remarks
 * - Uses FadeIn animations from ui-library
 * - Integrates with Section layout component
 * - Supports {highlight} syntax for gradient text
 * - Responsive design with mobile-first breakpoints
 *
 * @packageDocumentation
 */
export default function Hero({
  title,
  subtitle,
  buttons = [],
  animatedBackground = true,
  scrollIndicator = true,
  minHeight = 'screen',
  align = 'center',
  backgroundContent,
  className = '',
}: HeroProps) {
  const minHeightClass = {
    screen: 'min-h-screen',
    half: 'min-h-[50vh]',
    auto: 'min-h-0',
  }[minHeight];

  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  const justifyClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[align];

  return (
    <Section
      as="section"
      spacing="none"
      container={false}
      className={`relative ${minHeightClass} flex items-center overflow-hidden pt-16 ${className}`}
    >
      {/* Animated Background Blobs */}
      {animatedBackground && !backgroundContent && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </>
      )}

      {/* Custom Background Content */}
      {backgroundContent}

      {/* Hero Content */}
      <div className={`section-container ${alignClass} relative z-10 w-full`}>
        <FadeIn duration={0.8}>
          {typeof title === 'string' ? (
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              {parseTitle(title)}
            </h1>
          ) : (
            title
          )}
        </FadeIn>

        {subtitle && (
          <FadeIn delay={0.3} duration={0.8}>
            {typeof subtitle === 'string' ? (
              <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
                {subtitle}
              </p>
            ) : (
              subtitle
            )}
          </FadeIn>
        )}

        {buttons.length > 0 && (
          <FadeIn delay={0.6}>
            <div className={`flex flex-col sm:flex-row gap-4 ${justifyClass}`}>
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={button.variant === 'secondary' ? 'btn-secondary' : 'btn-primary'}
                  {...(button.external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Scroll Indicator */}
        {scrollIndicator && (
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div
                className="w-1.5 h-3 bg-white/70 rounded-full mt-2"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
