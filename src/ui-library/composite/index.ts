/**
 * Composite Components - Centralized Exports
 *
 * This file exports all composite/page composition components from the
 * ui-library composite module. These are higher-level components built
 * from primitives, animations, forms, and layouts.
 *
 * @module ui-library/composite
 */

// Hero Section
export { default as Hero, type HeroProps, type HeroButton } from './Hero';

// Feature Grid
export { default as FeatureGrid, type FeatureGridProps, type FeatureItem } from './FeatureGrid';

// Stats Section
export { default as StatsSection, type StatsSectionProps, type StatItem } from './StatsSection';

// CTA Section
export { default as CTASection, type CTASectionProps, type CTAButton } from './CTASection';

// Card Grid
export { default as CardGrid, type CardGridProps, type CardItem } from './CardGrid';
