import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/ui/reveal";
import { DemoCard } from "@/components/sections/demos/demo-card";
import { demos } from "@/components/sections/demos/demos-data";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Demos",
  description:
    "Interactive demo templates — see the kinds of sites and apps JG Services LLC builds.",
  path: "/demos",
});

export default function DemosPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Demos"
        kicker="Interactive demos"
        title="See what we can"
        titleAccent="build."
        lead="Explore demo templates for common business types. Each one is a starting point we tailor to your brand and needs."
      />

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="wrap">
          <div className="proj-grid">
            {demos.map((demo, index) => (
              <DemoCard key={demo.title} demo={demo} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="surface surface-strong cta-band">
            <h2 className="display">
              Want one tailored to <span className="grad-text">your business</span>?
            </h2>
            <p>
              Tell us your industry and we&apos;ll spin up a direction built around
              your brand.
            </p>
            <Link href="/intake" className="btn btn-primary">
              Start a project
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
