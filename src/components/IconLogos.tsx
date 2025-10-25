import React from 'react';

interface IconLogoProps {
  className?: string;
  size?: number;
}

// 1. Orbiting Nodes - Represents connectivity & digital networks
export function OrbitLogo({ className = '', size = 64 }: IconLogoProps) {
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
        <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Central node */}
      <circle cx="50" cy="50" r="8" fill="url(#orbitGrad)" />

      {/* Orbiting nodes */}
      <circle cx="50" cy="20" r="6" fill="url(#orbitGrad)" />
      <circle cx="80" cy="50" r="6" fill="url(#orbitGrad)" />
      <circle cx="50" cy="80" r="6" fill="url(#orbitGrad)" />
      <circle cx="20" cy="50" r="6" fill="url(#orbitGrad)" />

      {/* Connection lines */}
      <path d="M 50 28 L 50 42" stroke="url(#orbitGrad)" strokeWidth="2" />
      <path d="M 72 50 L 58 50" stroke="url(#orbitGrad)" strokeWidth="2" />
      <path d="M 50 72 L 50 58" stroke="url(#orbitGrad)" strokeWidth="2" />
      <path d="M 28 50 L 42 50" stroke="url(#orbitGrad)" strokeWidth="2" />

      {/* Outer ring */}
      <circle cx="50" cy="50" r="45" stroke="url(#orbitGrad)" strokeWidth="2" fill="none" opacity="0.3" />
    </svg>
  );
}

// 2. Code Window - Browser/terminal window with code symbols
export function WindowLogo({ className = '', size = 64 }: IconLogoProps) {
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
        <linearGradient id="windowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Window frame */}
      <rect x="10" y="15" width="80" height="70" rx="6" fill="url(#windowGrad)" />

      {/* Window controls */}
      <circle cx="20" cy="25" r="3" fill="white" opacity="0.8" />
      <circle cx="30" cy="25" r="3" fill="white" opacity="0.8" />
      <circle cx="40" cy="25" r="3" fill="white" opacity="0.8" />

      {/* Code lines */}
      <rect x="18" y="40" width="25" height="3" rx="1.5" fill="white" opacity="0.9" />
      <rect x="18" y="50" width="35" height="3" rx="1.5" fill="white" opacity="0.7" />
      <rect x="25" y="60" width="30" height="3" rx="1.5" fill="white" opacity="0.7" />
      <rect x="25" y="70" width="20" height="3" rx="1.5" fill="white" opacity="0.9" />

      {/* Forward slash accent */}
      <path d="M 65 45 L 75 75" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

// 3. Lightning Bolt - Speed, power, innovation
export function BoltLogo({ className = '', size = 64 }: IconLogoProps) {
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
        <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Lightning bolt */}
      <path
        d="M 55 10 L 30 50 L 45 50 L 40 90 L 70 45 L 55 45 Z"
        fill="url(#boltGrad)"
      />

      {/* Circular frame */}
      <circle cx="50" cy="50" r="45" stroke="url(#boltGrad)" strokeWidth="3" fill="none" opacity="0.3" />
    </svg>
  );
}

// 4. Cube 3D - Modern, tech, building/construction
export function CubeLogo({ className = '', size = 64 }: IconLogoProps) {
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
        <linearGradient id="cubeGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="cubeGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      {/* Top face */}
      <path d="M 50 20 L 80 35 L 50 50 L 20 35 Z" fill="url(#cubeGrad1)" />

      {/* Left face */}
      <path d="M 20 35 L 20 65 L 50 80 L 50 50 Z" fill="url(#cubeGrad2)" opacity="0.7" />

      {/* Right face */}
      <path d="M 80 35 L 80 65 L 50 80 L 50 50 Z" fill="url(#cubeGrad1)" opacity="0.8" />
    </svg>
  );
}

// 5. Infinity Loop - Continuous service, reliability
export function InfinityLogo({ className = '', size = 64 }: IconLogoProps) {
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
        <linearGradient id="infinityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      <path
        d="M 25 50 Q 25 30 40 30 Q 50 30 50 40 Q 50 50 50 50 Q 50 50 50 60 Q 50 70 60 70 Q 75 70 75 50 Q 75 30 60 30 Q 50 30 50 40"
        stroke="url(#infinityGrad)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 50 60 Q 50 70 40 70 Q 25 70 25 50"
        stroke="url(#infinityGrad)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// 6. Rocket - Growth, launch, innovation
export function RocketLogo({ className = '', size = 64 }: IconLogoProps) {
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
        <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Rocket body */}
      <path d="M 50 10 L 60 30 L 60 60 L 50 70 L 40 60 L 40 30 Z" fill="url(#rocketGrad)" />

      {/* Window */}
      <circle cx="50" cy="35" r="6" fill="white" opacity="0.9" />

      {/* Left fin */}
      <path d="M 40 45 L 25 55 L 40 60 Z" fill="url(#rocketGrad)" opacity="0.8" />

      {/* Right fin */}
      <path d="M 60 45 L 75 55 L 60 60 Z" fill="url(#rocketGrad)" opacity="0.8" />

      {/* Flames */}
      <path d="M 45 70 L 42 85 L 45 78 L 48 85 Z" fill="#fbbf24" />
      <path d="M 55 70 L 52 85 L 55 78 L 58 85 Z" fill="#fbbf24" />
      <path d="M 50 70 L 47 88 L 50 80 L 53 88 Z" fill="#f59e0b" />
    </svg>
  );
}

