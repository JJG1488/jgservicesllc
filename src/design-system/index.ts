/**
 * Design System Entry Point
 *
 * Export all design tokens and utilities for use throughout the application.
 *
 * @example
 * ```typescript
 * import { tokens } from '@/design-system';
 *
 * const primaryColor = tokens.colors.primary[600];
 * const spacing = tokens.spacing.lg;
 * ```
 */

import defaultTokens from './tokens.config';

export { tokens, type DesignTokens, type ColorScale, type GlassConfig } from './tokens.config';

export default defaultTokens;
