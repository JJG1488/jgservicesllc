/* ============================================================
   MOCK ADMIN DATA — presentational only — wire to Supabase with RLS.

   Every value in this file is sample content lifted verbatim from the
   design handoff (docs/jg/design_handoff_site_redesign/admin.js).
   Nothing here is fetched, persisted, or real. When the backend lands,
   replace these constants with Supabase queries guarded by row-level
   security and delete this file.
   ============================================================ */

export type InquiryStatus = "new" | "won" | "warn" | "muted";

export interface MockInquiry {
  name: string;
  type: string;
  budget: string;
  date: string;
  status: InquiryStatus;
}

export const MOCK_INQUIRIES: MockInquiry[] = [
  { name: "Maria Chen", type: "Web app", budget: "$15k-25k", date: "Jun 2", status: "new" },
  { name: "Devon Ruiz", type: "E-commerce", budget: "$8k-15k", date: "Jun 1", status: "new" },
  { name: "A&M Construction", type: "Website", budget: "$3k-8k", date: "May 29", status: "won" },
  { name: "Priya Nair", type: "SEO", budget: "$1.5k+", date: "May 27", status: "warn" },
  { name: "Greencare Pros", type: "Web app", budget: "$15k+", date: "May 24", status: "won" },
  { name: "Tom Becker", type: "Maintenance", budget: "$300/mo", date: "May 22", status: "muted" },
];

export const MOCK_STATUS_LABEL: Record<InquiryStatus, string> = {
  new: "New",
  won: "Won",
  warn: "Following up",
  muted: "Archived",
};

export interface MockKpi {
  icon: "inquiry" | "folder" | "dollar" | "bolt";
  value: number;
  label: string;
  delta?: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export const MOCK_KPIS: MockKpi[] = [
  { icon: "inquiry", value: 14, label: "Inquiries this month", delta: "+22%" },
  { icon: "folder", value: 5, label: "Active projects", delta: "+1" },
  {
    icon: "dollar",
    value: 23.8,
    label: "Revenue MTD (k)",
    delta: "+18%",
    decimals: 1,
    prefix: "$",
    suffix: "k",
  },
  { icon: "bolt", value: 8, label: "Avg response (hrs)" },
];

export const MOCK_CHART = {
  bars: [12, 9, 15, 11, 18, 14],
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  max: 18,
};

export const MOCK_PIPELINE = [
  { label: "Qualified leads", value: 9, max: 12 },
  { label: "Proposals out", value: 4, max: 12 },
  { label: "Won this quarter", value: 6, max: 12 },
];

/* Index-aligned with the projects array in @/data/projects. */
export const MOCK_PROJECT_STATUS: ("Live" | "In progress")[] = [
  "Live",
  "Live",
  "Live",
  "Live",
  "In progress",
  "Live",
];

/* Theme picker options. The literal hex pairs are picker DATA from the
   prototype's admin.js (user-selectable theme values written to
   --accent-a/--accent-b at runtime) — not component styling. */
export const MOCK_THEMES = [
  { name: "Sapphire / Amethyst", a: "#2563eb", b: "#9333ea" },
  { name: "Indigo / Cyan", a: "#4f46e5", b: "#06b6d4" },
  { name: "Violet / Magenta", a: "#7c3aed", b: "#db2777" },
  { name: "Emerald / Sapphire", a: "#059669", b: "#2563eb" },
];

/* Display-font options resolve through the next/font CSS variables set
   on <html> (raw family names alone would miss the subsetted fonts). */
export const MOCK_FONTS = [
  { name: "Playfair", stack: 'var(--font-playfair), "Playfair Display", Georgia, serif' },
  { name: "Sora", stack: 'var(--font-sora), "Sora", system-ui, sans-serif' },
];
