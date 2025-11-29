'use client'

import { ReactNode } from 'react';
import { labelStyles, errorStyles, helperStyles } from './form.config';

/**
 * Props for the FormField component
 */
export interface FormFieldProps {
  /** Unique ID for the field (links label to input) */
  id: string;

  /** Label text */
  label: string;

  /** Form field element (Input, Textarea, Select, etc.) */
  children: ReactNode;

  /** Error message to display */
  error?: string;

  /** Helper text to display */
  helperText?: string;

  /**
   * Mark field as required
   * @default false
   */
  required?: boolean;

  /**
   * Mark field as optional
   * @default false
   */
  optional?: boolean;

  /**
   * Disable the entire field
   * @default false
   */
  disabled?: boolean;

  /** Additional CSS classes for container */
  className?: string;
}

/**
 * FormField - Complete form field with label, input, error, and helper text
 *
 * A wrapper component that combines a label, form input, error message,
 * and helper text into a single cohesive unit. Simplifies form building
 * and ensures consistent styling.
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <FormField
 *   id="email"
 *   label="Email Address"
 *   required
 * >
 *   <Input type="email" id="email" />
 * </FormField>
 * ```
 *
 * @example
 * ```tsx
 * // With error and helper text
 * <FormField
 *   id="password"
 *   label="Password"
 *   error={errors.password?.message}
 *   helperText="Must be at least 8 characters"
 *   required
 * >
 *   <Input type="password" id="password" />
 * </FormField>
 * ```
 *
 * @example
 * ```tsx
 * // With React Hook Form
 * const { register, formState: { errors } } = useForm();
 *
 * <FormField
 *   id="name"
 *   label="Full Name"
 *   error={errors.name?.message}
 *   required
 * >
 *   <Input {...register('name')} id="name" />
 * </FormField>
 * ```
 *
 * @example
 * ```tsx
 * // Optional field
 * <FormField
 *   id="company"
 *   label="Company"
 *   optional
 * >
 *   <Input id="company" />
 * </FormField>
 * ```
 *
 * @param props - Component props
 * @returns Complete form field
 *
 * @see {@link FormFieldProps} for all available props
 *
 * @remarks
 * - Automatically links label to input via htmlFor/id
 * - Error message replaces helper text when present
 * - Required/optional indicators added to label
 * - Fully accessible with proper ARIA attributes
 *
 * @packageDocumentation
 */
export default function FormField({
  id,
  label,
  children,
  error,
  helperText,
  required = false,
  optional = false,
  disabled = false,
  className = '',
}: FormFieldProps) {
  const labelClasses = `
    ${labelStyles.base}
    ${required ? labelStyles.required : ''}
    ${optional ? labelStyles.optional : ''}
    ${disabled ? labelStyles.disabled : ''}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={className}>
      {/* Label */}
      <label
        htmlFor={id}
        className={labelClasses}
      >
        {label}
      </label>

      {/* Form Input */}
      {children}

      {/* Error Message (takes priority over helper text) */}
      {error && (
        <p className={errorStyles.base} role="alert">
          <span aria-hidden="true">{errorStyles.icon}</span>
          <span>{error}</span>
        </p>
      )}

      {/* Helper Text (only shown if no error) */}
      {!error && helperText && (
        <p className={helperStyles.base}>
          {helperText}
        </p>
      )}
    </div>
  );
}
