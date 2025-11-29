/**
 * GlowCard - Backward Compatibility Re-export
 *
 * This file maintains backward compatibility by re-exporting the refactored
 * GlowCard component from its new location in the UI library.
 *
 * @deprecated Import from '@/ui-library/primitives/GlowCard/GlowCard' instead
 * @see /src/ui-library/primitives/GlowCard/ for the new modular implementation
 */

export { default, type GlowCardProps } from '@/ui-library/primitives/GlowCard/GlowCard';
export { glowColors, glowCardDefaults, type GlowColor, type GlowCardConfig } from '@/ui-library/primitives/GlowCard/GlowCard.data';
