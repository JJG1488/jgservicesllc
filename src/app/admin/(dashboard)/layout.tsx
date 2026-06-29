import { AdminShell } from "@/components/admin/admin-shell";
import { requireAdmin } from "@/lib/admin-auth";

/* Gated dashboard layout. Middleware is the first gate; this re-checks on the
   server (defense in depth) and wraps the authenticated chrome around every
   dashboard page. */
export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await requireAdmin();
  return <AdminShell>{children}</AdminShell>;
}
