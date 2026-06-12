import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/ui/reveal";
import { SignPanel } from "@/components/sections/contract/sign-panel";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Service Agreement",
  description: "Review and sign your web development service agreement with JG Services LLC.",
  path: "/contract",
});

const toc = [
  { href: "#parties", label: "Parties" },
  { href: "#scope", label: "1. Scope of Work" },
  { href: "#payment", label: "2. Payment" },
  { href: "#timeline", label: "3. Timeline" },
  { href: "#ip", label: "4. Ownership" },
  { href: "#support", label: "5. Support" },
  { href: "#termination", label: "6. Termination" },
  { href: "#sign", label: "Sign" },
];

const summary = [
  { k: "Project", v: "Custom Web Application" },
  { k: "Estimated investment", v: "$12,000 – $15,600" },
  { k: "Estimated timeline", v: "8–12 weeks" },
  { k: "Deposit to begin", v: "50% ($6,000)" },
];

export default function ContractPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Service Agreement"
        kicker="Sample agreement"
        title="Service"
        titleAccent="agreement."
        lead="A plain-English contract that protects both sides. This is a representative template — your actual agreement is tailored to your project scope."
      />

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="wrap">
          <div className="legal-layout">
            <Reveal className="surface toc">
              <nav aria-label="Agreement">
                <h5>Agreement</h5>
                {toc.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </Reveal>

            <div>
              <div className="surface" style={{ padding: "1.4rem 1.6rem", marginBottom: "1.4rem" }}>
                {summary.map((row, i) => (
                  <div
                    key={row.k}
                    className="summary-row"
                    style={i === summary.length - 1 ? { borderBottom: "none" } : undefined}
                  >
                    <span className="k">{row.k}</span>
                    <span className="v">{row.v}</span>
                  </div>
                ))}
              </div>

              <article className="prose">
                <h2 id="parties" className="scroll-mt-24">
                  Parties
                </h2>
                <p>
                  This agreement is between <b className="text-ink-100">JG Services LLC</b>{" "}
                  (&ldquo;Developer&rdquo;) and the undersigned (&ldquo;Client&rdquo;), effective on
                  the date of signature below.
                </p>

                <h2 id="scope" className="scroll-mt-24">
                  1. Scope of Work
                </h2>
                <p>
                  Developer will provide web development, design, and related technical services as
                  described in the project proposal. Work outside the agreed scope is handled as a
                  separate change request with its own estimate and approval.
                </p>

                <h2 id="payment" className="scroll-mt-24">
                  2. Payment
                </h2>
                <p>
                  A 50% deposit is required to begin work, with the remaining 50% due upon
                  completion and before launch. For projects over $15,000, payments may be split
                  into milestones tied to specific deliverables. Invoices are due within 14 days.
                </p>

                <h2 id="timeline" className="scroll-mt-24">
                  3. Timeline
                </h2>
                <p>
                  Timelines assume the Client provides content and feedback within 2–3 business days
                  during review periods. Delays caused by scope changes may adjust the schedule;
                  delays caused by the Developer do not incur additional cost.
                </p>

                <h2 id="ip" className="scroll-mt-24">
                  4. Ownership &amp; Intellectual Property
                </h2>
                <p>
                  Upon final payment, the Client owns 100% of the code, design files, and project
                  assets created specifically for the project, and the GitHub repository is
                  transferred to the Client. Reusable libraries used across projects remain the
                  Developer&apos;s property but do not limit the Client&apos;s ownership of their
                  site.
                </p>

                <h2 id="support" className="scroll-mt-24">
                  5. Support
                </h2>
                <p>
                  The project includes 30 days of free bug fixes after launch. Ongoing maintenance
                  is available under a separate monthly plan. Post-launch support outside the 30-day
                  window is billed at $150/hour.
                </p>

                <h2 id="termination" className="scroll-mt-24">
                  6. Termination
                </h2>
                <p>
                  Either party may terminate with written notice. Upon termination, the Client pays
                  for all work completed to date, and the Developer delivers all completed work and
                  assets.
                </p>
              </article>

              <div
                id="sign"
                className="surface surface-strong scroll-mt-24"
                style={{ padding: "1.8rem", marginTop: "1.6rem" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "1.2rem",
                    color: "var(--ink-100)",
                    margin: "0 0 1.2rem",
                    fontWeight: 700,
                  }}
                >
                  Sign the agreement
                </h3>
                <SignPanel />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
