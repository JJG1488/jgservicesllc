import type { ReactNode } from "react";

/* Sapphire Atelier stroke icon set (currentColor), ported from the design
   handoff's components.jsx. Brand-safe inline SVG — no emoji, no icon-font. */

const PATHS: Record<string, ReactNode> = {
  code: (
    <>
      <path d="M8 6 2 12l6 6" />
      <path d="m16 6 6 6-6 6" />
    </>
  ),
  phone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M11 18h2" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2 3h2.5l2.2 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.5L21.5 7H6" />
    </>
  ),
  gauge: (
    <>
      <path d="M12 14 16 9" />
      <path d="M3.5 18a9 9 0 1 1 17 0" />
      <circle cx="12" cy="14" r="1.4" />
    </>
  ),
  plug: (
    <>
      <path d="M9 2v6M15 2v6" />
      <path d="M6 8h12v3a6 6 0 0 1-12 0z" />
      <path d="M12 17v5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4.4 3 7.8 7 9 4-1.2 7-4.6 7-9V6z" />
      <path d="m9.2 12 1.9 1.9 3.7-3.8" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  tag: (
    <>
      <path d="M3 7v5.6a2 2 0 0 0 .6 1.4l7 7a2 2 0 0 0 2.8 0l5.6-5.6a2 2 0 0 0 0-2.8l-7-7A2 2 0 0 0 12.6 5H7a4 4 0 0 0-4 4z" />
      <circle cx="8" cy="10" r="1.2" />
    </>
  ),
  chat: <path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12z" />,
  sparkle: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  hands: (
    <>
      <path d="M7 11V6a2 2 0 0 1 4 0v5" />
      <path d="M11 11V4.5a2 2 0 0 1 4 0V11" />
      <path d="M15 11V6.5a2 2 0 0 1 4 0V14a7 7 0 0 1-7 7H9.5a4 4 0 0 1-2.8-1.2L3 16" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2a2.8 2.8 0 0 0-3-3z" />
      <path d="M9 12a14 14 0 0 1 8-9c2 0 4 2 4 4a14 14 0 0 1-9 8z" />
      <circle cx="15" cy="9" r="1.4" />
    </>
  ),
  star: <path d="m12 3 2.5 5.6 6.1.6-4.6 4 1.4 6L12 16.9 6.6 19.2l1.4-6L3.4 9.2l6.1-.6z" />,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
  github: (
    <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5a4 4 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7a4 4 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 11v6" />
    </>
  ),
  ext: (
    <>
      <path d="M9 5h10v10" />
      <path d="M19 5 8 16" />
      <path d="M14 19H5V10" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3 2.5 19.5a1 1 0 0 0 .9 1.5h17.2a1 1 0 0 0 .9-1.5z" />
      <path d="M12 9v5" />
      <path d="M12 17.5h.01" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="12" height="12" rx="2.5" />
      <path d="M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5" />
    </>
  ),
};

export type IconName = keyof typeof PATHS;

interface IconProps {
  name: IconName | string;
  size?: number;
  sw?: number;
  className?: string;
}

export function Icon({ name, size = 22, sw = 1.8, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name] ?? null}
    </svg>
  );
}
