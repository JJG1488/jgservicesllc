import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import type { BlogPost } from "@/types";

/* "May 2026"-style date, matching the prototype's blog meta line.
   UTC keeps frontmatter dates like "2026-03-01" from shifting a day. */
function formatMonthYear(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

interface BlogCardProps {
  post: BlogPost;
  /** Reveal stagger delay in ms, mirroring the prototype's (i % 3) * 80. */
  delay?: number;
}

/* Blog index card: gradient cover with a mono category label (no cover
   images yet), then category/date/read-time meta, title, excerpt, and a
   read link. The whole card is one link target. */
export function BlogCard({ post, delay = 0 }: BlogCardProps) {
  const category = post.tags[0] ?? "Notes";
  const readTime = post.readingTime.replace(/ read$/, "");

  return (
    <Reveal as="article" className="surface lift blog-card" delay={delay}>
      <Link href={`/blog/${post.slug}`} className="flex flex-1 flex-col">
        <div className="cover" aria-hidden="true">
          <span className="mono">{category.toUpperCase()}</span>
        </div>
        <div className="b-body">
          <span className="blog-meta">
            {category} &middot; {formatMonthYear(post.date)} &middot; {readTime}
          </span>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <span className="mono text-[0.82rem] text-sapphire-300">
            Read article &rarr;
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
