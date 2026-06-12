import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

/* Closing CTA band (process.html). intake.html / faq.html map to the
   /intake and /faq routes per site.config. */
export function ProcessCta() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="surface surface-strong cta-band">
          <h2 className="display">
            Let&apos;s map out <span className="grad-text">your build</span>.
          </h2>
          <p>
            Start with a free consultation. We&apos;ll turn your idea into a scoped plan with a
            fixed quote and timeline.
          </p>
          <div className="flex flex-wrap justify-center gap-[0.9rem]">
            <Link href="/intake" className="btn btn-primary">
              Start a project
            </Link>
            <Link href="/faq" className="btn btn-ghost">
              Read the FAQ
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
