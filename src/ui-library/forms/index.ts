/**
 * Form Library - Entry Point
 *
 * Centralized export point for all form components and utilities.
 * Built with React Hook Form compatibility and design system integration.
 *
 * @example
 * ```typescript
 * // Import form components
 * import { Input, Textarea, FormField, SubmitButton } from '@/ui-library/forms';
 *
 * // Import form configuration
 * import { fieldSizes, messageStyles } from '@/ui-library/forms';
 * ```
 */

// ===== Form Components =====

/**
 * Input - Styled text input field
 */
export { default as Input, type InputProps } from './Input';

/**
 * Textarea - Styled multiline text input
 */
export { default as Textarea, type TextareaProps } from './Textarea';

/**
 * Select - Styled dropdown select
 */
export { default as Select, type SelectProps } from './Select';

/**
 * Checkbox - Styled checkbox input
 */
export { default as Checkbox, type CheckboxProps } from './Checkbox';

/**
 * FormField - Complete field with label, input, error, and helper text
 */
export { default as FormField, type FormFieldProps } from './FormField';

/**
 * FormMessage - Alert/status message for forms
 */
export { default as FormMessage, type FormMessageProps } from './FormMessage';

/**
 * SubmitButton - Smart submit button with states
 */
export { default as SubmitButton, type SubmitButtonProps } from './SubmitButton';

// ===== Form Configuration =====

/**
 * Form system configuration
 * Includes field sizes, styles, message types, and more
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
  spacing,
  animations,
  formConfig,
  type FieldSize,
  type MessageType,
  type SubmitState,
  type FormConfig,
} from './form.config';

/**
 * Default export: Form configuration
 */
export { default } from './form.config';