// 7. Mountain Peak - Achievement, reaching heights
export function PeakLogo({ className = '', size = 64 }: IconLogoProps) {
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
        <linearGradient id="peakGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Mountains */}
      <path d="M 10 80 L 35 35 L 50 55 L 50 80 Z" fill="url(#peakGrad)" opacity="0.6" />
      <path d="M 30 80 L 50 30 L 70 80 Z" fill="url(#peakGrad)" />
      <path d="M 50 80 L 70 50 L 90 80 Z" fill="url(#peakGrad)" opacity="0.7" />

      {/* Base line */}
      <line x1="10" y1="80" x2="90" y2="80" stroke="url(#peakGrad)" strokeWidth="2" />
    </svg>
  );
}

// 8. Layered Stack - Technology stack, layers, depth
export function StackLogo({ className = '', size = 64 }: IconLogoProps) {
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
        <linearGradient id="stackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Bottom layer */}
      <path d="M 50 70 L 20 55 L 50 40 L 80 55 Z" fill="url(#stackGrad)" opacity="0.5" />

      {/* Middle layer */}
      <path d="M 50 55 L 25 42 L 50 29 L 75 42 Z" fill="url(#stackGrad)" opacity="0.7" />

      {/* Top layer */}
      <path d="M 50 40 L 30 30 L 50 20 L 70 30 Z" fill="url(#stackGrad)" />
    </svg>
  );
}

// 9. Signal Waves - Broadcasting, communication, connectivity
export function SignalLogo({ className = '', size = 64 }: IconLogoProps) {
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
        <linearGradient id="signalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Center dot */}
      <circle cx="50" cy="50" r="6" fill="url(#signalGrad)" />

      {/* Inner wave */}
      <path d="M 35 35 Q 35 50 35 65" stroke="url(#signalGrad)" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M 65 35 Q 65 50 65 65" stroke="url(#signalGrad)" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Middle wave */}
      <path d="M 25 25 Q 25 50 25 75" stroke="url(#signalGrad)" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M 75 25 Q 75 50 75 75" stroke="url(#signalGrad)" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Outer wave */}
      <path d="M 15 15 Q 15 50 15 85" stroke="url(#signalGrad)" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.4" />
      <path d="M 85 15 Q 85 50 85 85" stroke="url(#signalGrad)" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  );
}

// 10. Compass - Direction, guidance, navigation
export function CompassLogo({ className = '', size = 64 }: IconLogoProps) {
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
        <linearGradient id="compassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Outer circle */}
      <circle cx="50" cy="50" r="40" stroke="url(#compassGrad)" strokeWidth="3" fill="none" />

      {/* Compass needle (north) */}
      <path d="M 50 20 L 45 50 L 50 45 L 55 50 Z" fill="url(#compassGrad)" />

      {/* Compass needle (south) */}
      <path d="M 50 80 L 55 50 L 50 55 L 45 50 Z" fill="url(#compassGrad)" opacity="0.5" />

      {/* Center dot */}
      <circle cx="50" cy="50" r="4" fill="url(#compassGrad)" />

      {/* Direction markers */}
      <circle cx="50" cy="15" r="2" fill="url(#compassGrad)" />
      <circle cx="85" cy="50" r="2" fill="url(#compassGrad)" opacity="0.5" />
      <circle cx="50" cy="85" r="2" fill="url(#compassGrad)" opacity="0.5" />
      <circle cx="15" cy="50" r="2" fill="url(#compassGrad)" opacity="0.5" />
    </svg>
  );
}

// Export all as a collection
export const iconLogos = {
  orbit: OrbitLogo,
  window: WindowLogo,
  bolt: BoltLogo,
  cube: CubeLogo,
  infinity: InfinityLogo,
  rocket: RocketLogo,
  peak: PeakLogo,
  stack: StackLogo,
  signal: SignalLogo,
  compass: CompassLogo,
};
