/**
 * MagneticButton - Backward Compatibility Re-export
 *
 * This file maintains backward compatibility by re-exporting the refactored
 * MagneticButton component from its new location in the UI library.
 *
 * @deprecated Import from '@/ui-library/primitives/MagneticButton/MagneticButton' instead
 * @see /src/ui-library/primitives/MagneticButton/ for the new modular implementation
 */

export { default, type MagneticButtonProps } from '@/ui-library/primitives/MagneticButton/MagneticButton';
export {
  magneticStrength,
  magneticButtonDefaults,
  type MagneticStrength,
  type MagneticButtonConfig,
} from '@/ui-library/primitives/MagneticButton/MagneticButton.data';
