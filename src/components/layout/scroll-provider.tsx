"use client";

import { useSyncExternalStore } from "react";
import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export function ScrollProvider({ children }: { children: ReactNode }) {
  /* Hydration-safe read of the user's motion preference: the server
     snapshot matches the first client render, then the real value kicks
     in and stays subscribed to OS-level changes. */
  const prefersReducedMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
