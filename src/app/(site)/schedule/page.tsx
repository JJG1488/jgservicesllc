import { PageHeader } from "@/components/layout/page-header";
import { ScheduleBooking } from "@/components/sections/schedule/schedule-booking";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Schedule a Call",
  description: "Book a free consultation call with JG Services LLC.",
  path: "/schedule",
});

export default function SchedulePage() {
  return (
    <>
      <PageHeader
        breadcrumb="Schedule"
        kicker="Free consultation · 30 min"
        title="Book a"
        titleAccent="call."
        lead="Pick a day and time that works for you. We'll send a calendar invite with a video link — no charge, no pressure."
      />
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="wrap">
          <ScheduleBooking />
        </div>
      </section>
    </>
  );
}
