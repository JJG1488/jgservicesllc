'use client'

import { ButtonHTMLAttributes } from 'react';
import { submitButtonStates, type SubmitState } from './form.config';

/**
 * Props for the SubmitButton component
 */
export interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Submit state
   * @default 'idle'
   */
  state?: SubmitState;

  /**
   * Loading state (alias for state='submitting')
   * @default false
   */
  loading?: boolean;

  /**
   * Full width button
   * @default true
   */
  fullWidth?: boolean;

  /**
   * Custom text overrides
   */
  text?: {
    idle?: string;
    submitting?: string;
    success?: string;
    error?: string;
  };
}

/**
 * SubmitButton - Smart form submit button with states
 *
 * A submit button that automatically handles different states (idle, submitting,
 * success, error) with appropriate styling and text. Prevents double-submission
 * and provides visual feedback.
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <SubmitButton />
 * ```
 *
 * @example
 * ```tsx
 * // With loading state
 * const [isSubmitting, setIsSubmitting] = useState(false);
 *
 * <SubmitButton
 *   loading={isSubmitting}
 *   onClick={() => setIsSubmitting(true)}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // With all states
 * <SubmitButton
 *   state={submitState}
 *   text={{
 *     idle: 'Send Message',
 *     submitting: 'Sending...',
 *     success: 'Message Sent!',
 *     error: 'Retry',
 *   }}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Not full width
 * <SubmitButton
 *   fullWidth={false}
 *   className="px-12"
 * />
 * ```
 *
 * @param props - Component props
 * @returns Submit button
 *
 * @see {@link SubmitButtonProps} for all available props
 * @see {@link submitButtonStates} for state configurations
 *
 * @remarks
 * - Automatically disables during submission
 * - Visual feedback for all states
 * - Prevents double-submission
 * - Customizable text per state
 *
 * @packageDocumentation
 */
export default function SubmitButton({
  state = 'idle',
  loading = false,
  fullWidth = true,
  text,
  className = '',
  disabled,
  children,
  ...props
}: SubmitButtonProps) {
  // If loading prop is true, override state
  const currentState = loading ? 'submitting' : state;

  const stateConfig = submitButtonStates[currentState];

  // Use custom text if provided, otherwise use state default
  const buttonText = text?.[currentState] || stateConfig.text;

  const classes = `
    ${stateConfig.className}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      type="submit"
      disabled={disabled || stateConfig.disabled}
      className={classes}
      {...props}
    >
      {children || buttonText}
    </button>
  );
}
