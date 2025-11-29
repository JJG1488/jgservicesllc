'use client'

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import Section from '../layouts/Section';

/**
 * CTA Button Configuration
 */
export interface CTAButton {
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
 * Props for the CTASection component
 */
export interface CTASectionProps {
  /**
   * Main heading text
   */
  title: string | ReactNode;

  /**
   * Description text
   */
  description?: string | ReactNode;

  /**
   * Call-to-action buttons
   */
  buttons?: CTAButton[];

  /**
   * Background style
   * @default 'gradient'
   */
  background?: 'gradient' | 'glass' | 'none';

  /**
   * Layout style
   * @default 'centered'
   */
  layout?: 'centered' | 'split';

  /**
   * Section spacing
   * @default 'lg'
   */
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Custom content (overrides buttons)
   */
  children?: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * CTASection - Call-to-action section
 *
 * A focused section component for driving user actions. Perfect for
 * conversion points, sign-ups, consultations, or any primary action.
 *
 * @component
 * @example
 * ```tsx
 * // Basic CTA with gradient background
 * <CTASection
 *   title="Ready to Get Started?"
 *   description="Transform your business with a professional website."
 *   buttons={[
 *     { label: 'Start Your Project', href: '/contact', variant: 'primary' },
 *     { label: 'View Pricing', href: '/pricing', variant: 'secondary' },
 *   ]}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Simple CTA with glass background
 * <CTASection
 *   title="Have Questions?"
 *   description="Our team is here to help. Schedule a free consultation."
 *   background="glass"
 *   buttons={[
 *     { label: 'Contact Us', href: '/contact' },
 *   ]}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // CTA with custom content
 * <CTASection
 *   title="Join Our Newsletter"
 *   description="Get weekly tips and updates."
 *   background="none"
 * >
 *   <form className="flex gap-4 max-w-md mx-auto">
 *     <input type="email" placeholder="Your email" className="..." />
 *     <button type="submit" className="btn-primary">Subscribe</button>
 *   </form>
 * </CTASection>
 * ```
 *
 * @example
 * ```tsx
 * // Split layout CTA
 * <CTASection
 *   title="Need a Custom Solution?"
 *   description="We build tailored applications for businesses of all sizes."
 *   layout="split"
 *   buttons={[
 *     { label: 'Get a Quote', href: '/quote' },
 *   ]}
 * />
 * ```
 *
 * @param props - Component props
 * @returns CTA section
 *
 * @see {@link CTASectionProps} for all available props
 * @see {@link CTAButton} for button configuration
 *
 * @remarks
 * - Supports gradient, glass, or no background
 * - Centered or split layout options
 * - Animated entrance on scroll
 * - Fully responsive design
 *
 * @packageDocumentation
 */
export default function CTASection({
  title,
  description,
  buttons = [],
  background = 'gradient',
  layout = 'centered',
  spacing = 'lg',
  children,
  className = '',
}: CTASectionProps) {
  const backgroundClass = {
    gradient: 'glass-card p-8 md:p-12 rounded-3xl hero-gradient',
    glass: 'glass-card p-8 md:p-12 rounded-3xl',
    none: '',
  }[background];

  const layoutClass = {
    centered: 'text-center',
    split: 'md:flex md:items-center md:justify-between md:text-left',
  }[layout];

  return (
    <Section spacing={spacing} className={className}>
      <motion.div
        className={`${backgroundClass} ${layoutClass}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Content */}
        <div className={layout === 'split' ? 'md:flex-1' : ''}>
          <FadeIn>
            {typeof title === 'string' ? (
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {title}
              </h2>
            ) : (
              title
            )}
          </FadeIn>

          {description && (
            <FadeIn delay={0.2}>
              {typeof description === 'string' ? (
                <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                  {description}
                </p>
              ) : (
                description
              )}
            </FadeIn>
          )}
        </div>

        {/* Actions */}
        {children ? (
          <div className={`mt-6 ${layout === 'split' ? 'md:mt-0 md:ml-8' : ''}`}>
            <FadeIn delay={0.4}>
              {children}
            </FadeIn>
          </div>
        ) : buttons.length > 0 ? (
          <div className={`mt-6 ${layout === 'split' ? 'md:mt-0 md:ml-8' : ''}`}>
            <FadeIn delay={0.4}>
              <div className={`flex flex-col sm:flex-row gap-4 ${layout === 'centered' ? 'justify-center' : ''}`}>
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
          </div>
        ) : null}
      </motion.div>
    </Section>
  );
}
