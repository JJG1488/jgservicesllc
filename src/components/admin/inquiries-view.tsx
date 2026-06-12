"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { InquiryTable } from "./inquiry-table";
import { MOCK_INQUIRIES } from "./mock-data";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "new", label: "New" },
  { id: "won", label: "Won" },
  { id: "warn", label: "Following up" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

/* Inquiries: filter pills + full mock-inquiry table. */
export function InquiriesView() {
  const [filter, setFilter] = useState<FilterId>("all");
  const rows =
    filter === "all" ? MOCK_INQUIRIES : MOCK_INQUIRIES.filter((q) => q.status === filter);

  return (
    <>
      <Reveal className="mb-[1.4rem]">
        <div className="pills" role="group" aria-label="Filter inquiries">
          {FILTERS.map((f) => (
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
        <InquiryTable rows={rows} />
      </Reveal>
    </>
  );
}
