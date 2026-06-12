"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icons";
import { processPhases } from "@/data/process";
import { cn } from "@/lib/utils";
import { HomeSectionHead } from "./home-section-head";

/* Interactive three-step stepper: step buttons on the left, detail
   panel on the right (re-revealed whenever the active step changes). */
export function ProcessPreview() {
  const [active, setActive] = useState(0);
  const step = processPhases[active];
  return (
    <section id="process" className="section">
      <div className="wrap">
        <HomeSectionHead
          kicker="How it works"
          title={
            <>
              A proven path from <span className="grad-text">idea to launch</span>.
            </>
          }
          lead="Three phases, weekly demos, and no surprises. You always know exactly where your project stands."
        />
        <div className="proc mt-12">
          <Reveal className="proc-steps">
            {processPhases.map((p, i) => (
              <button
                key={p.n}
                type="button"
                className={cn("proc-step", active === i && "active")}
                onClick={() => setActive(i)}
                aria-current={active === i ? "step" : undefined}
                aria-controls="proc-panel"
              >
                <span className="proc-num">{p.n}</span>
                <span className="block">
                  <h4>{p.title}</h4>
                  <p>{p.blurb}</p>
                </span>
              </button>
            ))}
          </Reveal>
          <Reveal delay={120} className="surface proc-panel" key={active}>
            <div id="proc-panel">
              <span className="chip">{step.tag}</span>
              <div className="big-num grad-text mt-[0.8rem]">{step.n}</div>
              <h3 className="display text-[1.8rem] text-ink-100 mt-[0.4rem] mb-[0.7rem]">
                {step.title}
              </h3>
              <p className="m-0 text-[1.02rem] leading-[1.7] text-ink-300">{step.detail}</p>
              <ul className="proc-detail-list">
                {step.points.map((pt) => (
                  <li key={pt}>
                    <Icon name="check" size={17} /> <span>{pt}</span>
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
