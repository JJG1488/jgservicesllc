/**
 * AnimatedButton - Backward Compatibility Re-export
 *
 * This file maintains backward compatibility by re-exporting the refactored
 * AnimatedButton component from its new location in the UI library.
 *
 * @deprecated Import from '@/ui-library/primitives/AnimatedButton/AnimatedButton' instead
 * @see /src/ui-library/primitives/AnimatedButton/ for the new modular implementation
 */

export { default, type AnimatedButtonProps } from '@/ui-library/primitives/AnimatedButton/AnimatedButton';
export {
  buttonVariants,
  buttonSizes,
  animatedButtonDefaults,
  type ButtonVariant,
  type ButtonSize,
  type AnimatedButtonConfig,
} from '@/ui-library/primitives/AnimatedButton/AnimatedButton.data';
