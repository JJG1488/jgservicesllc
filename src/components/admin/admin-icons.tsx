import type { ReactNode } from "react";

/* Admin-only stroke icons ported from the prototype's admin.js icon map
   (dashboard grid, inquiry bubble, project folder, settings gear, back
   chevron, dollar). Shared glyphs (check, bolt, arrow) come from
   @/components/ui/icons — these are local to the admin track only. */

const PATHS = {
  dash: (
    <>
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </>
  ),
  inquiry: <path d="M4 4h16v12H8l-4 4z" />,
  folder: <path d="M3 7h6l2 2h10v9a2 2 0 0 1-2 2H3z" />,
  settings: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 13a7.6 7.6 0 0 0 0-2l2-1.5-2-3.4-2.3 1a7 7 0 0 0-1.7-1l-.3-2.6h-4l-.3 2.6a7 7 0 0 0-1.7 1l-2.3-1-2 3.4 2 1.5a7.6 7.6 0 0 0 0 2l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 1.7 1l.3 2.6h4l.3-2.6a7 7 0 0 0 1.7-1l2.3 1 2-3.4z" />
    </>
  ),
  back: <path d="M15 6l-6 6 6 6" />,
  dollar: (
    <>
      <path d="M12 2v20" />
      <path d="M17 6.5C17 4.6 14.8 3.5 12 3.5S7 4.8 7 6.8 9 9.8 12 10.3s5 1.4 5 3.4-2.2 3.3-5 3.3-5-1.1-5-3" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type AdminIconName = keyof typeof PATHS;

interface AdminIconProps {
  name: AdminIconName;
  size?: number;
  sw?: number;
  className?: string;
}

export function AdminIcon({ name, size = 18, sw = 1.8, className = "" }: AdminIconProps) {
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
      {PATHS[name]}
    </svg>
  );
}
