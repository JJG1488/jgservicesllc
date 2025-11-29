/**
 * Layout System Configuration
 *
 * Centralized layout configuration for consistent spacing, containers,
 * and structural patterns across the application.
 *
 * @see /src/design-system/tokens.config.ts for base design tokens
 */

import { tokens } from '@/design-system';

/**
 * Container max-widths for different breakpoints
 */
export const containerSizes = {
  sm: 'max-w-2xl',    // 672px
  md: 'max-w-4xl',    // 896px
  lg: 'max-w-5xl',    // 1024px
  xl: 'max-w-6xl',    // 1152px
  '2xl': 'max-w-7xl', // 1280px
  full: 'max-w-full',
} as const;

/**
 * Container padding options
 */
export const containerPadding = {
  none: '',
  sm: 'px-4',
  md: 'px-6',
  lg: 'px-8',
  xl: 'px-12',
} as const;

/**
 * Section spacing (vertical padding)
 */
export const sectionSpacing = {
  none: '',
  xs: 'py-8',
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-20',
  xl: 'py-24',
  '2xl': 'py-32',
} as const;

/**
 * Grid column configurations
 */
export const gridColumns = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
  6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  12: 'grid-cols-12',
} as const;

/**
 * Grid gap options
 */
export const gridGap = {
  none: '',
  xs: 'gap-2',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
  '2xl': 'gap-16',
} as const;

/**
 * Navigation height
 */
export const navHeight = {
  default: 'h-16',
  tall: 'h-20',
  compact: 'h-14',
} as const;

/**
 * Navigation styling
 */
export const navStyles = {
  glass: 'glass-md border-b border-white/10',
  solid: 'bg-neutral-900 border-b border-white/10',
  transparent: 'bg-transparent',
} as const;

/**
 * Footer styling
 */
export const footerStyles = {
  glass: 'glass-md border-t border-white/10',
  solid: 'bg-neutral-900 border-t border-white/10',
} as const;

/**
 * Common layout patterns
 */
export const layoutPatterns = {
  /** Standard page container */
  pageContainer: {
    size: containerSizes['2xl'],
    padding: containerPadding.md,
  },

  /** Section with standard spacing */
  section: {
    spacing: sectionSpacing.lg,
  },

  /** Feature grid (3 columns) */
  featureGrid: {
    columns: gridColumns[3],
    gap: gridGap.lg,
  },

  /** Card grid (responsive 1-4 columns) */
  cardGrid: {
    columns: gridColumns[4],
    gap: gridGap.md,
  },
} as const;

/**
 * Z-index layering
 */
export const zIndex = {
  nav: 'z-50',
  modal: 'z-[100]',
  dropdown: 'z-40',
  overlay: 'z-30',
  content: 'z-10',
  base: 'z-0',
} as const;

/**
 * Complete layout configuration
 */
export const layoutConfig = {
  containerSizes,
  containerPadding,
  sectionSpacing,
  gridColumns,
  gridGap,
  navHeight,
  navStyles,
  footerStyles,
  layoutPatterns,
  zIndex,
} as const;

/**
 * Type definitions
 */
export type ContainerSize = keyof typeof containerSizes;
export type ContainerPadding = keyof typeof containerPadding;
export type SectionSpacing = keyof typeof sectionSpacing;
export type GridColumns = keyof typeof gridColumns;
export type GridGap = keyof typeof gridGap;
export type NavHeight = keyof typeof navHeight;
export type NavStyle = keyof typeof navStyles;
export type FooterStyle = keyof typeof footerStyles;
export type LayoutConfig = typeof layoutConfig;

export default layoutConfig;
