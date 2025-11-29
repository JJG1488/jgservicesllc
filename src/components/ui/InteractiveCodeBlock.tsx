/**
 * InteractiveCodeBlock - Backward Compatibility Re-export
 *
 * This file maintains backward compatibility by re-exporting the refactored
 * InteractiveCodeBlock component from its new location in the UI library.
 *
 * @deprecated Import from '@/ui-library/primitives/InteractiveCodeBlock/InteractiveCodeBlock' instead
 * @see /src/ui-library/primitives/InteractiveCodeBlock/ for the new modular implementation
 */

export { default, type InteractiveCodeBlockProps } from '@/ui-library/primitives/InteractiveCodeBlock/InteractiveCodeBlock';
export {
  codeThemes,
  languageBadgeColors,
  interactiveCodeBlockDefaults,
  type CodeTheme,
  type LanguageType,
  type InteractiveCodeBlockConfig,
} from '@/ui-library/primitives/InteractiveCodeBlock/InteractiveCodeBlock.data';
