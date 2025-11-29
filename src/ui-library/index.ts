/**
 * UI Library - Entry Point
 *
 * Central export point for all refactored UI components and animations.
 * Import components from here for the cleanest syntax.
 *
 * @example
 * ```typescript
 * // Import UI components
 * import { GlowCard, MagneticButton } from '@/ui-library';
 *
 * // Import animations
 * import { FadeIn, ScaleIn, StaggerChildren } from '@/ui-library';
 *
 * // Import configuration
 * import { glowCardDefaults, durations, easings } from '@/ui-library';
 * ```
 */

// ===== Primitives =====

/**
 * GlowCard - Interactive card with mouse-tracking glow effect
 * @see /src/ui-library/primitives/GlowCard/README.md
 */
export { default as GlowCard, type GlowCardProps } from './primitives/GlowCard/GlowCard';
export {
  glowColors,
  glowCardDefaults,
  type GlowColor,
  type GlowCardConfig,
} from './primitives/GlowCard/GlowCard.data';

/**
 * MagneticButton - Button/link with magnetic hover effect
 * @see /src/ui-library/primitives/MagneticButton/README.md
 */
export { default as MagneticButton, type MagneticButtonProps } from './primitives/MagneticButton/MagneticButton';
export {
  magneticStrength,
  magneticButtonDefaults,
  type MagneticStrength,
  type MagneticButtonConfig,
} from './primitives/MagneticButton/MagneticButton.data';

/**
 * AnimatedButton - Button with gradient slide animation
 * @see /src/ui-library/primitives/AnimatedButton/README.md
 */
export { default as AnimatedButton, type AnimatedButtonProps } from './primitives/AnimatedButton/AnimatedButton';
export {
  buttonVariants,
  buttonSizes,
  animatedButtonDefaults,
  type ButtonVariant,
  type ButtonSize,
  type AnimatedButtonConfig,
} from './primitives/AnimatedButton/AnimatedButton.data';

/**
 * FloatingCard - Card with scroll-triggered fade-in and float effect
 * @see /src/ui-library/primitives/FloatingCard/README.md
 */
export { default as FloatingCard, type FloatingCardProps } from './primitives/FloatingCard/FloatingCard';
export {
  backgroundStyles,
  floatingCardDefaults,
  type BackgroundStyle,
  type FloatingCardConfig,
} from './primitives/FloatingCard/FloatingCard.data';

/**
 * InteractiveCodeBlock - Expandable code block with copy functionality
 * @see /src/ui-library/primitives/InteractiveCodeBlock/README.md
 */
export { default as InteractiveCodeBlock, type InteractiveCodeBlockProps } from './primitives/InteractiveCodeBlock/InteractiveCodeBlock';
export {
  codeThemes,
  languageBadgeColors,
  interactiveCodeBlockDefaults,
  type CodeTheme,
  type LanguageType,
  type InteractiveCodeBlockConfig,
} from './primitives/InteractiveCodeBlock/InteractiveCodeBlock.data';

// ===== Animations =====

/**
 * FadeIn - Scroll-triggered fade animation with directional slide
 * @see /src/ui-library/animations/README-FadeIn.md
 */
export { default as FadeIn, type FadeInProps } from './animations/FadeIn';

/**
 * ScaleIn - Scroll-triggered scale-up animation
 */
export { default as ScaleIn, type ScaleInProps } from './animations/ScaleIn';

/**
 * SlideIn - Simplified slide animation
 */
export { default as SlideIn, type SlideInProps } from './animations/SlideIn';

/**
 * StaggerChildren - Sequential animation for child elements
 */
export { default as StaggerChildren, type StaggerChildrenProps } from './animations/StaggerChildren';

/**
 * Animation Configuration
 * Durations, easings, presets, and more
 */
export {
  durations,
  easings,
  directionOffsets,
  scales,
  viewport,
  stagger,
  presets,
  animationConfig,
  type Duration,
  type Easing,
  type Direction,
  type Scale,
  type Preset,
  type AnimationConfig,
} from './animations/animation.config';

// ===== Forms =====

/**
 * Input - Styled text input field
 */
export { default as Input, type InputProps } from './forms/Input';

/**
 * Textarea - Styled multiline text input
 */
export { default as Textarea, type TextareaProps } from './forms/Textarea';

/**
 * Select - Styled dropdown select
 */
export { default as Select, type SelectProps } from './forms/Select';

/**
 * Checkbox - Styled checkbox input
 */
export { default as Checkbox, type CheckboxProps } from './forms/Checkbox';

/**
 * FormField - Complete field with label, input, error, helper text
 */
export { default as FormField, type FormFieldProps } from './forms/FormField';

/**
 * FormMessage - Alert/status message for forms
 */
export { default as FormMessage, type FormMessageProps } from './forms/FormMessage';

/**
 * SubmitButton - Smart submit button with states
 */
export { default as SubmitButton, type SubmitButtonProps } from './forms/SubmitButton';

/**
 * Form Configuration
 * Field sizes, styles, message types, and more
 */
export {
  fieldSizes,
  fieldStyles,
  labelStyles,
  errorStyles,
  helperStyles,
  messageStyles,
  submitButtonStates,
  checkboxStyles,
  selectStyles,
  spacing as formSpacing,
  animations as formAnimations,
  formConfig,
  type FieldSize,
  type MessageType,
  type SubmitState,
  type FormConfig,
} from './forms/form.config';

// ===== Layouts =====

/**
 * Container - Responsive content container with max-width
 */
export { default as Container, type ContainerProps } from './layouts/Container';

/**
 * Section - Page section with consistent vertical spacing
 */
export { default as Section, type SectionProps } from './layouts/Section';

/**
 * Grid - Responsive CSS Grid layout component
 */
export { default as Grid, type GridProps } from './layouts/Grid';

/**
 * Layout Configuration
 * Container sizes, spacing, grid columns, and more
 */
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
} from './layouts/layout.config';

/**
 * Navigation Data
 * Navigation links, branding, and styling configuration
 */
export {
  navLinks,
  siteBranding,
  navigationStyles,
  linkStates,
  mobileMenu,
  navigationConfig,
  type NavLink,
} from './layouts/navigation.data';

/**
 * Footer Data
 * Footer links, contact info, and configuration
 */
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
} from './layouts/footer.data';

// ===== Composite Components =====

/**
 * Hero - Full-width hero section with optional animations
 */
export { default as Hero, type HeroProps, type HeroButton } from './composite/Hero';

/**
 * FeatureGrid - Grid layout for features, services, or process steps
 */
export { default as FeatureGrid, type FeatureGridProps, type FeatureItem } from './composite/FeatureGrid';

/**
 * StatsSection - Display statistics and metrics
 */
export { default as StatsSection, type StatsSectionProps, type StatItem } from './composite/StatsSection';

/**
 * CTASection - Call-to-action section
 */
export { default as CTASection, type CTASectionProps, type CTAButton } from './composite/CTASection';

/**
 * CardGrid - Grid layout for projects, services, or content cards
 */
export { default as CardGrid, type CardGridProps, type CardItem } from './composite/CardGrid';

// ===== Future Exports =====

/**
 * Component Categories:
 *
 * - **Primitives** (Phase 2 ✅): Base UI components (buttons, cards, code blocks)
 * - **Animations** (Phase 3 ✅): Reusable animation components
 * - **Forms** (Phase 4 ✅): Form components and validation
 * - **Layouts** (Phase 5 ✅): Layout components (Container, Section, Grid) and data
 * - **Composite** (Phase 6 ✅): Page composition patterns (Hero, FeatureGrid, StatsSection, CTASection, CardGrid)
 */
