import { LegalPageHeader } from "@/components/sections/legal/legal-page-header";
import { LegalLayout, type LegalSection } from "@/components/sections/legal/legal-layout";
import { LegalContactCard } from "@/components/sections/legal/legal-contact-card";
import { LegalCta } from "@/components/sections/legal/legal-cta";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "The terms governing your use of JG Services LLC's website and services.",
  path: "/terms",
});

const sections: LegalSection[] = [
  {
    id: "accept",
    tocLabel: "1. Acceptance of Terms",
    heading: "1. Acceptance of Terms",
    body: (
      <p>By accessing our website or using our services, you agree to be bound by these terms.</p>
    ),
  },
  {
    id: "services",
    tocLabel: "2. Services",
    heading: "2. Services",
    body: (
      <p>
        We provide web development, design, and related technical services as described on our
        website.
      </p>
    ),
  },
  {
    id: "payment",
    tocLabel: "3. Payment Terms",
    heading: "3. Payment Terms",
    body: (
      <p>
        Payment terms are agreed upon in individual service contracts. A deposit is typically
        required to begin work.
      </p>
    ),
  },
  {
    id: "ip",
    tocLabel: "4. Intellectual Property",
    heading: "4. Intellectual Property",
    body: (
      <p>
        Upon full payment, clients own the code and designs created specifically for their project.
      </p>
    ),
  },
  {
    id: "liability",
    tocLabel: "5. Limitation of Liability",
    heading: "5. Limitation of Liability",
    body: (
      <p>
        JG Services LLC is not liable for indirect, incidental, or consequential damages arising
        from the use of our services.
      </p>
    ),
  },
  {
    id: "termination",
    tocLabel: "6. Termination",
    heading: "6. Termination",
    body: (
      <p>
        Either party may terminate services with written notice as outlined in individual service
        agreements.
      </p>
    ),
  },
  {
    id: "changes",
    tocLabel: "7. Changes to Terms",
    heading: "7. Changes to Terms",
    body: (
      <p>
        We reserve the right to modify these terms at any time. Continued use of our services
        constitutes acceptance of updated terms.
      </p>
    ),
  },
  {
    id: "contact",
    tocLabel: "8. Contact",
    heading: "8. Contact",
    body: <LegalContactCard />,
  },
];

export default function TermsPage() {
  return (
    <>
      <LegalPageHeader
        breadcrumb="Terms of Service"
        title="Terms of"
        titleAccent="Service"
        lastUpdated="Last updated: January 28, 2025"
      />
      <LegalLayout
        intro="These Terms of Service govern your use of JG Services LLC's website and services."
        sections={sections}
      />
      <LegalCta
        heading={
          <>
            Questions about our <span className="grad-text">terms</span>?
          </>
        }
        body="We're happy to discuss anything you'd like clarified before we start."
      />
    </>
  );
}
