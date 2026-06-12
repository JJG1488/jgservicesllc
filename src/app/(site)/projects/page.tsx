import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/ui/reveal";
import { ProjectsGallery } from "@/components/sections/projects/projects-gallery";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Selected web development projects by JG Services LLC — real products designed, built, and launched.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Projects"
        kicker="Selected work"
        title="Real products,"
        titleAccent="really shipped."
        lead="A sample of what we've designed, built, and launched — from AI SaaS to local-business sites. Every project below is live; click through and see for yourself."
      />

      <ProjectsGallery />

      <section className="section">
        <div className="wrap">
          <Reveal className="surface surface-strong cta-band">
            <span className="kicker flex justify-center">Have a project in mind?</span>
            <h2 className="display mt-4">
              Let&apos;s build <span className="grad-text">yours</span> next.
            </h2>
            <p>
              Tell us what you&apos;re picturing and we&apos;ll turn it into a concrete
              plan with a fixed quote — no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-[0.9rem]">
              <Link href="/intake" className="btn btn-primary">
                Start a project
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
