"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/* Live cost & ROI estimator, ported 1:1 from the resources.html prototype.
   Formula (verbatim from the prototype's inline script):
     cost   = base + addons + max(0, pages - 5) * 350
     range  = cost … cost * 1.3
     weeks  = round(3 + cost / 1600), shown as weeks–(weeks + 4)
     deposit = cost / 2
     roi    = cost * 0.12 (illustrative monthly value) */

const PROJECT_TYPES = [
  { label: "Website", base: 3000 },
  { label: "Web app", base: 8000 },
  { label: "E-commerce", base: 8000 },
];

const ADDONS = [
  { label: "User accounts", cost: 2000 },
  { label: "Payments", cost: 1500 },
  { label: "SEO", cost: 1500 },
  { label: "Integrations", cost: 2000 },
];

const DEFAULT_PAGES = 8;
const INCLUDED_PAGES = 5;
const PER_PAGE_COST = 350;

function money(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

export function CostEstimator() {
  const [pages, setPages] = useState(DEFAULT_PAGES);
  const [typeIndex, setTypeIndex] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState<boolean[]>(() =>
    ADDONS.map(() => false),
  );

  const base = PROJECT_TYPES[typeIndex]?.base ?? PROJECT_TYPES[0].base;
  const addon = ADDONS.reduce(
    (sum, a, i) => sum + (selectedAddons[i] ? a.cost : 0),
    0,
  );

  const cost = base + addon + Math.max(0, pages - INCLUDED_PAGES) * PER_PAGE_COST;
  const lo = cost;
  const hi = cost * 1.3;
  const weeks = Math.round(3 + cost / 1600);

  function toggleAddon(index: number) {
    setSelectedAddons((prev) => prev.map((v, i) => (i === index ? !v : v)));
  }

  return (
    <section className="section" style={{ paddingTop: "1rem" }}>
      <div className="wrap">
        <Reveal>
          <div
            className="surface surface-strong"
            style={{ padding: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <span className="kicker">Cost &amp; ROI estimator</span>
                <h2
                  className="display"
                  style={{
                    fontSize: "1.8rem",
                    color: "var(--ink-100)",
                    margin: "0.8rem 0 1.4rem",
                  }}
                >
                  Estimate your project in 30 seconds.
                </h2>

                <div className="field">
                  <label htmlFor="pages">
                    Pages / screens:{" "}
                    <b style={{ color: "var(--ink-100)" }}>{pages}</b>
                  </label>
                  <input
                    className="range"
                    id="pages"
                    type="range"
                    min={1}
                    max={40}
                    value={pages}
                    onChange={(e) => setPages(Number(e.target.value))}
                  />
                </div>

                <div className="field">
                  <span
                    id="ptype-label"
                    className="text-[0.84rem] font-medium text-ink-200"
                  >
                    Project type
                  </span>
                  <div
                    className="pills"
                    role="group"
                    aria-labelledby="ptype-label"
                  >
                    {PROJECT_TYPES.map((t, i) => (
                      <button
                        key={t.label}
                        type="button"
                        className={cn("pill", i === typeIndex && "active")}
                        aria-pressed={i === typeIndex}
                        onClick={() => setTypeIndex(i)}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <span
                    id="addons-label"
                    className="text-[0.84rem] font-medium text-ink-200"
                  >
                    Add-ons
                  </span>
                  <div
                    className="pills"
                    role="group"
                    aria-labelledby="addons-label"
                  >
                    {ADDONS.map((a, i) => (
                      <button
                        key={a.label}
                        type="button"
                        className={cn("pill", selectedAddons[i] && "active")}
                        aria-pressed={!!selectedAddons[i]}
                        onClick={() => toggleAddon(i)}
                      >
                        {a.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="surface"
                style={{ padding: "1.8rem", textAlign: "center" }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: "0.74rem",
                    letterSpacing: "0.12em",
                    color: "var(--ink-400)",
                    textTransform: "uppercase",
                  }}
                >
                  Estimated investment
                </div>
                <div aria-live="polite">
                  <div
                    className="display grad-text"
                    style={{ fontSize: "3rem", margin: "0.6rem 0" }}
                  >
                    {money(lo)}&ndash;{money(hi)}
                  </div>
                  <div className="summary-row">
                    <span className="k">Timeline</span>
                    <span className="v">
                      {weeks}&ndash;{weeks + 4} weeks
                    </span>
                  </div>
                  <div className="summary-row">
                    <span className="k">Deposit (50%)</span>
                    <span className="v">{money(lo / 2)}</span>
                  </div>
                  <div className="summary-row" style={{ borderBottom: "none" }}>
                    <span className="k">Est. monthly value*</span>
                    <span className="v">{money(cost * 0.12)}+</span>
                  </div>
                </div>
                <Link
                  href="/intake"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: "1.2rem",
                  }}
                >
                  Get a real quote
                </Link>
                <p
                  className="form-note"
                  style={{ marginTop: "0.7rem", fontSize: "0.74rem" }}
                >
                  *Illustrative, based on typical lead-gen uplift. Not a
                  guarantee.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
