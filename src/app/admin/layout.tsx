import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

/* Base admin layout: metadata + noindex for everything under /admin (the
   login page and the gated dashboard alike). The authenticated chrome
   (sidebar/top bar) lives in the (dashboard) group's layout so the login
   page renders bare. Admin lives outside the (site) group on purpose —
   no marketing header/footer. */

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
  return <>{children}</>;
}
