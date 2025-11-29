/**
 * Design Token Configuration
 *
 * This file contains all design tokens used throughout the application.
 * To customize for a new project:
 * 1. Copy this entire design-system folder to your new project
 * 2. Modify the values in this file
 * 3. Run: pnpm build to regenerate CSS
 *
 * @example
 * // Default jewel-tone dark theme (current)
 * export const tokens = { ... }
 *
 * // To create a new theme:
 * // 1. Duplicate this file as tokens.mynewtheme.config.ts
 * // 2. Update import in /src/design-system/index.ts
 */

export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export interface GlassConfig {
  background: string;
  blur: string;
  border: string;
  shadow: string;
}

export interface DesignTokens {
  colors: {
    primary: ColorScale;
    secondary: ColorScale;
    accent: ColorScale;
    neutral: ColorScale;
    emerald: ColorScale;
    sapphire: ColorScale;
    ruby: ColorScale;
    amethyst: ColorScale;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
  };
  typography: {
    fontFamily: {
      playfair: string;
      ephesis: string;
      sans: string;
      mono: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
      '7xl': string;
    };
    fontWeight: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    lineHeight: {
      tight: string;
      normal: string;
      relaxed: string;
    };
  };
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    DEFAULT: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    glow: string;
  };
  animation: {
    easing: {
      default: number[];
      smooth: number[];
      bounce: number[];
      ease: number[];
    };
    duration: {
      fast: number;
      normal: number;
      slow: number;
    };
  };
  glass: {
    sm: GlassConfig;
    md: GlassConfig;
    lg: GlassConfig;
    card: GlassConfig;
  };
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    elevated: string;
  };
}

/**
 * Current theme: Jewel-tone dark theme (Sapphire & Amethyst)
 *
 * This theme features deep blues (sapphire) and purples (amethyst)
 * with glassmorphism effects for a modern, premium feel.
 */
export const tokens: DesignTokens = {
  colors: {
    // Primary = Sapphire Blue (main brand color)
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb', // Primary brand color
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#0c1838',
    },

    // Secondary = Amethyst Purple (accent color)
    secondary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea', // Secondary brand color
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764',
    },

    // Accent = Emerald Green
    accent: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
      950: '#022c22',
    },

    // Neutral = Grays
    neutral: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#0a0e17',
    },

    // Extended color palettes
    emerald: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
      950: '#022c22',
    },

    sapphire: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1e40af',
      800: '#1e3a8a',
      900: '#172554',
      950: '#0c1838',
    },

    ruby: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },

    amethyst: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764',
    },
  },

  spacing: {
    xs: '0.5rem',    // 8px
    sm: '0.75rem',   // 12px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '5rem',   // 80px
    '5xl': '6rem',   // 96px
  },

  typography: {
    fontFamily: {
      playfair: '"Playfair Display", serif',
      ephesis: '"Ephesis", cursive',
      sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, "Cascadia Code", "Courier New", monospace',
    },
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },

  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    md: '0.375rem',   // 6px
    DEFAULT: '0.5rem', // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    '3xl': '2rem',    // 32px
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glow: '0 0 20px rgba(147, 51, 234, 0.3)',
  },

  animation: {
    easing: {
      default: [0.25, 0.4, 0.25, 1],
      smooth: [0.25, 0.4, 0.25, 1],
      bounce: [0.34, 1.56, 0.64, 1],
      ease: [0.43, 0.13, 0.23, 0.96],
    },
    duration: {
      fast: 200,
      normal: 300,
      slow: 500,
    },
  },

  glass: {
    sm: {
      background: 'rgba(37, 99, 235, 0.05)',
      blur: '8px',
      border: 'rgba(147, 51, 234, 0.1)',
      shadow: '0 4px 16px 0 rgba(30, 58, 138, 0.15), 0 0 12px rgba(147, 51, 234, 0.08)',
    },
    md: {
      background: 'rgba(37, 99, 235, 0.08)',
      blur: '10px',
      border: 'rgba(147, 51, 234, 0.15)',
      shadow: '0 8px 32px 0 rgba(30, 58, 138, 0.2), 0 0 20px rgba(147, 51, 234, 0.1)',
    },
    lg: {
      background: 'rgba(37, 99, 235, 0.12)',
      blur: '16px',
      border: 'rgba(147, 51, 234, 0.22)',
      shadow: '0 12px 48px 0 rgba(30, 58, 138, 0.3), 0 0 32px rgba(147, 51, 234, 0.15)',
    },
    card: {
      background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.3) 0%, rgba(147, 51, 234, 0.3) 50%, rgba(37, 99, 235, 0.3) 100%)',
      blur: '10px',
      border: 'rgba(147, 51, 234, 0.15)',
      shadow: '0 8px 32px 0 rgba(30, 58, 138, 0.2), 0 0 20px rgba(147, 51, 234, 0.1)',
    },
  },

  background: {
    primary: '#0a0e17',
    secondary: '#111827',
    tertiary: '#1f2937',
    elevated: '#242d3d',
  },
};

export default tokens;
