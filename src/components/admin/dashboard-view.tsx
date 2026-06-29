"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { CountUp } from "@/components/ui/count-up";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { AdminIcon } from "./admin-icons";
import { InquiryTable } from "./inquiry-table";
import { useAdminView } from "./view-context";
import type { DashboardStats } from "@/lib/dashboard-stats";
import type { Inquiry } from "@/types";

/* Dashboard: KPI grid, inquiries-by-month bar chart (animated heights),
   pipeline progress, and recent inquiries — all derived from real Firestore
   data (stats are computed server-side; see src/lib/dashboard-stats.ts). */
export function DashboardView({
  inquiries,
  stats,
}: {
  inquiries: Inquiry[];
  stats: DashboardStats;
}) {
  const { setView } = useAdminView();
  const reduce = useReducedMotion();

  /* Bars mount at 0 then transition to their target height
     (pages.css .chart .bar / .wiz-prog .bar own the easing). */
  const [grown, setGrown] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setGrown(true), 80);
    return () => window.clearTimeout(t);
  }, []);
  const show = grown || !!reduce;

  const { kpis, chart, pipeline } = stats;
  const chartLabel = `Bar chart, inquiries by month: ${chart.months
    .map((m, i) => `${m} ${chart.bars[i]}`)
    .join(", ")}`;

  return (
    <>
      <div className="kpi-grid">
        {kpis.map((k, i) => (
          <Reveal key={k.label} delay={i * 60} className="surface kpi">
            <div className="kpi-top">
              <div className="kpi-ic">
                {k.icon === "bolt" ? (
                  <Icon name="bolt" size={20} sw={1.8} />
                ) : (
                  <AdminIcon name={k.icon} size={20} />
                )}
              </div>
            </div>
            <div className="num">
              <CountUp
                value={k.value}
                decimals={k.decimals}
                prefix={k.prefix}
                suffix={k.suffix}
              />
            </div>
            <div className="lbl">{k.label}</div>
          </Reveal>
        ))}
      </div>

      <div className="grid items-start gap-[1.2rem] lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="surface p-[1.6rem]">
          <h3 className="mb-[0.2rem] text-[1.05rem] font-semibold text-ink-100">
            Inquiries by month
          </h3>
          <div className="chart" role="img" aria-label={chartLabel}>
            {chart.bars.map((b, i) => (
              <div className="col" key={chart.months[i]}>
                <div
                  className="bar"
                  style={{ height: show ? `${(b / chart.max) * 100}%` : "0%" }}
                />
                <div className="cl">{chart.months[i]}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80} className="surface p-[1.6rem]">
          <h3 className="mb-4 text-[1.05rem] font-semibold text-ink-100">Pipeline</h3>
          {pipeline.map((p) => (
            <div key={p.label} className="mb-4">
              <div className="mb-[0.4rem] flex justify-between text-[0.84rem]">
                <span className="text-ink-300">{p.label}</span>
                <span className="font-mono text-ink-100">{p.value}</span>
              </div>
              <div
                className="wiz-prog"
                role="progressbar"
                aria-label={p.label}
                aria-valuenow={p.value}
                aria-valuemin={0}
                aria-valuemax={p.max}
              >
                <div
                  className="bar"
                  style={{ width: show ? `${(p.value / p.max) * 100}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal delay={120} className="surface mt-[1.2rem] p-[1.6rem]">
        <div className="mb-[0.6rem] flex items-center justify-between">
          <h3 className="text-[1.05rem] font-semibold text-ink-100">Recent inquiries</h3>
          <button type="button" className="pill" onClick={() => setView("inq")}>
            View all
          </button>
        </div>
        {inquiries.length === 0 ? (
          <p className="py-[1.2rem] text-center text-ink-300">
            No inquiries yet. New submissions will appear here.
          </p>
        ) : (
          <InquiryTable rows={inquiries.slice(0, 5)} />
        )}
      </Reveal>
    </>
  );
}
