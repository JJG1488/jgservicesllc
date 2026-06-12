import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";

/* "More planning tools" grid from the resources.html prototype. The
   prototype used emoji glyphs in .tool-ic; the brand rule is inline SVG
   only, so each emoji is mapped to the closest stroke icon. */

interface Tool {
  icon: IconName;
  title: string;
  description: string;
  cta: string;
  href: string;
  delay: number;
}

const TOOLS: Tool[] = [
  {
    icon: "check",
    title: "Project readiness quiz",
    description:
      "Ten questions to tell you whether your idea is ready to build — and what to nail down first.",
    cta: "Take the quiz →",
    href: "/intake",
    delay: 0,
  },
  {
    icon: "clock",
    title: "Timeline estimator",
    description:
      "See a realistic week-by-week schedule for your scope, with the milestones that matter.",
    cta: "Estimate timeline →",
    href: "/process",
    delay: 80,
  },
  {
    icon: "sparkle",
    title: "Feature recommender",
    description:
      "Tell us your goals and we'll suggest the features that move the needle — and the ones to skip.",
    cta: "Get recommendations →",
    href: "/intake",
    delay: 0,
  },
  {
    icon: "gauge",
    title: "ROI calculator",
    description:
      "Model the return a faster, higher-converting site could deliver for your business.",
    cta: "Calculate ROI →",
    href: "/contact",
    delay: 80,
  },
];

export function ToolsGrid() {
  return (
    <section className="section" style={{ paddingTop: "1rem" }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 className="display sec-title" style={{ fontSize: "2rem" }}>
            More planning tools
          </h2>
        </Reveal>
        <div className="tool-grid" style={{ marginTop: "2rem" }}>
          {TOOLS.map((tool) => (
            <Reveal
              key={tool.title}
              as="article"
              delay={tool.delay}
              className="surface lift tool-card"
            >
              <div className="tool-ic">
                <Icon name={tool.icon} size={24} />
              </div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <Link href={tool.href} className="btn btn-ghost self-start">
                {tool.cta}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
