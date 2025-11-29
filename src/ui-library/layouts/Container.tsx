'use client'

import { forwardRef, HTMLAttributes } from 'react';
import { containerSizes, containerPadding, type ContainerSize, type ContainerPadding } from './layout.config';

/**
 * Props for the Container component
 */
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Container max-width size
   * @default '2xl'
   */
  size?: ContainerSize;

  /**
   * Horizontal padding
   * @default 'md'
   */
  padding?: ContainerPadding;

  /**
   * Center the container
   * @default true
   */
  center?: boolean;

  /**
   * Element type to render
   * @default 'div'
   */
  as?: 'div' | 'section' | 'article' | 'main' | 'aside' | 'header' | 'footer' | 'nav';
}

/**
 * Container - Responsive content container with max-width
 *
 * A flexible container component that constrains content width and provides
 * consistent horizontal padding. Supports multiple sizes and can be centered.
 *
 * @component
 * @example
 * ```tsx
 * // Standard page container
 * <Container>
 *   <h1>Page Content</h1>
 *   <p>Text content here...</p>
 * </Container>
 * ```
 *
 * @example
 * ```tsx
 * // Custom size and padding
 * <Container size="lg" padding="lg">
 *   <h2>Section Content</h2>
 * </Container>
 * ```
 *
 * @example
 * ```tsx
 * // Full width, no padding
 * <Container size="full" padding="none">
 *   <div>Edge-to-edge content</div>
 * </Container>
 * ```
 *
 * @example
 * ```tsx
 * // As semantic element
 * <Container as="main" size="xl">
 *   <h1>Main Content</h1>
 * </Container>
 * ```
 *
 * @example
 * ```tsx
 * // Not centered (left-aligned)
 * <Container center={false}>
 *   <p>Left-aligned content</p>
 * </Container>
 * ```
 *
 * @param props - Component props
 * @returns Container element
 *
 * @see {@link ContainerProps} for all available props
 * @see {@link layout.config.ts} for size and padding options
 *
 * @remarks
 * - Uses forwardRef for ref support
 * - Integrates with design system layout tokens
 * - Responsive by default with configurable breakpoints
 * - Can render as different semantic HTML elements
 *
 * @packageDocumentation
 */
const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      size = '2xl',
      padding = 'md',
      center = true,
      as = 'div',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const Component = as;

    const classes = `
      ${containerSizes[size]}
      ${containerPadding[padding]}
      ${center ? 'mx-auto' : ''}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <Component
        ref={ref as any}
        className={classes}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

export default Container;
