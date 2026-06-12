import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "@/components/mdx/mdx-remote";
import { PostHeader } from "@/components/sections/blog/post-header";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icons";
import { createMetadata } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

/* Only slugs emitted by generateStaticParams are valid — 404 anything else. */
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <PostHeader post={post} />

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="wrap">
          <Reveal className="prose mx-auto [&_:not(pre)>code]:rounded-md [&_:not(pre)>code]:bg-bg-2 [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:font-mono [&_:not(pre)>code]:text-[0.85em] [&_:not(pre)>code]:text-sapphire-300 [&_strong]:text-ink-100">
            <MDXRemote source={post.content} />
          </Reveal>

          <Reveal className="mx-auto mt-12 max-w-[760px]">
            <Link href="/blog" className="btn btn-ghost">
              <Icon name="arrow" size={16} className="rotate-180" />
              Back to the blog
            </Link>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
