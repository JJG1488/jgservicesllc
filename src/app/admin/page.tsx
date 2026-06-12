import { AdminViews } from "@/components/admin/admin-views";

/* Single admin page; the four views (Dashboard / Inquiries / Projects /
   Settings) switch client-side via the shell's sidebar. All data is mock
   (see src/components/admin/mock-data.ts) — presentational only — wire
   to Supabase with RLS. Metadata (incl. robots noindex) is on layout.tsx. */
export default function AdminPage() {
  return <AdminViews />;
}
