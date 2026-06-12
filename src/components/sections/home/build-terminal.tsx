"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useMounted } from "@/hooks/use-mounted";

interface TermSeg {
  /** Token color class (t-prompt / t-flag / t-key / t-str / t-dim / t-ok). */
  c?: string;
  t: string;
}

/* Exact terminal script from the prototype (sections-a.jsx). */
const TERM_LINES: TermSeg[][] = [
  [
    { c: "t-prompt", t: "➜ " },
    { c: "t-dim", t: "~/clients " },
    { t: "npx create-jg-app " },
    { c: "t-str", t: '"your-idea"' },
  ],
  [
    { c: "t-ok", t: "✓ " },
    { c: "t-dim", t: "scaffolding " },
    { c: "t-key", t: "Next.js" },
    { c: "t-dim", t: " + " },
    { c: "t-key", t: "TypeScript" },
  ],
  [
    { c: "t-ok", t: "✓ " },
    { c: "t-dim", t: "wiring " },
    { c: "t-key", t: "API" },
    { c: "t-dim", t: " + secure " },
    { c: "t-key", t: "auth" },
  ],
  [
    { c: "t-ok", t: "✓ " },
    { c: "t-dim", t: "tuning Core Web Vitals " },
    { c: "t-flag", t: "--lighthouse 95+" },
  ],
  [
    { c: "t-ok", t: "✓ " },
    { c: "t-dim", t: "deploying to the edge " },
    { c: "t-flag", t: "--zero-downtime" },
  ],
  [
    { c: "t-prompt", t: "➜ " },
    { c: "t-ok", t: "shipped " },
    { c: "t-str", t: "https://yourbusiness.com" },
    { c: "t-dim", t: "  (2.4s)" },
  ],
];

function renderLine(segs: TermSeg[], budgetIn: number) {
  let budget = budgetIn;
  return segs.map((s, i) => {
    if (budget <= 0) return null;
    const txt = s.t.slice(0, budget);
    budget -= s.t.length;
    return (
      <span key={i} className={s.c ?? ""}>
        {txt}
      </span>
    );
  });
}

/* Animated build terminal: staged line-by-line typing, ported from the
   prototype. Plays once and stops on the completed transcript (WCAG 2.2.2).
   Reduced-motion users get the full transcript statically. */
export function BuildTerminal() {
  const reduce = useReducedMotion();
  const mounted = useMounted();
  const [shown, setShown] = useState(0);
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    // Reduced motion: render the full transcript statically (no typing).
    if (reduce) return;
    let line = 0;
    let ch = 0;
    let raf: number;
    const full = TERM_LINES.map((segs) => segs.reduce((a, s) => a + s.t.length, 0));
    let last = performance.now();
    const step = (now: number) => {
      if (now - last > 26) {
        last = now;
        ch++;
        setTyped(ch);
        if (ch >= full[line]) {
          line++;
          ch = 0;
          setShown(line);
          setTyped(0);
          if (line >= TERM_LINES.length) {
            // Transcript complete: stop here (play once, WCAG 2.2.2).
            return;
          }
          last = now + 240;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  // Gated on `mounted` so SSR and the first client render are identical
  // (avoids a hydration mismatch when prefers-reduced-motion is set).
  const showStatic = mounted && reduce;
  const allShown = showStatic ? TERM_LINES.length : shown;

  return (
    <div className="term surface surface-strong">
      <div className="term-bar">
        <span className="term-dot" style={{ background: "#ff5f57" }} />
        <span className="term-dot" style={{ background: "#febc2e" }} />
        <span className="term-dot" style={{ background: "#28c840" }} />
        <span className="term-title">jg-services — build</span>
      </div>
      <div className="term-body">
        {TERM_LINES.map((segs, i) => {
          if (i > allShown) return null;
          const isCurrent = !showStatic && i === allShown;
          return (
            <div key={i} className="term-line">
              {renderLine(segs, isCurrent ? typed : 999)}
              {isCurrent && <span className="cursor-blink" aria-hidden="true" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
