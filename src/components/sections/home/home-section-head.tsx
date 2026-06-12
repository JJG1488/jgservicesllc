import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface HomeSectionHeadProps {
  kicker?: string;
  title: ReactNode;
  lead?: string;
  center?: boolean;
}

/* Standard section heading (mono kicker, display title, lead) that
   accepts a ReactNode title so headings can carry .grad-text accent
   spans, exactly like the prototype's SectionHead. */
export function HomeSectionHead({ kicker, title, lead, center }: HomeSectionHeadProps) {
  return (
    <Reveal className={cn("sec-head", center && "center")}>
      {kicker && <span className="kicker">{kicker}</span>}
      <h2 className="display sec-title">{title}</h2>
      {lead && <p className="sec-lead">{lead}</p>}
    </Reveal>
  );
}
