"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useMounted } from "@/hooks/use-mounted";

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  /** Delay in milliseconds (matches the prototype's Reveal API). */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
}

/* Scroll reveal (fade + rise), the production counterpart of the
   prototype's IntersectionObserver `.reveal` helper. Renders final
   state immediately for reduced-motion users. */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const mounted = useMounted();
  const Tag = motion[as];

  // The plain-tag branch is gated on `mounted` so SSR and the first client
  // render share the same structure (motion path) — avoids a hydration
  // mismatch for reduced-motion users. The one-time remount after hydration
  // is acceptable.
  if (mounted && reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </Tag>
  );
}
