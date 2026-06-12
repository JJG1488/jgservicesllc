"use client";

import { useId } from "react";

/* Gradient JG monogram. The gradient reads --accent-a/--accent-b so the
   mark re-themes with the site. useId keeps gradient ids unique when the
   mark renders more than once per page (header + footer). */
export function BrandMark({ className = "brand-mark" }: { className?: string }) {
  const id = useId();
  const gradId = `jgGrad-${id}`;
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent-a)" />
          <stop offset="100%" stopColor="var(--accent-b)" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill={`url(#${gradId})`} />
      <path
        d="M 35 25 L 45 25 L 45 55 Q 45 65 35 65 Q 25 65 25 55 L 32 55 Q 32 58 35 58 Q 38 58 38 55 L 38 32 L 35 32 Z"
        fill="white"
      />
      <path
        d="M 65 32 Q 55 32 55 42 L 55 58 Q 55 68 65 68 Q 75 68 75 58 L 75 50 L 65 50 L 65 57 L 68 57 L 68 58 Q 68 61 65 61 Q 62 61 62 58 L 62 42 Q 62 39 65 39 Q 68 39 68 42 L 75 42 Q 75 32 65 32 Z"
        fill="white"
      />
    </svg>
  );
}
