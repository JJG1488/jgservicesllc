import { PageHeader } from "@/components/layout/page-header";

interface LegalPageHeaderProps {
  breadcrumb: string;
  title: string;
  titleAccent: string;
  /** Mono "Last updated: …" line under the title. */
  lastUpdated: string;
}

/* PageHeader wrapper that restyles the lead line to the prototype's
   small mono "Last updated" treatment (font-mono, .85rem, ink-400)
   without modifying the shared component. */
export function LegalPageHeader({
  breadcrumb,
  title,
  titleAccent,
  lastUpdated,
}: LegalPageHeaderProps) {
  return (
    <div className="[&_.page-lead]:font-mono [&_.page-lead]:text-[0.85rem] [&_.page-lead]:text-ink-400">
      <PageHeader
        breadcrumb={breadcrumb}
        title={title}
        titleAccent={titleAccent}
        lead={lastUpdated}
      />
    </div>
  );
}
