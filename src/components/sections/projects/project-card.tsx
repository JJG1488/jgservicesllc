import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icons";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  /** Position in the rendered grid, used to stagger the reveal. */
  index?: number;
}

/* Portfolio card: 16/10 screenshot (or gradient placeholder), floating
   category chip, title, description, tag chips, and live-site actions. */
export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Reveal as="article" delay={index * 60} className="surface lift proj-card relative">
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
      <span className="chip proj-cat">{project.category}</span>
      <div className="proj-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="proj-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
        <div className="proj-actions">
          <a
            className="btn btn-primary"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View live
            <Icon name="ext" size={15} />
          </a>
          <Link className="btn btn-ghost" href="/intake">
            Build similar
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
