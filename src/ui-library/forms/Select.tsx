'use client'

import { forwardRef, SelectHTMLAttributes } from 'react';
import { selectStyles, fieldSizes, type FieldSize } from './form.config';

/**
 * Props for the Select component
 */
export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Select size variant
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

  /**
   * Placeholder text (adds disabled option)
   */
  placeholder?: string;
}

/**
 * Select - Styled dropdown select field
 *
 * A flexible select/dropdown component with size variants, state styling,
 * and custom arrow icon. Integrates with design system.
 *
 * @component
 * @example
 * ```tsx
 * // Basic select
 * <Select>
 *   <option value="1">Option 1</option>
 *   <option value="2">Option 2</option>
 *   <option value="3">Option 3</option>
 * </Select>
 * ```
 *
 * @example
 * ```tsx
 * // With placeholder
 * <Select placeholder="Select an option">
 *   <option value="a">Option A</option>
 *   <option value="b">Option B</option>
 * </Select>
 * ```
 *
 * @example
 * ```tsx
 * // With React Hook Form
 * const { register } = useForm();
 *
 * <Select
 *   {...register('country')}
 *   placeholder="Select country"
 *   error={!!errors.country}
 * >
 *   <option value="us">United States</option>
 *   <option value="uk">United Kingdom</option>
 *   <option value="ca">Canada</option>
 * </Select>
 * ```
 *
 * @param props - Component props
 * @returns Select element
 *
 * @see {@link SelectProps} for all available props
 *
 * @remarks
 * - Uses forwardRef for React Hook Form compatibility
 * - Custom dropdown arrow icon
 * - Placeholder adds disabled first option
 * - Supports all native select attributes
 *
 * @packageDocumentation
 */
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size = 'md',
      error = false,
      success = false,
      fullWidth = true,
      placeholder,
      className = '',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const sizeConfig = fieldSizes[size];

    const classes = `
      ${selectStyles.base}
      ${selectStyles.text}
      ${selectStyles.focus}
      ${disabled ? selectStyles.disabled : ''}
      ${error ? 'ring-2 ring-red-400 focus:ring-red-400' : ''}
      ${success ? 'ring-2 ring-green-400 focus:ring-green-400' : ''}
      ${sizeConfig.padding}
      ${sizeConfig.fontSize}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <div className="relative">
        <select
          ref={ref}
          disabled={disabled}
          className={classes}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>

        {/* Custom dropdown arrow */}
        <div className={selectStyles.icon}>
          <svg
            className="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
