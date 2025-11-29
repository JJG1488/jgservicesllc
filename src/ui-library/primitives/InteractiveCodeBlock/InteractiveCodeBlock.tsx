'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  codeThemes,
  languageBadgeColors,
  interactiveCodeBlockDefaults,
  type CodeTheme,
  type LanguageType,
} from './InteractiveCodeBlock.data';

/**
 * Props for the InteractiveCodeBlock component
 */
export interface InteractiveCodeBlockProps {
  /** Title displayed in header */
  title: string;

  /** Code content to display */
  code: string;

  /** Programming language */
  language: LanguageType;

  /** Optional description shown when expanded */
  description?: string;

  /**
   * Color theme
   * @default 'dark'
   */
  theme?: CodeTheme;

  /**
   * Start expanded
   * @default false
   */
  initiallyExpanded?: boolean;

  /**
   * Show macOS window buttons
   * @default true
   */
  showWindowButtons?: boolean;

  /**
   * Custom className for container
   */
  className?: string;

  /**
   * Disable hover animation
   * @default false
   */
  disableHover?: boolean;

  /**
   * Callback when code is copied
   */
  onCopy?: () => void;

  /**
   * Callback when expanded/collapsed
   */
  onToggle?: (isExpanded: boolean) => void;
}

/**
 * InteractiveCodeBlock - An expandable code block with copy functionality
 *
 * Creates a beautifully styled code block with macOS-style window buttons,
 * expand/collapse animation, and one-click copy to clipboard. Perfect for
 * documentation, tutorials, and showcasing code examples.
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <InteractiveCodeBlock
 *   title="hello.js"
 *   language="javascript"
 *   code={`console.log('Hello, World!');`}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // With description and initially expanded
 * <InteractiveCodeBlock
 *   title="api-endpoint.ts"
 *   language="typescript"
 *   code={`
 * export async function GET(request: Request) {
 *   return Response.json({ message: 'Success' });
 * }
 *   `.trim()}
 *   description="Next.js 15 Route Handler example"
 *   initiallyExpanded
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Glass theme to match design system
 * <InteractiveCodeBlock
 *   title="component.tsx"
 *   language="tsx"
 *   theme="glass"
 *   code={`<GlowCard>Content</GlowCard>`}
 * />
 * ```
 *
 * @param props - Component props
 * @returns Interactive code block
 *
 * @see {@link InteractiveCodeBlockProps} for all available props
 * @see {@link interactiveCodeBlockDefaults} for default configuration values
 *
 * @remarks
 * - Uses native Clipboard API for copying
 * - Smooth expand/collapse animation
 * - Syntax highlighting via className (pair with syntax highlighter)
 * - macOS-style visual design
 *
 * @packageDocumentation
 */
export default function InteractiveCodeBlock({
  title,
  code,
  language,
  description,
  theme = interactiveCodeBlockDefaults.theme,
  initiallyExpanded = interactiveCodeBlockDefaults.initiallyExpanded,
  showWindowButtons = interactiveCodeBlockDefaults.showWindowButtons,
  className = '',
  disableHover = false,
  onCopy,
  onToggle,
}: InteractiveCodeBlockProps) {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);
  const [copied, setCopied] = useState(false);

  const themeConfig = codeThemes[theme];
  const badgeColor = languageBadgeColors[language as keyof typeof languageBadgeColors] || languageBadgeColors.default;

  /**
   * Copy code to clipboard
   */
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      onCopy?.();
      setTimeout(() => {
        setCopied(false);
      }, interactiveCodeBlockDefaults.animation.copyFeedbackDuration);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  /**
   * Toggle expand/collapse
   */
  const handleToggle = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    onToggle?.(newState);
  };

  // Get first line for collapsed view
  const firstLine = code.split('\n')[0];

  return (
    <motion.div
      className={`${themeConfig.background} rounded-xl overflow-hidden shadow-2xl border ${themeConfig.border} ${className}`}
      whileHover={disableHover ? undefined : {
        y: interactiveCodeBlockDefaults.animation.hoverLift,
      }}
      transition={{
        duration: interactiveCodeBlockDefaults.animation.expandDuration,
      }}
    >
      {/* Header */}
      <div className={`flex items-center justify-between px-6 py-4 ${themeConfig.headerBg} border-b ${themeConfig.border}`}>
        <div className="flex items-center gap-3">
          {/* macOS Window Buttons */}
          {showWindowButtons && (
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          )}

          {/* File Title */}
          <span className={`${themeConfig.text} font-mono text-sm`}>
            {title}
          </span>

          {/* Language Badge */}
          <span className={`text-xs ${badgeColor} text-white px-2 py-1 rounded`}>
            {language}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {/* Expand/Collapse Button */}
          <motion.button
            onClick={handleToggle}
            className={`${themeConfig.textMuted} hover:text-white transition px-3 py-1 rounded ${themeConfig.hover}`}
            whileHover={{
              scale: interactiveCodeBlockDefaults.animation.buttonHoverScale,
            }}
            whileTap={{
              scale: interactiveCodeBlockDefaults.animation.buttonTapScale,
            }}
            aria-label={isExpanded ? 'Collapse code' : 'Expand code'}
          >
            {isExpanded ? '−' : '+'}
          </motion.button>

          {/* Copy Button */}
          <motion.button
            onClick={copyToClipboard}
            className={`${themeConfig.textMuted} hover:text-white transition px-3 py-1 rounded ${themeConfig.hover}`}
            whileHover={{
              scale: interactiveCodeBlockDefaults.animation.buttonHoverScale,
            }}
            whileTap={{
              scale: interactiveCodeBlockDefaults.animation.buttonTapScale,
            }}
            aria-label="Copy code to clipboard"
          >
            {copied ? '✓ Copied!' : '📋 Copy'}
          </motion.button>
        </div>
      </div>

      {/* Code Content - Expanded */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: interactiveCodeBlockDefaults.animation.expandDuration,
            }}
            className="overflow-hidden"
          >
            <pre className="p-6 overflow-x-auto">
              <code className={`${themeConfig.text} font-mono text-sm leading-relaxed`}>
                {code}
              </code>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Code Content - Collapsed (first line preview) */}
      {!isExpanded && (
        <div className="px-6 py-4">
          <pre className="overflow-x-auto">
            <code className={`${themeConfig.text} font-mono text-sm`}>
              {firstLine}...
            </code>
          </pre>
        </div>
      )}

      {/* Description Footer */}
      {description && isExpanded && (
        <div className={`px-6 py-4 ${themeConfig.headerBg} border-t ${themeConfig.border}`}>
          <p className={`${themeConfig.textMuted} text-sm`}>
            {description}
          </p>
        </div>
      )}
    </motion.div>
  );
}
