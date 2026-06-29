"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { InquiryTable } from "./inquiry-table";
import { INQUIRY_FILTERS } from "./inquiry-meta";
import type { Inquiry, InquiryStatus } from "@/types";

type FilterId = InquiryStatus | "all";

/* Inquiries: filter pills + the full inquiry table (actionable status picker
   and expandable detail rows). Data comes from the server page. */
export function InquiriesView({ inquiries }: { inquiries: Inquiry[] }) {
  const [filter, setFilter] = useState<FilterId>("all");
  const rows =
    filter === "all" ? inquiries : inquiries.filter((q) => q.status === filter);

  return (
    <>
      <Reveal className="mb-[1.4rem]">
        <div className="pills" role="group" aria-label="Filter inquiries">
          {INQUIRY_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={cn("pill", filter === f.id && "active")}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>
      <p className="sr-only" role="status" aria-live="polite">
        {rows.length === 1 ? "1 inquiry shown" : `${rows.length} inquiries shown`}
      </p>
      <Reveal delay={80} className="surface px-[1.4rem] py-[1.2rem]">
        {rows.length === 0 ? (
          <p className="py-[1.6rem] text-center text-ink-300">
            {inquiries.length === 0
              ? "No inquiries yet. New contact and intake submissions will appear here."
              : "No inquiries match this filter."}
          </p>
        ) : (
          <InquiryTable rows={rows} actionable />
        )}
      </Reveal>
    </>
  );
}
