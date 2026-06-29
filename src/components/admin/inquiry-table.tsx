"use client";

import { Fragment, useState, useTransition, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { AdminIcon } from "./admin-icons";
import { INQUIRY_STATUS_LABEL, INQUIRY_STATUSES } from "./inquiry-meta";
import { setInquiryStatus } from "@/app/admin/inquiry-actions";
import type { Inquiry, InquiryStatus } from "@/types";

/* Shared inquiries table (dashboard "recent" slice + full inquiries view).
   Rows expand to reveal the contact email, message, and intake details so a
   lead can actually be followed up. When `actionable`, the status cell becomes
   a picker wired to a server action; otherwise it renders a read-only badge.
   Inline cell colors mirror the prototype (pages.css .table td color wins
   over layered utilities). */
export function InquiryTable({
  rows,
  actionable = false,
}: {
  rows: Inquiry[];
  actionable?: boolean;
}) {
  const router = useRouter();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  function changeStatus(id: string, status: InquiryStatus) {
    setBusyId(id);
    startTransition(async () => {
      await setInquiryStatus(id, status);
      router.refresh();
      setBusyId(null);
    });
  }

  const colSpan = 6;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            <span className="sr-only">Details</span>
          </th>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Budget</th>
          <th scope="col">Date</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((q) => {
          const open = expandedId === q.id;
          return (
            <Fragment key={q.id}>
              <tr>
                <td style={{ width: 36 }}>
                  <button
                    type="button"
                    className="grid h-8 w-8 place-items-center rounded-lg text-ink-300 hover:text-ink-100"
                    aria-expanded={open}
                    aria-controls={`inq-detail-${q.id}`}
                    aria-label={`${open ? "Hide" : "Show"} details for ${q.name}`}
                    onClick={() => setExpandedId(open ? null : q.id)}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        display: "inline-flex",
                        transform: open ? "rotate(-90deg)" : "rotate(180deg)",
                        transition: "transform 0.2s var(--ease)",
                      }}
                    >
                      <AdminIcon name="back" size={16} />
                    </span>
                  </button>
                </td>
                <td className="font-semibold" style={{ color: "var(--ink-100)" }}>
                  {q.name}
                </td>
                <td>{q.type}</td>
                <td className="font-mono">{q.budget}</td>
                <td className="font-mono" style={{ color: "var(--ink-400)" }}>
                  {q.dateLabel}
                </td>
                <td>
                  {actionable ? (
                    <select
                      className="select"
                      value={q.status}
                      disabled={busyId === q.id}
                      aria-label={`Status for ${q.name}`}
                      onChange={(e) =>
                        changeStatus(q.id, e.target.value as InquiryStatus)
                      }
                      style={{ padding: "0.4rem 0.6rem", minWidth: 140 }}
                    >
                      {INQUIRY_STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {INQUIRY_STATUS_LABEL[s]}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span className={`badge ${q.status}`}>
                      {INQUIRY_STATUS_LABEL[q.status]}
                    </span>
                  )}
                </td>
              </tr>
              {open && (
                <tr id={`inq-detail-${q.id}`}>
                  <td colSpan={colSpan} style={{ background: "rgba(255,255,255,0.02)" }}>
                    <InquiryDetail inquiry={q} />
                  </td>
                </tr>
              )}
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
}

function InquiryDetail({ inquiry: q }: { inquiry: Inquiry }) {
  return (
    <div className="grid gap-[0.9rem] py-[0.4rem] md:grid-cols-2">
      <DetailRow label="Source">
        <span className={`badge ${q.source === "intake" ? "new" : "muted"}`}>
          {q.source === "intake" ? "Intake wizard" : "Contact form"}
        </span>
      </DetailRow>
      <DetailRow label="Received">{q.dateFull}</DetailRow>
      <DetailRow label="Email">
        <a className="text-sapphire-300" href={`mailto:${q.email}`}>
          {q.email}
        </a>
      </DetailRow>
      {q.company ? <DetailRow label="Company">{q.company}</DetailRow> : null}
      {q.timeline ? <DetailRow label="Timeline">{q.timeline}</DetailRow> : null}
      {q.estimate ? (
        <DetailRow label="Ballpark estimate">{q.budget}</DetailRow>
      ) : null}
      {q.features && q.features.length ? (
        <DetailRow label="Features">{q.features.join(", ")}</DetailRow>
      ) : null}
      {q.message ? (
        <div className="md:col-span-2">
          <div className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-400">
            {q.source === "intake" ? "Details" : "Message"}
          </div>
          <p className="mt-[0.3rem] whitespace-pre-wrap text-ink-200">{q.message}</p>
        </div>
      ) : null}
      <div className="md:col-span-2">
        <a className="btn btn-primary" href={`mailto:${q.email}`}>
          Reply by email
        </a>
      </div>
    </div>
  );
}

function DetailRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-400">
        {label}
      </div>
      <div className="mt-[0.2rem] text-ink-200">{children}</div>
    </div>
  );
}
