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

export interface DashboardStats {
  kpis: DashboardKpi[];
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

  const pipelineMax = Math.max(1, total);
  const pipeline: DashboardPipelineRow[] = [
    { label: "New", value: newCount, max: pipelineMax },
    { label: "Following up", value: following, max: pipelineMax },
    { label: "Won", value: won, max: pipelineMax },
  ];

  return { kpis, chart: { bars, months, max: Math.max(1, ...bars) }, pipeline };
}
