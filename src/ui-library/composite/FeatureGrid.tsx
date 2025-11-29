'use client'

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FadeIn from '../animations/FadeIn';
import ScaleIn from '../animations/ScaleIn';
import Section from '../layouts/Section';
import Grid from '../layouts/Grid';

/**
 * Feature Item Configuration
 */
export interface FeatureItem {
  /** Feature number (for numbered lists) */
  number?: number;
  /** Feature icon (emoji, URL, or React node) */
  icon?: string | ReactNode;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
  /** Feature image URL */
  image?: string;
  /** Gradient color classes (e.g., "from-blue-500 to-blue-600") */
  color?: string;
  /** Additional metadata */
  metadata?: Record<string, any>;
}

/**
 * Props for the FeatureGrid component
 */
export interface FeatureGridProps {
  /**
   * Section title
   */
  title?: string | ReactNode;

  /**
   * Section subtitle/description
   */
  subtitle?: string | ReactNode;

  /**
   * Array of features to display
   */
  features: FeatureItem[];

  /**
   * Number of columns
   * @default 3
   */
  columns?: 1 | 2 | 3 | 4;

  /**
   * Grid gap size
   * @default 'lg'
   */
  gap?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Show feature images
   * @default false
   */
  showImages?: boolean;

  /**
   * Card style
   * @default 'glass'
   */
  cardStyle?: 'glass' | 'gradient' | 'simple';

  /**
   * Animation style
   * @default 'stagger'
   */
  animation?: 'stagger' | 'fade' | 'scale' | 'none';

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
 * FeatureGrid - Grid layout for features, services, or process steps
 *
 * A flexible grid component for displaying features, services, process steps,
 * or any card-based content. Supports images, icons, numbers, and custom styling.
 *
 * @component
 * @example
 * ```tsx
 * // Basic 3-column feature grid
 * <FeatureGrid
 *   title="Our Process"
 *   subtitle="A proven approach to bring your vision to life"
 *   features={[
 *     {
 *       number: 1,
 *       title: "Discovery",
 *       description: "We learn about your business and goals.",
 *       icon: "🔍",
 *       color: "from-blue-500 to-blue-600"
 *     },
 *     {
 *       number: 2,
 *       title: "Design",
 *       description: "We create beautiful, functional designs.",
 *       icon: "🎨",
 *       color: "from-purple-500 to-purple-600"
 *     },
 *     {
 *       number: 3,
 *       title: "Develop",
 *       description: "We build your custom solution.",
 *       icon: "💻",
 *       color: "from-green-500 to-green-600"
 *     },
 *   ]}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // 2-column grid with images
 * <FeatureGrid
 *   columns={2}
 *   showImages
 *   features={[
 *     {
 *       title: "Web Development",
 *       description: "Custom websites and applications.",
 *       image: "/images/web-dev.png",
 *       icon: "💻"
 *     },
 *     {
 *       title: "Mobile Apps",
 *       description: "iOS and Android applications.",
 *       image: "/images/mobile.png",
 *       icon: "📱"
 *     },
 *   ]}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Simple grid without animations
 * <FeatureGrid
 *   features={features}
 *   animation="none"
 *   cardStyle="simple"
 *   gap="md"
 * />
 * ```
 *
 * @param props - Component props
 * @returns Feature grid section
 *
 * @see {@link FeatureGridProps} for all available props
 * @see {@link FeatureItem} for feature item configuration
 *
 * @remarks
 * - Uses Grid layout component from ui-library
 * - Supports staggered animations
 * - Responsive column layout
 * - Integrates with design system
 *
 * @packageDocumentation
 */
export default function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 3,
  gap = 'lg',
  showImages = false,
  cardStyle = 'glass',
  animation = 'stagger',
  spacing = 'lg',
  className = '',
}: FeatureGridProps) {
  const cardClasses = {
    glass: 'glass-card p-6 rounded-2xl',
    gradient: 'glass-card p-6 rounded-2xl hero-gradient',
    simple: 'p-6 rounded-2xl border border-white/10',
  }[cardStyle];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const renderFeature = (feature: FeatureItem, index: number) => {
    const content = (
      <div className={cardClasses}>
        {/* Image */}
        {showImages && feature.image && (
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Number or Icon */}
        <div className="mb-4 flex items-center gap-3">
          {feature.number && (
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.color || 'from-blue-500 to-purple-600'} flex items-center justify-center text-white font-bold text-xl`}>
              {feature.number}
            </div>
          )}
          {feature.icon && typeof feature.icon === 'string' && (
            <div className="text-4xl">{feature.icon}</div>
          )}
          {feature.icon && typeof feature.icon !== 'string' && feature.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-blue-100 leading-relaxed">
          {feature.description}
        </p>
      </div>
    );

    // Wrap in animation based on animation prop
    if (animation === 'stagger') {
      return (
        <motion.div key={index} variants={itemVariants}>
          {content}
        </motion.div>
      );
    } else if (animation === 'fade') {
      return (
        <FadeIn key={index} delay={index * 0.1}>
          {content}
        </FadeIn>
      );
    } else if (animation === 'scale') {
      return (
        <ScaleIn key={index} delay={index * 0.1}>
          {content}
        </ScaleIn>
      );
    } else {
      return <div key={index}>{content}</div>;
    }
  };

  return (
    <Section spacing={spacing} className={className}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="text-center mb-16">
          {title && (
            <ScaleIn>
              {typeof title === 'string' ? (
                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                  {title}
                </h2>
              ) : (
                title
              )}
            </ScaleIn>
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

      {/* Features Grid */}
      {animation === 'stagger' ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Grid columns={columns} gap={gap}>
            {features.map((feature, index) => renderFeature(feature, index))}
          </Grid>
        </motion.div>
      ) : (
        <Grid columns={columns} gap={gap}>
          {features.map((feature, index) => renderFeature(feature, index))}
        </Grid>
      )}
    </Section>
  );
}
