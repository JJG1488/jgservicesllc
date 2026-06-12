import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { CostEstimator } from "@/components/sections/resources/cost-estimator";
import { ToolsGrid } from "@/components/sections/resources/tools-grid";
import { Reveal } from "@/components/ui/reveal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Resources",
  description:
    "Free tools to plan your web project — cost estimator, readiness quiz, timeline planner, and more.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Resources"
        kicker="Free tools"
        title="Plan smarter before you"
        titleAccent="build."
        lead="Free, no-signup tools to help you scope, budget, and time your project. Start with the cost estimator below."
      />

      <CostEstimator />

      <ToolsGrid />

      <section className="section">
        <div className="wrap">
          <Reveal className="surface surface-strong cta-band">
            <h2 className="display">
              Ready for a <span className="grad-text">real number</span>?
            </h2>
            <p>
              The intake wizard turns these estimates into a tailored ballpark
              in five quick steps.
            </p>
            <Link href="/intake" className="btn btn-primary">
              Start the intake
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
