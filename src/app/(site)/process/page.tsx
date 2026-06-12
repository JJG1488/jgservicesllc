import { PageHeader } from "@/components/layout/page-header";
import { ProcessStepper } from "@/components/sections/process/process-stepper";
import { WhatToExpect } from "@/components/sections/process/what-to-expect";
import { ProcessCta } from "@/components/sections/process/process-cta";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Process",
  description:
    "A proven path from idea to launch — JG Services LLC's three-phase web development process.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Process"
        kicker="How it works"
        title="A proven path from"
        titleAccent="idea to launch."
        lead="Three phases, weekly demos, and no surprises. You always know exactly where your project stands — and what happens next."
      />
      <ProcessStepper />
      <WhatToExpect />
      <ProcessCta />
    </>
  );
}
