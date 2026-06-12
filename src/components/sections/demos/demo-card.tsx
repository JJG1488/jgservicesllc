import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { DemoIcon } from "./demo-icons";
import type { Demo } from "./demos-data";

interface DemoCardProps {
  demo: Demo;
  /** Position in the rendered grid, used to stagger the reveal. */
  index?: number;
}

/* Demo-type showcase card: gradient placeholder shot with a 48px stroke
   icon, floating category chip, title, blurb, feature chips, and the
   "Build this" / "Ask about it" CTA pair — per demos.html. */
export function DemoCard({ demo, index = 0 }: DemoCardProps) {
  return (
    <Reveal as="article" delay={index * 60} className="surface lift proj-card relative">
      <div className="proj-shot ph">
        <DemoIcon name={demo.icon} />
      </div>
      <span className="chip proj-cat">{demo.tag}</span>
      <div className="proj-body">
        <h3>{demo.title}</h3>
        <p>{demo.description}</p>
        <div className="proj-tags">
          {demo.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
        <div className="proj-actions">
          <Link className="btn btn-primary" href="/intake">
            Build this
          </Link>
          <Link className="btn btn-ghost" href="/contact">
            Ask about it
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
