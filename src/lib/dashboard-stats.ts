import type { Inquiry } from "@/types";

/* Derives the admin dashboard's KPIs, monthly chart, and pipeline from the
   real inquiry list. Pure and deterministic given (inquiries, now) — call it
   on the server (in the page) and pass `now` explicitly so nothing derives the
   current date during client render (avoids hydration drift). */

export interface DashboardKpi {
  icon: "inquiry" | "folder" | "dollar" | "bolt";
  value: number;
  label: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export interface DashboardChart {
  bars: number[];
  months: string[];
  max: number;
}

export interface DashboardPipelineRow {
  label: string;
  value: number;
  max: number;
}

/** A small secondary metric (rendered in the strip under the KPI grid). */
export interface DashboardStat {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export interface DashboardStats {
  kpis: DashboardKpi[];
  secondary: DashboardStat[];
  chart: DashboardChart;
  pipeline: DashboardPipelineRow[];
}

const MONTH = new Intl.DateTimeFormat("en-US", {
  month: "short",
  timeZone: "America/New_York",
});

export function buildDashboardStats(
  inquiries: Inquiry[],
  now: Date,
): DashboardStats {
  const total = inquiries.length;
  const count = (s: Inquiry["status"]) =>
    inquiries.filter((q) => q.status === s).length;

  const newCount = count("new");
  const following = count("warn");
  const won = count("won");

  const thisMonth = inquiries.filter((q) => {
    const d = new Date(q.createdAt);
    return (
      d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth()
    );
  }).length;

  // Last 6 calendar months (oldest → newest), counted by created month.
  const months: string[] = [];
  const bars: number[] = [];
  for (let i = 5; i >= 0; i--) {
    const bucket = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push(MONTH.format(bucket));
    bars.push(
      inquiries.filter((q) => {
        const d = new Date(q.createdAt);
        return (
          d.getFullYear() === bucket.getFullYear() &&
          d.getMonth() === bucket.getMonth()
        );
      }).length,
    );
  }

  const kpis: DashboardKpi[] = [
    { icon: "inquiry", value: thisMonth, label: "Inquiries this month" },
    { icon: "bolt", value: newCount + following, label: "Awaiting follow-up" },
    { icon: "dollar", value: won, label: "Won" },
    { icon: "folder", value: total, label: "Total inquiries" },
  ];

  // Secondary metrics: recency, lead source split, and open pipeline value
  // (sum of intake estimates for leads not yet won or archived).
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const thisWeek = inquiries.filter(
    (q) => new Date(q.createdAt) >= weekAgo,
  ).length;
  const fromContact = inquiries.filter((q) => q.source === "contact").length;
  const fromIntake = inquiries.filter((q) => q.source === "intake").length;
  const pipelineValue = inquiries
    .filter(
      (q) =>
        q.source === "intake" &&
        (q.status === "new" || q.status === "warn") &&
        typeof q.estimate === "number",
    )
    .reduce((sum, q) => sum + (q.estimate ?? 0), 0);

  const secondary: DashboardStat[] = [
    { label: "New this week", value: thisWeek },
    { label: "From contact form", value: fromContact },
    { label: "From intake wizard", value: fromIntake },
    { label: "Open pipeline value", value: pipelineValue, prefix: "$" },
  ];

  const pipelineMax = Math.max(1, total);
  const pipeline: DashboardPipelineRow[] = [
    { label: "New", value: newCount, max: pipelineMax },
    { label: "Following up", value: following, max: pipelineMax },
    { label: "Won", value: won, max: pipelineMax },
  ];

  return {
    kpis,
    secondary,
    chart: { bars, months, max: Math.max(1, ...bars) },
    pipeline,
  };
}
