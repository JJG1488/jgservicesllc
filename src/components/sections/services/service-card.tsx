"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

/* Expandable service card (.svc-card). Mirrors the prototype: cards
   toggle independently of one another. The .svc-toggle button owns the
   toggle (with aria-expanded) for keyboard and assistive tech; the
   article's onClick is a pointer-only convenience that ignores clicks
   originating on interactive elements so the button never double-fires. */
export function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggle = () => setOpen((v) => !v);

  return (
    <article
      className={cn("surface lift svc-card h-full", open && "open")}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button, a")) return;
        toggle();
      }}
    >
      <div className="svc-head">
        <div className="svc-icon">
          <Icon name={service.icon} size={26} />
        </div>
        <h3 className="svc-name">{service.title}</h3>
        <p className="svc-desc">{service.shortDescription}</p>
        <div className="svc-meta">
          <div className="cell">
            <div className="lbl">Timeline</div>
            <div className="val">{service.timeline}</div>
          </div>
          <div className="cell">
            <div className="lbl">Investment</div>
            <div className="val">{service.pricing}</div>
          </div>
        </div>
      </div>

      <div className="svc-expand" id={panelId} aria-hidden={!open}>
        <div>
          <ul className="svc-feat">
            {service.features.map((feature) => (
              <li key={feature}>
                <Icon name="check" size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="svc-chips">
            {service.tech.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="svc-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
      >
        {open ? "Show less" : "What's included"}
        <Icon name="chevron" size={16} />
      </button>
    </article>
  );
}
