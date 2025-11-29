'use client'

import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScaleIn from '../animations/ScaleIn';
import FadeIn from '../animations/FadeIn';
import Section from '../layouts/Section';
import Grid from '../layouts/Grid';

/**
 * Card Item Configuration
 */
export interface CardItem {
  /** Unique ID */
  id: string | number;
  /** Card title */
  title: string;
  /** Card description */
  description: string;
  /** Card image URL */
  image?: string;
  /** Card link URL */
  href?: string;
  /** Tags/badges */
  tags?: string[];
  /** Icon (emoji or React node) */
  icon?: string | ReactNode;
  /** External link */
  external?: boolean;
  /** Custom action element */
  action?: ReactNode;
  /** Additional metadata */
  metadata?: Record<string, any>;
}

/**
 * Props for the CardGrid component
 */
export interface CardGridProps {
  /**
   * Section title
   */
  title?: string | ReactNode;

  /**
   * Section subtitle/description
   */
  subtitle?: string | ReactNode;

  /**
   * Array of cards to display
   */
  cards: CardItem[];

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
   * Show card images
   * @default true
   */
  showImages?: boolean;

  /**
   * Show card tags
   * @default true
   */
  showTags?: boolean;

  /**
   * Card hover effect
   * @default 'lift'
   */
  hoverEffect?: 'lift' | 'scale' | 'glow' | 'none';

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
 * CardGrid - Grid layout for projects, services, or content cards
 *
 * A flexible grid component for displaying cards with images, titles,
 * descriptions, tags, and actions. Perfect for portfolios, services, or blogs.
 *
 * @component
 * @example
 * ```tsx
 * // Project portfolio grid
 * <CardGrid
 *   title="Our Projects"
 *   subtitle="Browse our latest work"
 *   cards={[
 *     {
 *       id: 1,
 *       title: "E-Commerce Platform",
 *       description: "A modern online store with cart and checkout.",
 *       image: "/images/project1.png",
 *       href: "/projects/ecommerce",
 *       tags: ["Next.js", "Stripe", "TypeScript"],
 *     },
 *     {
 *       id: 2,
 *       title: "Restaurant Website",
 *       description: "Menu, reservations, and online ordering.",
 *       image: "/images/project2.png",
 *       href: "/projects/restaurant",
 *       tags: ["React", "Node.js"],
 *     },
 *   ]}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Service cards without images
 * <CardGrid
 *   columns={2}
 *   showImages={false}
 *   cards={[
 *     {
 *       id: 1,
 *       title: "Web Development",
 *       description: "Custom websites and web applications.",
 *       icon: "💻",
 *       href: "/services/web-dev",
 *     },
 *     {
 *       id: 2,
 *       title: "SEO Optimization",
 *       description: "Improve your search engine rankings.",
 *       icon: "🔍",
 *       href: "/services/seo",
 *     },
 *   ]}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Blog post grid
 * <CardGrid
 *   columns={3}
 *   hoverEffect="scale"
 *   cards={blogPosts.map(post => ({
 *     id: post.slug,
 *     title: post.title,
 *     description: post.excerpt,
 *     image: post.coverImage,
 *     href: `/blog/${post.slug}`,
 *     tags: post.categories,
 *   }))}
 * />
 * ```
 *
 * @param props - Component props
 * @returns Card grid section
 *
 * @see {@link CardGridProps} for all available props
 * @see {@link CardItem} for card item configuration
 *
 * @remarks
 * - Responsive column layout
 * - Hover effects with Framer Motion
 * - Optional images, tags, and custom actions
 * - Integrates with design system
 *
 * @packageDocumentation
 */
export default function CardGrid({
  title,
  subtitle,
  cards,
  columns = 3,
  gap = 'lg',
  showImages = true,
  showTags = true,
  hoverEffect = 'lift',
  spacing = 'lg',
  className = '',
}: CardGridProps) {
  const hoverVariants = {
    lift: { y: -8 },
    scale: { scale: 1.03 },
    glow: { boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' },
    none: {},
  }[hoverEffect];

  const renderCard = (card: CardItem, index: number) => {
    const cardContent = (
      <motion.div
        className="glass-card rounded-2xl overflow-hidden group hero-gradient h-full flex flex-col"
        whileHover={hoverVariants}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Image */}
        {showImages && card.image && (
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Icon */}
          {!showImages && card.icon && (
            <div className="text-4xl mb-4">
              {typeof card.icon === 'string' ? card.icon : card.icon}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-blue-100 mb-4 flex-1">
            {card.description}
          </p>

          {/* Tags */}
          {showTags && card.tags && card.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {card.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Custom Action */}
          {card.action && (
            <div className="mt-auto">
              {card.action}
            </div>
          )}

          {/* Default Link Arrow */}
          {card.href && !card.action && (
            <div className="flex items-center text-blue-300 font-medium group-hover:text-blue-200 transition">
              View {card.external && 'External'}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          )}
        </div>
      </motion.div>
    );

    // Wrap in link if href is provided
    const cardElement = card.href ? (
      <Link
        key={card.id}
        href={card.href}
        {...(card.external && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
      >
        {cardContent}
      </Link>
    ) : (
      <div key={card.id}>{cardContent}</div>
    );

    return (
      <ScaleIn delay={index * 0.1}>
        {cardElement}
      </ScaleIn>
    );
  };

  return (
    <Section spacing={spacing} className={className}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <FadeIn>
              {typeof title === 'string' ? (
                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
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

      {/* Cards Grid */}
      <Grid columns={columns} gap={gap}>
        {cards.map((card, index) => renderCard(card, index))}
      </Grid>
    </Section>
  );
}
