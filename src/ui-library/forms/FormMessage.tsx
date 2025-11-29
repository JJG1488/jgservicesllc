'use client'

import { ReactNode } from 'react';
import { messageStyles, type MessageType } from './form.config';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Props for the FormMessage component
 */
export interface FormMessageProps {
  /**
   * Message type (determines styling)
   * @default 'info'
   */
  type?: MessageType;

  /** Message content */
  children: ReactNode;

  /**
   * Show the message
   * @default true
   */
  show?: boolean;

  /**
   * Dismiss callback
   */
  onDismiss?: () => void;

  /** Additional CSS classes */
  className?: string;
}

/**
 * Icons for each message type
 */
const messageIcons: Record<MessageType, string> = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
};

/**
 * FormMessage - Alert/status message for forms
 *
 * Displays success, error, warning, or info messages with appropriate
 * styling and optional dismiss functionality. Animates in/out smoothly.
 *
 * @component
 * @example
 * ```tsx
 * // Success message
 * <FormMessage type="success">
 *   Thank you! Your message has been sent.
 * </FormMessage>
 * ```
 *
 * @example
 * ```tsx
 * // Error message
 * <FormMessage type="error">
 *   Failed to submit form. Please try again.
 * </FormMessage>
 * ```
 *
 * @example
 * ```tsx
 * // Conditional rendering
 * {submitStatus && (
 *   <FormMessage
 *     type={submitStatus.type}
 *     show={submitStatus.show}
 *   >
 *     {submitStatus.message}
 *   </FormMessage>
 * )}
 * ```
 *
 * @example
 * ```tsx
 * // With dismiss button
 * <FormMessage
 *   type="warning"
 *   onDismiss={() => setShowWarning(false)}
 * >
 *   Please review your information before submitting.
 * </FormMessage>
 * ```
 *
 * @param props - Component props
 * @returns Alert message
 *
 * @see {@link FormMessageProps} for all available props
 * @see {@link MessageType} for message type options
 *
 * @remarks
 * - Automatically animates in/out
 * - Icon changes based on message type
 * - Optional dismiss button
 * - Uses glassmorphism styling
 *
 * @packageDocumentation
 */
export default function FormMessage({
  type = 'info',
  children,
  show = true,
  onDismiss,
  className = '',
}: FormMessageProps) {
  const messageClasses = `
    ${messageStyles.base}
    ${messageStyles[type]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={messageClasses}
          role="alert"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              {/* Icon */}
              <span className="flex-shrink-0 text-lg" aria-hidden="true">
                {messageIcons[type]}
              </span>

              {/* Message Content */}
              <div className="flex-1">
                {children}
              </div>
            </div>

            {/* Dismiss Button */}
            {onDismiss && (
              <button
                onClick={onDismiss}
                className="flex-shrink-0 text-current hover:opacity-70 transition"
                aria-label="Dismiss message"
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
