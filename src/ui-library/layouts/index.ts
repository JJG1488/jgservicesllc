/**
 * Layout System - Centralized Exports
 *
 * This file exports all layout components and configurations from the
 * ui-library layouts module for easy importing.
 *
 * @module ui-library/layouts
 */

// Layout Components
export { default as Container, type ContainerProps } from './Container';
export { default as Section, type SectionProps } from './Section';
export { default as Grid, type GridProps } from './Grid';

// Layout Configuration
export {
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
  layoutConfig,
  type ContainerSize,
  type ContainerPadding,
  type SectionSpacing,
  type GridColumns,
  type GridGap,
  type NavHeight,
  type NavStyle,
  type FooterStyle,
  type LayoutConfig,
} from './layout.config';

// Navigation Data
export {
  navLinks,
  siteBranding,
  navigationStyles,
  linkStates,
  mobileMenu,
  navigationConfig,
  type NavLink,
} from './navigation.data';

// Footer Data
export {
  footerLinks,
  contactInfo,
  footerCTA,
  legalLinks,
  footerCredits,
  footerStyles as footerStylesData,
  animationDelays,
  footerConfig,
  type FooterLink,
} from './footer.data';
