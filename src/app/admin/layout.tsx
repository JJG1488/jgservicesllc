import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/admin-shell";
import { createMetadata } from "@/lib/metadata";

/* Admin lives outside the (site) group on purpose: no marketing
   header/footer — the shell provides its own sidebar chrome. */

export const metadata: Metadata = {
  ...createMetadata({
    title: "Admin",
    description: "JG Services LLC admin dashboard.",
    path: "/admin",
  }),
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminShell>{children}</AdminShell>;
}
