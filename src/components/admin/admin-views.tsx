"use client";

import { DashboardView } from "./dashboard-view";
import { InquiriesView } from "./inquiries-view";
import { ProjectsView } from "./projects-view";
import { SettingsView } from "./settings-view";
import { useAdminView } from "./view-context";
import type { DashboardStats } from "@/lib/dashboard-stats";
import type { Inquiry } from "@/types";

/* Single-page view switcher: renders the active admin view. Inquiry data and
   derived stats come from the server page. Keyed remounts re-trigger the
   reveal/count-up animations per view. */
export function AdminViews({
  inquiries,
  stats,
}: {
  inquiries: Inquiry[];
  stats: DashboardStats;
}) {
  const { view } = useAdminView();

  switch (view) {
    case "inq":
      return <InquiriesView key="inq" inquiries={inquiries} />;
    case "proj":
      return <ProjectsView key="proj" />;
    case "set":
      return <SettingsView key="set" />;
    default:
      return <DashboardView key="dash" inquiries={inquiries} stats={stats} />;
  }
}
