"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import "./schedule.css";

/* Client island for the schedule page: 14-day date picker (starting
   tomorrow, weekends shown but disabled — matching the prototype's inline
   script), time-slot grid, live booking summary, and a client-side
   confirmation state. No backend: confirming simply swaps the summary
   card for the prototype's "You're booked!" message. */

const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DOW_FULL = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MON = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const MON_FULL = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const TIMES = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

interface DayCell {
  date: Date;
  off: boolean;
}

/* Prototype rule: next 14 days starting tomorrow; Saturdays and Sundays
   are rendered but unavailable. */
function buildDays(): DayCell[] {
  const list: DayCell[] = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (list.length < 14) {
    d.setDate(d.getDate() + 1);
    const wd = d.getDay();
    list.push({ date: new Date(d), off: wd === 0 || wd === 6 });
  }
  return list;
}

function fmt(dt: Date): string {
  return `${DOW[dt.getDay()]}, ${MON[dt.getMonth()]} ${dt.getDate()}`;
}

function fmtFull(dt: Date): string {
  return `${DOW_FULL[dt.getDay()]}, ${MON_FULL[dt.getMonth()]} ${dt.getDate()}`;
}

const noopSubscribe = () => () => {};

export function ScheduleBooking() {
  /* Days depend on the visitor's clock, so they are only computed on the
     client (after hydration) to keep server and client markup identical. */
  const hydrated = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
  const days = useMemo<DayCell[] | null>(
    () => (hydrated ? buildDays() : null),
    [hydrated],
  );
  const [selIdx, setSelIdx] = useState<number | null>(null);
  const [selTime, setSelTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const selDate = days && selIdx !== null ? days[selIdx].date : null;

  return (
    <div className="sched-grid">
      <div className="surface" style={{ padding: "1.8rem" }}>
        <h2
          id="day-heading"
          style={{
            fontSize: "1.05rem",
            color: "var(--ink-100)",
            margin: "0 0 1rem",
            fontWeight: 600,
            fontFamily: "var(--font-ui)",
          }}
        >
          Choose a day
        </h2>
        <div className="cal-days" role="group" aria-labelledby="day-heading">
          {days
            ? days.map((it, i) => (
                <button
                  key={it.date.toISOString()}
                  type="button"
                  className={cn("cal-day", i === selIdx && "sel")}
                  disabled={it.off || confirmed}
                  aria-pressed={i === selIdx}
                  aria-label={fmtFull(it.date)}
                  onClick={() => setSelIdx(i)}
                >
                  <span className="dow">{DOW[it.date.getDay()]}</span>
                  <span className="dnum">{it.date.getDate()}</span>
                </button>
              ))
            : Array.from({ length: 14 }, (_, i) => (
                <div key={i} className="cal-day" aria-hidden="true">
                  <span className="dow">&nbsp;</span>
                  <span className="dnum">&nbsp;</span>
                </div>
              ))}
        </div>

        <h2
          id="time-heading"
          style={{
            fontSize: "1.05rem",
            color: "var(--ink-100)",
            margin: "1.6rem 0 1rem",
            fontWeight: 600,
            fontFamily: "var(--font-ui)",
          }}
        >
          Available times{" "}
          <span
            className="mono"
            style={{ fontSize: "0.74rem", color: "var(--ink-400)" }}
          >
            · ET
          </span>
        </h2>
        <div className="slots" role="group" aria-labelledby="time-heading">
          {TIMES.map((t) => (
            <button
              key={t}
              type="button"
              className={cn("slot", t === selTime && "sel")}
              disabled={confirmed}
              aria-pressed={t === selTime}
              onClick={() => setSelTime(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <aside
        className="surface surface-strong"
        style={{ padding: "1.8rem", position: "sticky", top: 96 }}
        aria-live="polite"
      >
        {confirmed && selDate && selTime ? (
          <div className="form-ok">
            <div className="ic">
              <Icon name="check" size={30} sw={2} />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "1.3rem",
                color: "var(--ink-100)",
                margin: "0.4rem 0 0",
                fontWeight: 700,
              }}
            >
              You&apos;re booked!
            </h2>
            <p style={{ color: "var(--ink-300)", margin: 0 }}>
              {fmt(selDate)} at {selTime} ET. A calendar invite is on its way
              to your inbox.
            </p>
            <Link href="/" className="btn btn-ghost" style={{ marginTop: "0.6rem" }}>
              Back to home
            </Link>
          </div>
        ) : (
          <>
            <h2
              style={{
                fontSize: "1.1rem",
                color: "var(--ink-100)",
                margin: "0 0 1.2rem",
                fontWeight: 600,
                fontFamily: "var(--font-ui)",
              }}
            >
              Your booking
            </h2>
            <div className="summary-row">
              <span className="k">Type</span>
              <span className="v">Free consultation</span>
            </div>
            <div className="summary-row">
              <span className="k">Length</span>
              <span className="v">30 minutes</span>
            </div>
            <div className="summary-row">
              <span className="k">Date</span>
              <span className="v">{selDate ? fmt(selDate) : "—"}</span>
            </div>
            <div className="summary-row">
              <span className="k">Time</span>
              <span className="v">{selTime ?? "—"}</span>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              style={{
                width: "100%",
                justifyContent: "center",
                marginTop: "1.4rem",
              }}
              disabled={!(selDate && selTime)}
              onClick={() => setConfirmed(true)}
            >
              Confirm booking
            </button>
            <p
              className="form-note"
              style={{ textAlign: "center", marginTop: "0.9rem" }}
            >
              Prefer email?{" "}
              <Link href="/contact" style={{ color: "var(--sapphire-300)" }}>
                Send a message instead
              </Link>
            </p>
          </>
        )}
      </aside>
    </div>
  );
}
