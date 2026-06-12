import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { FaqExplorer } from "@/components/sections/faq/faq-explorer";
import { Reveal } from "@/components/ui/reveal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Answers about pricing, timelines, process, technology, and support — working with JG Services LLC.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHeader
        breadcrumb="FAQ"
        kicker="Good questions"
        title="Frequently asked"
        titleAccent="questions."
        lead="Everything about working together — pricing, timelines, process, and post-launch support. Filter by topic or search."
      />

      <FaqExplorer />

      <section className="section">
        <div className="wrap">
          <Reveal className="surface surface-strong cta-band">
            <h2 className="display">
              Still have <span className="grad-text">questions</span>?
            </h2>
            <p>Don&apos;t see yours answered? Let&apos;s chat — happy to discuss your specific situation.</p>
            <div className="flex flex-wrap justify-center gap-[0.9rem]">
              <Link href="/contact" className="btn btn-primary">
                Free consultation
              </Link>
              <Link href="/process" className="btn btn-ghost">
                See our process
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
