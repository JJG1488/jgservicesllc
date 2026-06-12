"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { BrandMark } from "@/components/ui/brand-mark";
import { cn } from "@/lib/utils";
import { AdminIcon, type AdminIconName } from "./admin-icons";
import { AdminViewContext, ADMIN_TITLES, type AdminView } from "./view-context";

const NAV: { id: AdminView; label: string; icon: AdminIconName }[] = [
  { id: "dash", label: "Dashboard", icon: "dash" },
  { id: "inq", label: "Inquiries", icon: "inquiry" },
  { id: "proj", label: "Projects", icon: "folder" },
  { id: "set", label: "Settings", icon: "settings" },
];

/* Admin app shell: sidebar + top bar around the view container.
   Deliberately outside the (site) group — no marketing header/footer.
   Owns the active-view state shared with the page via AdminViewContext. */
export function AdminShell({ children }: { children: ReactNode }) {
  const [view, setView] = useState<AdminView>("dash");
  const { crumb, title } = ADMIN_TITLES[view];

  return (
    <AdminViewContext.Provider value={{ view, setView }}>
      <div className="admin">
        <aside className="admin-side surface" style={{ borderRadius: 0 }}>
          <Link href="/" className="brand">
            <BrandMark />
            <span className="brand-word grad-text">JG Admin</span>
          </Link>
          <nav aria-label="Admin sections" className="contents">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                className={cn("admin-nav min-h-11 text-left", view === item.id && "active")}
                aria-current={view === item.id ? "true" : undefined}
                onClick={() => setView(item.id)}
              >
                <AdminIcon name={item.icon} size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="mt-auto">
            <Link href="/" className="admin-nav min-h-11">
              <AdminIcon name="back" size={18} />
              <span>Back to site</span>
            </Link>
          </div>
        </aside>

        <main className="admin-main">
          <div className="admin-top">
            <div>
              <div className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-ink-400">
                {crumb}
              </div>
              <h1 className="display mt-[0.3rem] text-[1.9rem]">{title}</h1>
            </div>
            <div className="flex items-center gap-[0.7rem]">
              <input
                type="search"
                className="input"
                placeholder="Search..."
                aria-label="Search"
                style={{ width: 200, padding: "0.6rem 0.9rem" }}
              />
              <div
                className="grid h-[42px] w-[42px] place-items-center rounded-full font-bold text-white"
                style={{ background: "var(--grad-brand)" }}
                aria-hidden="true"
              >
                JG
              </div>
            </div>
          </div>
          {children}
        </main>
      </div>
    </AdminViewContext.Provider>
  );
}
