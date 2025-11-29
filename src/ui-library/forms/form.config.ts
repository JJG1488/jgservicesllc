/**
 * Form System Configuration
 *
 * Centralized form styling and behavior configuration using design system tokens.
 * All form components use these values for consistency.
 *
 * @see /src/design-system/tokens.config.ts for base design tokens
 */

import { tokens } from '@/design-system';

/**
 * Form field sizes
 */
export const fieldSizes = {
  sm: {
    padding: 'px-3 py-2',
    fontSize: 'text-sm',
    height: 'h-9',
  },
  md: {
    padding: 'px-4 py-3',
    fontSize: 'text-base',
    height: 'h-11',
  },
  lg: {
    padding: 'px-5 py-4',
    fontSize: 'text-lg',
    height: 'h-14',
  },
} as const;

/**
 * Form field styling
 */
export const fieldStyles = {
  /** Base styles applied to all fields */
  base: 'w-full glass-sm rounded-lg transition outline-none',

  /** Text color */
  text: 'text-white placeholder-blue-200/50',

  /** Focus state */
  focus: 'focus:ring-2 focus:ring-blue-400',

  /** Disabled state */
  disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',

  /** Error state */
  error: 'ring-2 ring-red-400 focus:ring-red-400',

  /** Success state */
  success: 'ring-2 ring-green-400 focus:ring-green-400',
} as const;

/**
 * Label styling
 */
export const labelStyles = {
  base: 'block text-sm font-medium mb-2 text-blue-100',
  required: 'after:content-["*"] after:ml-1 after:text-red-400',
  optional: 'after:content-["(optional)"] after:ml-2 after:text-blue-300/70 after:font-normal after:text-xs',
  disabled: 'opacity-50 cursor-not-allowed',
} as const;

/**
 * Error message styling
 */
export const errorStyles = {
  base: 'mt-2 text-sm text-red-300 flex items-start gap-1',
  icon: '⚠️',
} as const;

/**
 * Helper text styling
 */
export const helperStyles = {
  base: 'mt-2 text-sm text-blue-200/70',
} as const;

/**
 * Form message (alert) styling
 */
export const messageStyles = {
  base: 'p-4 rounded-lg glass-sm border',
  success: 'border-green-500/30 bg-green-500/10 text-green-200',
  error: 'border-red-500/30 bg-red-500/10 text-red-200',
  warning: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-200',
  info: 'border-blue-500/30 bg-blue-500/10 text-blue-200',
} as const;

/**
 * Submit button states
 */
export const submitButtonStates = {
  idle: {
    text: 'Submit',
    className: 'btn-primary',
    disabled: false,
  },
  submitting: {
    text: 'Submitting...',
    className: 'btn-primary opacity-75 cursor-not-allowed',
    disabled: true,
  },
  success: {
    text: 'Submitted ✓',
    className: 'bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold',
    disabled: true,
  },
  error: {
    text: 'Try Again',
    className: 'btn-primary',
    disabled: false,
  },
} as const;

/**
 * Checkbox and radio styling
 */
export const checkboxStyles = {
  base: 'w-5 h-5 rounded border-2 border-blue-300/30 bg-transparent transition cursor-pointer',
  checked: 'bg-blue-500 border-blue-500',
  focus: 'focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent',
  disabled: 'opacity-50 cursor-not-allowed',
  label: 'ml-3 text-blue-100 cursor-pointer',
} as const;

/**
 * Select dropdown styling
 */
export const selectStyles = {
  base: 'w-full glass-sm rounded-lg transition outline-none appearance-none',
  text: 'text-white',
  focus: 'focus:ring-2 focus:ring-blue-400',
  disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
  icon: 'pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-blue-200',
} as const;

/**
 * Form spacing
 */
export const spacing = {
  fieldGap: 'space-y-6',
  fieldGroupGap: 'space-y-4',
  inlineGap: 'gap-4',
} as const;

/**
 * Animation durations (from design tokens)
 */
export const animations = {
  transition: tokens.animation.duration.normal / 1000, // Convert to seconds
  fast: tokens.animation.duration.fast / 1000,
} as const;

/**
 * Complete form configuration
 */
export const formConfig = {
  fieldSizes,
  fieldStyles,
  labelStyles,
  errorStyles,
  helperStyles,
  messageStyles,
  submitButtonStates,
  checkboxStyles,
  selectStyles,
  spacing,
  animations,
} as const;

/**
 * Type definitions
 */
export type FieldSize = keyof typeof fieldSizes;
export type MessageType = 'success' | 'error' | 'warning' | 'info';
export type SubmitState = keyof typeof submitButtonStates;
export type FormConfig = typeof formConfig;

export default formConfig;
