"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { useMounted } from "@/hooks/use-mounted";

interface CountUpProps {
  value: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/* Eased count-up that starts when scrolled into view. Supports decimals
   (e.g. 2.8s). Reduced-motion users see the final value immediately. */
export function CountUp({
  value,
  decimals = 0,
  duration = 1600,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const mounted = useMounted();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView || reduce) return;
    let raf: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, reduce, value, duration]);

  // Reduced-motion users get the final value with no animation. Gated on
  // `mounted` so SSR and the first client render are identical (avoids a
  // hydration text mismatch when prefers-reduced-motion is set).
  const showFinal = mounted && reduce;
  const current = showFinal ? value : val;
  const display = decimals ? current.toFixed(decimals) : Math.round(current).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
