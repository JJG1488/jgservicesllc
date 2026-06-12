"use client";

import { DashboardView } from "./dashboard-view";
import { InquiriesView } from "./inquiries-view";
import { ProjectsView } from "./projects-view";
import { SettingsView } from "./settings-view";
import { useAdminView } from "./view-context";

/* Single-page view switcher: renders the active admin view.
   Keyed remounts re-trigger the reveal/count-up animations per view. */
export function AdminViews() {
  const { view } = useAdminView();

  switch (view) {
    case "inq":
      return <InquiriesView key="inq" />;
    case "proj":
      return <ProjectsView key="proj" />;
    case "set":
      return <SettingsView key="set" />;
    default:
      return <DashboardView key="dash" />;
  }
}
