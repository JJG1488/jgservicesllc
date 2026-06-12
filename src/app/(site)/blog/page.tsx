import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/ui/reveal";
import { BlogCard } from "@/components/sections/blog/blog-card";
import { getAllPosts } from "@/lib/mdx";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Notes on web development, performance, and running a software project well.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        breadcrumb="Blog"
        kicker="Field notes"
        title="Web development,"
        titleAccent="demystified."
        lead="Plain-English notes on performance, process, and getting software projects right."
      />

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="wrap">
          {posts.length > 0 ? (
            <div className="blog-grid">
              {posts.map((post, i) => (
                <BlogCard key={post.slug} post={post} delay={(i % 3) * 80} />
              ))}
            </div>
          ) : (
            <p className="mono py-16 text-center text-sm text-ink-400">
              No posts yet — check back soon.
            </p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="surface surface-strong cta-band">
            <h2 className="display">
              Have a topic you want <span className="grad-text">covered</span>?
            </h2>
            <p>Ask a question and it might become the next post.</p>
            <Link href="/contact" className="btn btn-primary">
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
