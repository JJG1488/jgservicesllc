'use client'

import { forwardRef, InputHTMLAttributes } from 'react';
import { checkboxStyles } from './form.config';

/**
 * Props for the Checkbox component
 */
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text */
  label?: string;

  /** Label position */
  labelPosition?: 'left' | 'right';
}

/**
 * Checkbox - Styled checkbox input
 *
 * A custom-styled checkbox with optional label. Works with React Hook Form
 * and maintains native checkbox behavior.
 *
 * @component
 * @example
 * ```tsx
 * // Basic checkbox
 * <Checkbox label="I agree to terms" />
 * ```
 *
 * @example
 * ```tsx
 * // With React Hook Form
 * const { register } = useForm();
 *
 * <Checkbox
 *   {...register('newsletter')}
 *   label="Subscribe to newsletter"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Controlled checkbox
 * const [checked, setChecked] = useState(false);
 *
 * <Checkbox
 *   checked={checked}
 *   onChange={(e) => setChecked(e.target.checked)}
 *   label="Enable notifications"
 * />
 * ```
 *
 * @param props - Component props
 * @returns Checkbox with label
 *
 * @see {@link CheckboxProps} for all available props
 *
 * @remarks
 * - Uses forwardRef for React Hook Form
 * - Custom styling via Tailwind
 * - Label is clickable
 * - Maintains native checkbox accessibility
 *
 * @packageDocumentation
 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      labelPosition = 'right',
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const checkboxClasses = `
      ${checkboxStyles.base}
      ${checkboxStyles.focus}
      ${disabled ? checkboxStyles.disabled : ''}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    const checkbox = (
      <input
        ref={ref}
        type="checkbox"
        disabled={disabled}
        className={checkboxClasses}
        {...props}
      />
    );

    if (!label) {
      return checkbox;
    }

    return (
      <label className={`flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
        {labelPosition === 'left' && (
          <span className={`mr-3 text-blue-100 ${disabled ? 'opacity-50' : ''}`}>
            {label}
          </span>
        )}

        {checkbox}

        {labelPosition === 'right' && (
          <span className={`${checkboxStyles.label} ${disabled ? 'opacity-50' : ''}`}>
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
