import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icons";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { HomeSectionHead } from "./home-section-head";

/* Portfolio bento: the six real projects, sized via Project.size
   ("lg" 2x2 / "wide" 2x1 / "" 1x1). Tiles without a shot render the
   gradient placeholder (.tile.ph) with a mono label. */
export function WorkBento() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <HomeSectionHead
          kicker="Selected work"
          title={
            <>
              Real products, <span className="grad-text">really shipped</span>.
            </>
          }
          lead="From AI SaaS to local business sites — a sample of what we've designed, built, and launched."
        />
        <Reveal className="bento mt-12">
          {projects.map((p) => (
            <a
              key={p.id}
              className={cn("tile", p.size, !p.image && "ph")}
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.image ? (
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes={
                    p.size === "lg" || p.size === "wide"
                      ? "(max-width: 1040px) 100vw, 50vw"
                      : "(max-width: 600px) 100vw, (max-width: 1040px) 50vw, 25vw"
                  }
                />
              ) : (
                <span className="mono text-[0.78rem] tracking-[0.12em] text-ink-200">
                  {p.title}
                </span>
              )}
              <div className="tile-veil" aria-hidden="true" />
              <div className="tile-meta">
                <div className="tag">{p.category}</div>
                <h4>{p.title}</h4>
                <p>{p.description}</p>
              </div>
            </a>
          ))}
        </Reveal>
        <Reveal className="mt-8 text-center">
          <Link href="/projects" className="btn btn-ghost">
            View all projects <Icon name="arrow" size={18} className="arrow" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
