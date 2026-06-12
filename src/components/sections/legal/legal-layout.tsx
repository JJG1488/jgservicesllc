import { Fragment, type ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

export interface LegalSection {
  /** Anchor id targeted by the TOC links (e.g. "collect"). */
  id: string;
  /** Link label shown in the sticky "On this page" TOC. */
  tocLabel: string;
  /** Section heading rendered in the prose column. */
  heading: string;
  /** Section content: paragraphs, lists, or cards. */
  body: ReactNode;
}

interface LegalLayoutProps {
  /** Opening paragraph rendered above the first section. */
  intro: string;
  sections: LegalSection[];
}

/* Two-column legal page body: sticky "On this page" TOC plus a prose
   article built from the same sections data. Anchor jumps rely on the
   global smooth scroll; headings carry scroll margin so the fixed
   glass nav never covers them. */
export function LegalLayout({ intro, sections }: LegalLayoutProps) {
  return (
    <section className="section" style={{ paddingTop: "1rem" }}>
      <div className="wrap">
        <div className="legal-layout">
          <Reveal className="surface toc">
            <nav aria-label="On this page">
              <p className="toc-title">On this page</p>
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  {section.tocLabel}
                </a>
              ))}
            </nav>
          </Reveal>

          <Reveal as="article" className="prose">
            <p>{intro}</p>
            {sections.map((section) => (
              <Fragment key={section.id}>
                <h2 id={section.id} className="scroll-mt-24">
                  {section.heading}
                </h2>
                {section.body}
              </Fragment>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
