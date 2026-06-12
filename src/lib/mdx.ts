import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost } from "@/types";

const contentDir = path.join(process.cwd(), "src/content/blog");

/** Slugs are filenames — restrict to safe characters (no path traversal). */
const SLUG_PATTERN = /^[a-zA-Z0-9_-]+$/;

function parsePost(slug: string, fullPath: string): BlogPost {
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    author: data.author || "JG Services",
    tags: data.tags || [],
    readingTime: stats.text,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) =>
    parsePost(file.replace(/\.mdx$/, ""), path.join(contentDir, file))
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!SLUG_PATTERN.test(slug)) return null;

  const fullPath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  return parsePost(slug, fullPath);
}
