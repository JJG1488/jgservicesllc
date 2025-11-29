'use client'

import { forwardRef, HTMLAttributes } from 'react';
import { sectionSpacing, type SectionSpacing } from './layout.config';
import Container, { type ContainerProps } from './Container';

/**
 * Props for the Section component
 */
export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Vertical spacing (padding-y)
   * @default 'lg'
   */
  spacing?: SectionSpacing;

  /**
   * Use a Container wrapper inside the section
   * @default true
   */
  container?: boolean;

  /**
   * Container size (only used if container=true)
   * @default '2xl'
   */
  containerSize?: ContainerProps['size'];

  /**
   * Container padding (only used if container=true)
   * @default 'md'
   */
  containerPadding?: ContainerProps['padding'];

  /**
   * Element type to render
   * @default 'section'
   */
  as?: 'div' | 'section' | 'article' | 'main' | 'aside' | 'header' | 'footer' | 'nav';
}

/**
 * Section - Page section with consistent vertical spacing
 *
 * A semantic section component that provides consistent vertical spacing
 * and optionally wraps content in a Container. Ideal for page sections.
 *
 * @component
 * @example
 * ```tsx
 * // Standard section with container
 * <Section>
 *   <h2>Section Title</h2>
 *   <p>Section content...</p>
 * </Section>
 * ```
 *
 * @example
 * ```tsx
 * // Custom spacing and container size
 * <Section spacing="xl" containerSize="lg">
 *   <h2>Large Spaced Section</h2>
 * </Section>
 * ```
 *
 * @example
 * ```tsx
 * // Without container (full width)
 * <Section container={false} spacing="md">
 *   <div className="w-full">Full width content</div>
 * </Section>
 * ```
 *
 * @example
 * ```tsx
 * // Hero section with no spacing
 * <Section spacing="none" containerSize="xl">
 *   <div className="min-h-screen flex items-center">
 *     <h1>Hero Content</h1>
 *   </div>
 * </Section>
 * ```
 *
 * @example
 * ```tsx
 * // As main element
 * <Section as="main" spacing="2xl">
 *   <h1>Main Content</h1>
 * </Section>
 * ```
 *
 * @param props - Component props
 * @returns Section element
 *
 * @see {@link SectionProps} for all available props
 * @see {@link Container} for container configuration
 * @see {@link layout.config.ts} for spacing options
 *
 * @remarks
 * - Uses forwardRef for ref support
 * - Automatically wraps content in Container unless disabled
 * - Responsive spacing from design system
 * - Can render as different semantic HTML elements
 *
 * @packageDocumentation
 */
const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      spacing = 'lg',
      container = true,
      containerSize = '2xl',
      containerPadding = 'md',
      as = 'section',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const Component = as;

    const classes = `
      ${sectionSpacing[spacing]}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <Component
        ref={ref as any}
        className={classes}
        {...props}
      >
        {container ? (
          <Container size={containerSize} padding={containerPadding}>
            {children}
          </Container>
        ) : (
          children
        )}
      </Component>
    );
  }
);

Section.displayName = 'Section';

export default Section;
