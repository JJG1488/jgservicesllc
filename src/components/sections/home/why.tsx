import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icons";
import { why } from "@/data/home";
import { HomeSectionHead } from "./home-section-head";

/* "Why JG Services" six-card grid (#why anchor — linked from the footer). */
export function Why() {
  return (
    <section id="why" className="section">
      <div className="wrap">
        <HomeSectionHead
          kicker="Why JG Services"
          title={
            <>
              A partner, not just a <span className="grad-text">vendor</span>.
            </>
          }
          lead="The difference is in how we work — transparent, communicative, and accountable from kickoff to long after launch."
        />
        <div className="why-grid mt-12">
          {why.map((w, i) => (
            <Reveal key={w.title} className="surface lift why-card" delay={(i % 3) * 80}>
              <div className="why-ic">
                <Icon name={w.icon} size={22} />
              </div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
