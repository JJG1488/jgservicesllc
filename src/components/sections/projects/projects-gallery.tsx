"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

/* Client island: category filter pills + the filterable project grid.
   Keying the grid by the active category re-runs the card reveals on
   each filter change, matching the prototype behaviour. */
export function ProjectsGallery() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="section-tight">
        <div className="wrap">
          <Reveal>
            <div className="pills" role="group" aria-label="Filter projects by category">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={cn("pill", category === active && "active")}
                  aria-pressed={category === active}
                  onClick={() => setActive(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="wrap">
          <p className="sr-only" role="status" aria-live="polite">
            {visible.length === 1 ? "1 project shown" : `${visible.length} projects shown`}
          </p>
          <div className="proj-grid" key={active}>
            {visible.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
