import React from 'react';

interface LogoProps {
  variant?: 'icon' | 'horizontal' | 'vertical' | 'wordmark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ variant = 'horizontal', className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32, fontSize: '0.75rem' },
    md: { width: 48, height: 48, fontSize: '1rem' },
    lg: { width: 64, height: 64, fontSize: '1.25rem' },
    xl: { width: 96, height: 96, fontSize: '1.5rem' }
  };

  const currentSize = sizes[size];

  // Icon Only - Minimalist JG Monogram
  if (variant === 'icon') {
    return (
      <svg
        width={currentSize.width}
        height={currentSize.height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />

        {/* J Letter */}
        <path
          d="M 35 25 L 45 25 L 45 55 Q 45 65 35 65 Q 25 65 25 55 L 32 55 Q 32 58 35 58 Q 38 58 38 55 L 38 32 L 35 32 Z"
          fill="white"
          strokeWidth="0"
        />

        {/* G Letter */}
        <path
          d="M 65 32 Q 55 32 55 42 L 55 58 Q 55 68 65 68 Q 75 68 75 58 L 75 50 L 65 50 L 65 57 L 68 57 L 68 58 Q 68 61 65 61 Q 62 61 62 58 L 62 42 Q 62 39 65 39 Q 68 39 68 42 L 75 42 Q 75 32 65 32 Z"
          fill="white"
          strokeWidth="0"
        />
      </svg>
    );
  }

  // Horizontal Logo - Icon + Wordmark side by side
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <svg
          width={currentSize.width}
          height={currentSize.height}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>

          <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />

          <path
            d="M 35 25 L 45 25 L 45 55 Q 45 65 35 65 Q 25 65 25 55 L 32 55 Q 32 58 35 58 Q 38 58 38 55 L 38 32 L 35 32 Z"
            fill="white"
          />

          <path
            d="M 65 32 Q 55 32 55 42 L 55 58 Q 55 68 65 68 Q 75 68 75 58 L 75 50 L 65 50 L 65 57 L 68 57 L 68 58 Q 68 61 65 61 Q 62 61 62 58 L 62 42 Q 62 39 65 39 Q 68 39 68 42 L 75 42 Q 75 32 65 32 Z"
            fill="white"
          />
        </svg>

        <div className="flex flex-col">
          <span className="font-bold text-gray-900 dark:text-white leading-none" style={{ fontSize: currentSize.fontSize }}>
            JG SERVICES
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wider">
            WEB DEVELOPMENT
          </span>
        </div>
      </div>
    );
  }

  // Vertical Logo - Icon on top, wordmark below
  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <svg
          width={currentSize.width}
          height={currentSize.height}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>

          <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />

          <path
            d="M 35 25 L 45 25 L 45 55 Q 45 65 35 65 Q 25 65 25 55 L 32 55 Q 32 58 35 58 Q 38 58 38 55 L 38 32 L 35 32 Z"
            fill="white"
          />

          <path
            d="M 65 32 Q 55 32 55 42 L 55 58 Q 55 68 65 68 Q 75 68 75 58 L 75 50 L 65 50 L 65 57 L 68 57 L 68 58 Q 68 61 65 61 Q 62 61 62 58 L 62 42 Q 62 39 65 39 Q 68 39 68 42 L 75 42 Q 75 32 65 32 Z"
            fill="white"
          />
        </svg>

        <div className="flex flex-col items-center">
          <span className="font-bold text-gray-900 dark:text-white leading-none" style={{ fontSize: currentSize.fontSize }}>
            JG SERVICES
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wider">
            WEB DEVELOPMENT
          </span>
        </div>
      </div>
    );
  }

  // Wordmark Only - Text with gradient
  if (variant === 'wordmark') {
    return (
      <div className={`${className}`}>
        <h1 className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-none" style={{ fontSize: `calc(${currentSize.fontSize} * 1.5)` }}>
          JG SERVICES
        </h1>
        <p className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wider mt-1">
          WEB DEVELOPMENT
        </p>
      </div>
    );
  }

  return null;
}

// Alternative Logo Variations

// Code Brackets Logo
export function CodeLogo({ className = '', size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Left Bracket */}
      <path
        d="M 35 20 L 20 20 L 20 80 L 35 80 L 35 72 L 28 72 L 28 28 L 35 28 Z"
        fill="url(#codeGradient)"
      />

      {/* JG Text */}
      <text
        x="50"
        y="60"
        fontSize="32"
        fontWeight="bold"
        textAnchor="middle"
        fill="url(#codeGradient)"
        fontFamily="monospace"
      >
        JG
      </text>

      {/* Right Bracket */}
      <path
        d="M 65 20 L 80 20 L 80 80 L 65 80 L 65 72 L 72 72 L 72 28 L 65 28 Z"
        fill="url(#codeGradient)"
      />
    </svg>
  );
}

// Shield Logo
export function ShieldLogo({ className = '', size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Shield Shape */}
      <path
        d="M 50 10 L 85 25 L 85 50 Q 85 75 50 90 Q 15 75 15 50 L 15 25 Z"
        fill="url(#shieldGradient)"
      />

      {/* JG Letters */}
      <text
        x="50"
        y="60"
        fontSize="36"
        fontWeight="bold"
        textAnchor="middle"
        fill="white"
        fontFamily="sans-serif"
      >
        JG
      </text>
    </svg>
  );
}

// Hexagon Tech Logo
export function HexLogo({ className = '', size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Hexagon */}
      <path
        d="M 50 5 L 90 27.5 L 90 72.5 L 50 95 L 10 72.5 L 10 27.5 Z"
        fill="url(#hexGradient)"
      />

      {/* JG Letters */}
      <text
        x="50"
        y="62"
        fontSize="38"
        fontWeight="bold"
        textAnchor="middle"
        fill="white"
        fontFamily="sans-serif"
      >
        JG
      </text>
    </svg>
  );
}

// Minimal Line Logo
export function LineLogo({ className = '', size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* J */}
      <path
        d="M 25 20 L 25 60 Q 25 75 35 75 Q 45 75 45 60"
        stroke="url(#lineGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* G */}
      <path
        d="M 75 35 Q 75 25 65 25 Q 55 25 55 35 L 55 65 Q 55 75 65 75 Q 75 75 75 65 L 75 50 L 65 50"
        stroke="url(#lineGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
