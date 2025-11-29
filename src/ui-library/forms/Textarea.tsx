'use client'

import { forwardRef, TextareaHTMLAttributes } from 'react';
import { fieldStyles, fieldSizes, type FieldSize } from './form.config';

/**
 * Props for the Textarea component
 */
export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /**
   * Textarea size variant
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
   * Allow resize
   * @default false
   */
  resize?: boolean;

  /**
   * Full width
   * @default true
   */
  fullWidth?: boolean;
}

/**
 * Textarea - Styled multiline text input
 *
 * A flexible textarea component with size variants, state styling,
 * and design system integration. Perfect for longer form inputs.
 *
 * @component
 * @example
 * ```tsx
 * // Basic textarea
 * <Textarea
 *   rows={5}
 *   placeholder="Enter your message..."
 * />
 * ```
 *
 * @example
 * ```tsx
 * // With React Hook Form
 * const { register } = useForm();
 *
 * <Textarea
 *   {...register('message')}
 *   rows={8}
 *   placeholder="Tell us about your project"
 *   error={!!errors.message}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Resizable textarea
 * <Textarea
 *   rows={4}
 *   resize
 *   placeholder="This can be resized"
 * />
 * ```
 *
 * @param props - Component props
 * @returns Textarea element
 *
 * @see {@link TextareaProps} for all available props
 *
 * @remarks
 * - Uses forwardRef for React Hook Form compatibility
 * - Resize disabled by default for consistent layout
 * - Supports all native textarea attributes
 *
 * @packageDocumentation
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      size = 'md',
      error = false,
      success = false,
      resize = false,
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
      ${resize ? 'resize' : 'resize-none'}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <textarea
        ref={ref}
        disabled={disabled}
        className={classes}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
