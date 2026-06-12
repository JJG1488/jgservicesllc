import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import type { BlogPost } from "@/types";

/* "March 1, 2026"-style date for the post meta line. UTC keeps
   frontmatter dates like "2026-03-01" from shifting a day. */
function formatLongDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/* Post-page header: three-level breadcrumb (Home / Blog / post), category
   kicker, Playfair title, and a mono meta line. Built on the same
   .page-head/.breadcrumb classes as PageHeader, which only supports a
   single breadcrumb level. */
export function PostHeader({ post }: { post: BlogPost }) {
  const category = post.tags[0];

  return (
    <header className="page-head">
      <div className="wrap">
        <Reveal>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/blog">Blog</Link>
            <span className="sep">/</span>
            <span>{post.title}</span>
          </nav>
          {category && <span className="kicker">{category}</span>}
          <h1 className="display page-title">{post.title}</h1>
          <p className="blog-meta">
            {formatLongDate(post.date)} &middot; {post.readingTime} &middot; By{" "}
            {post.author}
          </p>
        </Reveal>
      </div>
    </header>
  );
}
