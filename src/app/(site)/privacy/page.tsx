import { LegalPageHeader } from "@/components/sections/legal/legal-page-header";
import { LegalLayout, type LegalSection } from "@/components/sections/legal/legal-layout";
import { LegalContactCard } from "@/components/sections/legal/legal-contact-card";
import { LegalCta } from "@/components/sections/legal/legal-cta";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "How JG Services LLC collects, uses, and safeguards your information.",
  path: "/privacy",
});

const sections: LegalSection[] = [
  {
    id: "collect",
    tocLabel: "1. Information We Collect",
    heading: "1. Information We Collect",
    body: (
      <p>
        We collect information you provide when you contact us, download resources, or use our
        services. This may include your name, email address, phone number, and any project details
        you choose to share.
      </p>
    ),
  },
  {
    id: "use",
    tocLabel: "2. How We Use It",
    heading: "2. How We Use Your Information",
    body: (
      <p>
        We use your information to provide services, communicate with you, and improve our
        offerings. We do not sell your personal information to third parties.
      </p>
    ),
  },
  {
    id: "security",
    tocLabel: "3. Data Security",
    heading: "3. Data Security",
    body: (
      <p>
        We implement appropriate security measures to protect your personal information against
        unauthorized access, alteration, disclosure, or destruction.
      </p>
    ),
  },
  {
    id: "rights",
    tocLabel: "4. Your Rights",
    heading: "4. Your Rights",
    body: (
      <p>
        You have the right to access, correct, or delete your personal information. To exercise any
        of these rights, contact us using the details below.
      </p>
    ),
  },
  {
    id: "contact",
    tocLabel: "5. Contact Us",
    heading: "5. Contact Us",
    body: <LegalContactCard />,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <LegalPageHeader
        breadcrumb="Privacy Policy"
        title="Privacy"
        titleAccent="Policy"
        lastUpdated="Last updated: October 28, 2025"
      />
      <LegalLayout
        intro="JG Services LLC is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information."
        sections={sections}
      />
      <LegalCta
        heading={
          <>
            Have <span className="grad-text">questions</span>?
          </>
        }
        body="We're committed to protecting your data. Reach out any time."
      />
    </>
  );
}
