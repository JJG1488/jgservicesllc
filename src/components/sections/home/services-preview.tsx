"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icons";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";
import { HomeSectionHead } from "./home-section-head";

interface ServiceCardProps {
  s: Service;
  open: boolean;
  onToggle: () => void;
}

function ServiceCard({ s, open, onToggle }: ServiceCardProps) {
  const panelId = `svc-expand-${s.id}`;
  return (
    <Reveal className={cn("surface lift svc-card", open && "open")}>
      {/* Mouse affordance only — the toggle button below is the
          keyboard/AT control for the same action. */}
      <div onClick={onToggle}>
        <div className="svc-icon">
          <Icon name={s.icon} size={26} />
        </div>
        <h3 className="svc-name">{s.title}</h3>
        <p className="svc-desc">{s.shortDescription}</p>
        <div className="svc-meta">
          <div className="cell">
            <div className="lbl">Timeline</div>
            <div className="val">{s.timeline}</div>
          </div>
          <div className="cell">
            <div className="lbl">Investment</div>
            <div className="val">{s.pricing}</div>
          </div>
        </div>
      </div>
      <div className="svc-expand" id={panelId}>
        <div>
          <ul className="svc-feat">
            {s.features.map((f) => (
              <li key={f}>
                <Icon name="check" size={16} /> <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="svc-chips">
            {s.tech.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="svc-toggle"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
      >
        {open ? "Show less" : "What's included"} <Icon name="chevron" size={16} />
      </button>
    </Reveal>
  );
}

export function ServicesPreview() {
  const [open, setOpen] = useState(0);
  return (
    <section id="services" className="section">
      <div className="wrap">
        <HomeSectionHead
          kicker="What we build"
          title={
            <>
              Services scoped to your <span className="grad-text">business</span>, not a template.
            </>
          }
          lead="Six ways we help businesses ship software that works — each with clear timelines and honest pricing."
        />
        <div className="svc-grid mt-12">
          {services.map((s, i) => (
            <ServiceCard
              key={s.id}
              s={s}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <Link href="/services" className="btn btn-ghost">
            All services <Icon name="arrow" size={18} className="arrow" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
