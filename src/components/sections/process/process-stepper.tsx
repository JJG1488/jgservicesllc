"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { processPhases } from "@/data/process";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/* Full-page interactive 3-phase stepper (process.html). Same .proc pattern
   as the home preview, but with proper tab semantics: the step list is a
   vertical tablist, the detail panel is its tabpanel. Arrow keys / Home /
   End move between phases (automatic activation, roving tabindex). */
export function ProcessStepper() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const phase = processPhases[active];

  function activate(i: number) {
    setActive(i);
    tabRefs.current[i]?.focus();
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const last = processPhases.length - 1;
    let next: number;
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = i === last ? 0 : i + 1;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        next = i === 0 ? last : i - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = last;
        break;
      default:
        return;
    }
    e.preventDefault();
    activate(next);
  }

  return (
    <section className="section" style={{ paddingTop: "1rem" }}>
      <div className="wrap">
        <div className="proc">
          <Reveal>
            <div
              className="proc-steps"
              role="tablist"
              aria-orientation="vertical"
              aria-label="Project phases"
            >
              {processPhases.map((p, i) => (
                <button
                  key={p.n}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`proc-tab-${i}`}
                  aria-selected={i === active}
                  aria-controls="proc-panel"
                  tabIndex={i === active ? 0 : -1}
                  className={cn("proc-step", i === active && "active")}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                >
                  <span className="proc-num">{p.n}</span>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.blurb}</p>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="surface proc-panel"
              role="tabpanel"
              id="proc-panel"
              aria-labelledby={`proc-tab-${active}`}
            >
              <span className="chip">{phase.tag}</span>
              <div className="big-num grad-text" style={{ marginTop: "0.8rem" }}>
                {phase.n}
              </div>
              <h3
                className="display"
                style={{ fontSize: "1.8rem", margin: "0.4rem 0 0.7rem", color: "var(--ink-100)" }}
              >
                {phase.title}
              </h3>
              <p style={{ color: "var(--ink-300)", lineHeight: 1.7, margin: 0, fontSize: "1.02rem" }}>
                {phase.detail}
              </p>
              <ul className="proc-detail-list">
                {phase.points.map((pt) => (
                  <li key={pt}>
                    <Icon name="check" size={17} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
