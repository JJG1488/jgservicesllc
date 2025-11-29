'use client'

import { HTMLAttributes, ReactNode, CSSProperties } from 'react';
import { gridColumns, gridGap, type GridColumns, type GridGap } from './layout.config';

/**
 * Props for the Grid component
 */
export interface GridProps {
  /**
   * Number of columns (responsive by default)
   * @default 3
   */
  columns?: GridColumns;

  /**
   * Gap between grid items
   * @default 'md'
   */
  gap?: GridGap;

  /**
   * Custom grid template columns (overrides columns prop)
   */
  gridTemplateColumns?: string;

  /**
   * Custom grid template rows
   */
  gridTemplateRows?: string;

  /**
   * Element type to render
   * @default 'div'
   */
  as?: 'div' | 'section' | 'article' | 'ul' | 'ol' | 'nav';

  /**
   * Child elements
   */
  children?: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Inline styles
   */
  style?: CSSProperties;
}

/**
 * Grid - Responsive CSS Grid layout component
 *
 * A flexible grid component with responsive column configurations and
 * consistent gap spacing. Built on CSS Grid with mobile-first breakpoints.
 *
 * @component
 * @example
 * ```tsx
 * // 3-column grid (default)
 * <Grid>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 * ```
 *
 * @example
 * ```tsx
 * // 4-column grid with large gap
 * <Grid columns={4} gap="lg">
 *   <Card>Card 1</Card>
 *   <Card>Card 2</Card>
 *   <Card>Card 3</Card>
 *   <Card>Card 4</Card>
 * </Grid>
 * ```
 *
 * @example
 * ```tsx
 * // 2-column grid with custom styling
 * <Grid
 *   columns={2}
 *   gap="xl"
 *   className="items-start"
 * >
 *   <div>Left Column</div>
 *   <div>Right Column</div>
 * </Grid>
 * ```
 *
 * @example
 * ```tsx
 * // Custom grid template
 * <Grid
 *   gridTemplateColumns="200px 1fr 1fr"
 *   gap="md"
 * >
 *   <aside>Sidebar</aside>
 *   <main>Content</main>
 *   <aside>Sidebar 2</aside>
 * </Grid>
 * ```
 *
 * @example
 * ```tsx
 * // As list element
 * <Grid as="ul" columns={3} gap="sm">
 *   <li>Item 1</li>
 *   <li>Item 2</li>
 *   <li>Item 3</li>
 * </Grid>
 * ```
 *
 * @example
 * ```tsx
 * // 12-column layout (like Bootstrap)
 * <Grid columns={12} gap="md">
 *   <div className="col-span-8">Main Content</div>
 *   <div className="col-span-4">Sidebar</div>
 * </Grid>
 * ```
 *
 * @param props - Component props
 * @returns Grid element
 *
 * @see {@link GridProps} for all available props
 * @see {@link layout.config.ts} for column and gap options
 *
 * @remarks
 * - Mobile-first responsive breakpoints
 * - Integrates with design system spacing
 * - Can override with custom grid-template-columns
 * - Can render as different semantic HTML elements
 *
 * @packageDocumentation
 */
export default function Grid({
  columns = 3,
  gap = 'md',
  gridTemplateColumns,
  gridTemplateRows,
  as = 'div',
  className = '',
  style,
  children,
}: GridProps) {
  const Component = as;

  const classes = `
    grid
    ${!gridTemplateColumns ? gridColumns[columns] : ''}
    ${gridGap[gap]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const customStyles = {
    ...style,
    ...(gridTemplateColumns && { gridTemplateColumns }),
    ...(gridTemplateRows && { gridTemplateRows }),
  };

  return (
    <Component
      className={classes}
      style={customStyles}
    >
      {children}
    </Component>
  );
}
