import type { ReactNode } from "react";
import { Icon } from "@/components/ui/icons";
import type { DemoIconName } from "./demos-data";

/* The demos prototype uses three icons (food, art, wrench) that are not
   part of the shared Sapphire Atelier icon set. Their paths are ported
   verbatim from demos.html; "cart" delegates to the shared <Icon>. */

const LOCAL_PATHS: Partial<Record<DemoIconName, ReactNode>> = {
  food: (
    <>
      <path d="M7 3v8M5 3v4a2 2 0 0 0 4 0V3" />
      <path d="M17 3c-1.6 0-3 2.5-3 5.5S15.4 13 17 13v8" />
      <path d="M7 11v10" />
    </>
  ),
  art: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-.5-1.5-.5-2.5.8-1.5 2-1.5H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z" />
      <circle cx="7.5" cy="11" r="1" />
      <circle cx="12" cy="8" r="1" />
      <circle cx="16" cy="11" r="1" />
    </>
  ),
  wrench: (
    <path d="M15 7a4 4 0 0 0-5.4 4.6l-6 6 2.8 2.8 6-6A4 4 0 0 0 17 9l-2.3 2.3-2-2L15 7z" />
  ),
};

interface DemoIconProps {
  name: DemoIconName;
}

/* 48px stroke icon centered in the gradient placeholder shot, matching
   the prototype's svg() helper (stroke 1.6, ink-100). Decorative only. */
export function DemoIcon({ name }: DemoIconProps) {
  const local = LOCAL_PATHS[name];

  if (!local) {
    return <Icon name={name} size={48} sw={1.6} className="text-ink-100" />;
  }

  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-ink-100"
      aria-hidden="true"
    >
      {local}
    </svg>
  );
}
