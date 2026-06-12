import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";

/* "What to expect" cards (process.html). Copy is page-specific and does not
   exist in the typed data layer, so it lives here. The prototype used emoji
   glyphs for the card icons; we map them to the brand stroke icon set. */
const EXPECT = [
  {
    icon: "clock",
    title: "Weekly demo calls",
    desc: "A 30-minute demo every week on a live preview URL. You see real progress, not status emails.",
  },
  {
    icon: "chat",
    title: "Direct line to your dev",
    desc: "Questions go straight to the person writing the code. No account managers, no telephone game.",
  },
  {
    icon: "hands",
    title: "You own everything",
    desc: "On final payment, the GitHub repo and all source files transfer to you. Clean, documented, yours.",
  },
] as const;

export function WhatToExpect() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="sec-head center">
          <span className="kicker" style={{ justifyContent: "center", display: "flex" }}>
            What to expect
          </span>
          <h2 className="display sec-title">
            Built around <span className="grad-text">communication</span>.
          </h2>
        </Reveal>
        <div className="why-grid" style={{ marginTop: "3rem" }}>
          {EXPECT.map((item, i) => (
            <Reveal key={item.title} as="article" delay={i * 80} className="surface lift why-card">
              <div className="why-ic">
                <Icon name={item.icon} size={22} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
