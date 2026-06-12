import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

/* Closing CTA band for the services page. */
export function ServicesCta() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="surface surface-strong cta-band">
          <h2 className="display">
            Ready to get <span className="grad-text">started</span>?
          </h2>
          <p>
            Let&apos;s discuss your project and put together a detailed quote.
            No obligation, no sales pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-[0.9rem]">
            <Link href="/intake" className="btn btn-primary">
              Start a project
            </Link>
            <Link href="/process" className="btn btn-ghost">
              See our process
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
