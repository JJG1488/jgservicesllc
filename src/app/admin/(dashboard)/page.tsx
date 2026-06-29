import { AdminViews } from "@/components/admin/admin-views";
import { buildDashboardStats } from "@/lib/dashboard-stats";
import { inquiriesEnabled, listInquiries } from "@/lib/inquiries";
import type { Inquiry } from "@/types";

/* Reads cookies (auth) and live Firestore data — never statically prerendered.
   Stats are computed here on the server so no client component derives the
   current date (avoids hydration drift). */
export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  let inquiries: Inquiry[] = [];
  let dataError: string | null = null;

  if (inquiriesEnabled()) {
    try {
      inquiries = await listInquiries();
    } catch (error) {
      console.error("Admin: failed to load inquiries:", error);
      dataError =
        "Could not load inquiries from the database. Check the Firebase configuration.";
    }
  } else {
    dataError =
      "Storage is not configured — set the Firebase env vars to start capturing inquiries.";
  }

  const stats = buildDashboardStats(inquiries, new Date());

  return (
    <>
      {dataError && (
        <div
          className="surface mb-[1.2rem] p-[1rem]"
          role="alert"
          style={{ borderLeft: "3px solid #fcd34d" }}
        >
          <p className="m-0 text-ink-200">{dataError}</p>
        </div>
      )}
      <AdminViews inquiries={inquiries} stats={stats} />
    </>
  );
}
