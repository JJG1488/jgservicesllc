/**
 * InteractiveCodeBlock Default Configuration
 *
 * This file contains default configuration values for the InteractiveCodeBlock component.
 * These values control styling, animations, and interaction behavior.
 *
 * @see tokens.config.ts for design system tokens
 */

/**
 * Color themes for code blocks
 */
export const codeThemes = {
  /** Dark theme (default) - macOS terminal style */
  dark: {
    background: 'bg-gray-900',
    headerBg: 'bg-gray-800',
    border: 'border-gray-700',
    text: 'text-gray-300',
    textMuted: 'text-gray-400',
    hover: 'hover:bg-gray-700',
  },

  /** Glass theme - matches design system */
  glass: {
    background: 'glass-md',
    headerBg: 'glass-sm',
    border: 'border-blue-300/20',
    text: 'text-blue-100',
    textMuted: 'text-blue-200',
    hover: 'hover:bg-white/10',
  },

  /** Light theme */
  light: {
    background: 'bg-gray-50',
    headerBg: 'bg-gray-100',
    border: 'border-gray-300',
    text: 'text-gray-900',
    textMuted: 'text-gray-600',
    hover: 'hover:bg-gray-200',
  },
} as const;

/**
 * Language badge colors
 */
export const languageBadgeColors = {
  javascript: 'bg-yellow-600',
  typescript: 'bg-blue-600',
  tsx: 'bg-blue-600',
  jsx: 'bg-cyan-600',
  python: 'bg-blue-500',
  rust: 'bg-orange-600',
  go: 'bg-cyan-500',
  java: 'bg-red-600',
  css: 'bg-purple-600',
  html: 'bg-orange-500',
  json: 'bg-green-600',
  yaml: 'bg-pink-600',
  bash: 'bg-gray-600',
  default: 'bg-blue-600',
} as const;

/**
 * Animation configuration
 */
export const animationConfig = {
  /** Expand/collapse duration (seconds) */
  expandDuration: 0.3,

  /** Hover lift amount (pixels) */
  hoverLift: -4,

  /** Button scale on hover */
  buttonHoverScale: 1.05,

  /** Button scale on tap */
  buttonTapScale: 0.95,

  /** Copy feedback duration (ms) */
  copyFeedbackDuration: 2000,
} as const;

/**
 * macOS window button colors
 */
export const windowButtons = {
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  green: 'bg-green-500',
} as const;

/**
 * Complete default configuration object
 */
export const interactiveCodeBlockDefaults = {
  theme: 'dark' as keyof typeof codeThemes,
  language: 'text',
  initiallyExpanded: false,
  showLineNumbers: false,
  showWindowButtons: true,
  animation: animationConfig,
} as const;

/**
 * Type definitions for configuration
 */
export type CodeTheme = keyof typeof codeThemes;
export type LanguageType = keyof typeof languageBadgeColors | string;
export type InteractiveCodeBlockConfig = typeof interactiveCodeBlockDefaults;
