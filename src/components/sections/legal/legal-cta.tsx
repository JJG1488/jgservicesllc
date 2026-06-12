import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

interface LegalCtaProps {
  /** Display heading; pass a .grad-text span for the accent word. */
  heading: ReactNode;
  body: string;
}

/* Closing CTA band shared by the legal pages. */
export function LegalCta({ heading, body }: LegalCtaProps) {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="surface surface-strong cta-band">
          <h2 className="display">{heading}</h2>
          <p>{body}</p>
          <Link href="/contact" className="btn btn-primary">
            Contact us
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
