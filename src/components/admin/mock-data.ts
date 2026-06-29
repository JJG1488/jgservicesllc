/* ============================================================
   ADMIN APPEARANCE PICKER DATA.

   Inquiries, dashboard stats, project status, and settings are all REAL now
   (Firestore / the typed data layer). What remains here is the option list for
   the Settings appearance pickers (theme + display font), lifted from the
   design handoff (docs/jg/.../admin.js).
   ============================================================ */

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
