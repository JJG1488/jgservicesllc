import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/ui/reveal";
import { IntakeWizard } from "@/components/sections/intake/intake-wizard";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Start a Project",
  description:
    "Tell us about your project and get an instant ballpark estimate.",
  path: "/intake",
});

export default function IntakePage() {
  return (
    <>
      <PageHeader
        breadcrumb="Start a Project"
        kicker="Project intake"
        title="Let's scope your"
        titleAccent="build."
        lead="Five quick steps. You'll get an instant ballpark estimate — then we'll refine it together on a call."
      />
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="wrap">
          <Reveal>
            <IntakeWizard />
          </Reveal>
        </div>
      </section>
    </>
  );
}
