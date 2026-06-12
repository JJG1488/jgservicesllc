"use client";

import { createContext, useContext } from "react";

/* Client-side view switching for the single-page admin shell.
   The sidebar (in layout) and the views (in page) share this context. */

export type AdminView = "dash" | "inq" | "proj" | "set";

export const ADMIN_TITLES: Record<AdminView, { crumb: string; title: string }> = {
  dash: { crumb: "Dashboard", title: "Welcome back, James" },
  inq: { crumb: "Inquiries", title: "Project inquiries" },
  proj: { crumb: "Projects", title: "Your portfolio" },
  set: { crumb: "Settings", title: "Account & appearance" },
};

interface AdminViewState {
  view: AdminView;
  setView: (view: AdminView) => void;
}

export const AdminViewContext = createContext<AdminViewState | null>(null);

export function useAdminView(): AdminViewState {
  const ctx = useContext(AdminViewContext);
  if (!ctx) {
    throw new Error("useAdminView must be used within <AdminShell>");
  }
  return ctx;
}
