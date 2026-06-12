import { PageHeader } from "@/components/layout/page-header";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactSidebar } from "@/components/sections/contact/contact-sidebar";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with JG Services LLC for a free consultation and a detailed project quote.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Contact"
        kicker="Let's talk"
        title="Tell us what you're"
        titleAccent="building."
        lead="Free consultation, detailed quote, no sales pressure. We typically reply within one business day."
      />
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="wrap">
          <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
            <ContactForm />
            <ContactSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
