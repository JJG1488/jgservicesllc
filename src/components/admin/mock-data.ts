/* ============================================================
   MOCK ADMIN DATA — presentational only.

   Inquiries and dashboard stats are now REAL (Firestore-backed — see
   src/lib/inquiries.ts and src/lib/dashboard-stats.ts). What remains here is
   sample content for the Projects status overlay and the Settings appearance
   pickers, lifted from the design handoff (docs/jg/.../admin.js). Wire these
   to the data layer when those views go live.
   ============================================================ */

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
