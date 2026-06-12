import { why } from "@/data/home";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icons";

/* "Why JG Services" — centered section head plus the 6-card why grid,
   fed by the shared home data layer. */
export function WhySection() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="sec-head center">
          <span className="kicker flex justify-center">Why JG Services</span>
          <h2 className="display sec-title">
            A partner, not just a <span className="grad-text">vendor</span>.
          </h2>
          <p className="sec-lead">
            The difference is in how we work &mdash; transparent, communicative,
            and accountable from kickoff to long after launch.
          </p>
        </Reveal>
        <div className="why-grid mt-12">
          {why.map((item, i) => (
            <Reveal
              key={item.title}
              as="article"
              delay={(i % 3) * 80}
              className="surface lift why-card"
            >
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
