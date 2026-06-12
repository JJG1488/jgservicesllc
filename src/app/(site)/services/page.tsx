import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/layout/page-header";
import { ServicesGrid } from "@/components/sections/services/services-grid";
import { WhySection } from "@/components/sections/services/why-section";
import { ServicesCta } from "@/components/sections/services/services-cta";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Custom web applications, responsive websites, e-commerce, SEO, APIs, and ongoing care — from JG Services LLC.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Services"
        kicker="What we build"
        title="Services scoped to your"
        titleAccent="business."
        lead="From custom web applications to ongoing maintenance — comprehensive web development with clear timelines and honest pricing. Tap any service for the full breakdown."
      />

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="wrap">
          <ServicesGrid />
        </div>
      </section>

      <WhySection />

      <ServicesCta />
    </>
  );
}
