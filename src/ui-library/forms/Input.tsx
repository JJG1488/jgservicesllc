'use client'

import { forwardRef, InputHTMLAttributes } from 'react';
import { fieldStyles, fieldSizes, type FieldSize } from './form.config';

/**
 * Props for the Input component
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Input size variant
   * @default 'md'
   */
  size?: FieldSize;

  /**
   * Error state styling
   * @default false
   */
  error?: boolean;

  /**
   * Success state styling
   * @default false
   */
  success?: boolean;

  /**
   * Full width
   * @default true
   */
  fullWidth?: boolean;
}

/**
 * Input - Styled form input field
 *
 * A flexible, accessible input field component with multiple size variants,
 * state styling (error/success), and full design system integration.
 *
 * @component
 * @example
 * ```tsx
 * // Basic input
 * <Input
 *   type="text"
 *   placeholder="Enter your name"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // With React Hook Form
 * const { register } = useForm();
 *
 * <Input
 *   {...register('email')}
 *   type="email"
 *   placeholder="your@email.com"
 *   error={!!errors.email}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Different sizes
 * <Input size="sm" placeholder="Small" />
 * <Input size="md" placeholder="Medium" />
 * <Input size="lg" placeholder="Large" />
 * ```
 *
 * @example
 * ```tsx
 * // With states
 * <Input error placeholder="Has error" />
 * <Input success placeholder="Success!" />
 * <Input disabled placeholder="Disabled" />
 * ```
 *
 * @param props - Component props
 * @returns Input field element
 *
 * @see {@link InputProps} for all available props
 * @see {@link fieldSizes} for size configurations
 *
 * @remarks
 * - Uses forwardRef for React Hook Form compatibility
 * - Automatically applies glass morphism styling
 * - Supports all native input attributes
 * - Focus ring for accessibility
 *
 * @packageDocumentation
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      error = false,
      success = false,
      fullWidth = true,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeConfig = fieldSizes[size];

    const classes = `
      ${fieldStyles.base}
      ${fieldStyles.text}
      ${fieldStyles.focus}
      ${disabled ? fieldStyles.disabled : ''}
      ${error ? fieldStyles.error : ''}
      ${success ? fieldStyles.success : ''}
      ${sizeConfig.padding}
      ${sizeConfig.fontSize}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <input
        ref={ref}
        disabled={disabled}
        className={classes}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
