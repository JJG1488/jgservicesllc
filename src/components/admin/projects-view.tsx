"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";
import type { ProjectStatus } from "@/types";

/* Status → badge class (mirrors the inquiry badge palette):
   Live = emerald (success), In progress = amber, Maintenance = sapphire. */
const STATUS_BADGE: Record<ProjectStatus, string> = {
  Live: "won",
  "In progress": "warn",
  Maintenance: "new",
};

/* Projects: portfolio status cards. Project content AND status come from the
   typed data layer (src/data/projects.ts). */
export function ProjectsView() {
  return (
    <div className="proj-grid">
      {projects.map((project, i) => {
        const status: ProjectStatus = project.status ?? "Live";
        return (
          <Reveal
            as="article"
            key={project.id}
            delay={i * 60}
            className="surface proj-card relative"
          >
            {project.image ? (
              <div className="proj-shot">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  sizes="(max-width: 880px) 100vw, (max-width: 1040px) 50vw, 33vw"
                />
              </div>
            ) : (
              <div className="proj-shot ph">
                <span className="mono">{project.title}</span>
              </div>
            )}
            <span className={`badge ${STATUS_BADGE[status]} proj-cat`}>{status}</span>
            <div className="proj-body">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
              <div className="proj-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="proj-actions">
                <a
                  className="btn btn-ghost"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
