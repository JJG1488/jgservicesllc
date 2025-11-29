/**
 * FloatingCard - Backward Compatibility Re-export
 *
 * This file maintains backward compatibility by re-exporting the refactored
 * FloatingCard component from its new location in the UI library.
 *
 * @deprecated Import from '@/ui-library/primitives/FloatingCard/FloatingCard' instead
 * @see /src/ui-library/primitives/FloatingCard/ for the new modular implementation
 */

export { default, type FloatingCardProps } from '@/ui-library/primitives/FloatingCard/FloatingCard';
export {
  backgroundStyles,
  floatingCardDefaults,
  type BackgroundStyle,
  type FloatingCardConfig,
} from '@/ui-library/primitives/FloatingCard/FloatingCard.data';
