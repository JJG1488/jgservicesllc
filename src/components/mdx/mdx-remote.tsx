/* ============================================================================
   SECURITY: MDX source must be TRUSTED, repo-committed content only.
   `compile` + `run` turns the source string into executable JavaScript that
   runs in this server component. NEVER pass user-supplied or CMS-supplied
   strings to <MDXRemote> — that would be remote code execution.
   ========================================================================== */
import { compile, run } from "@mdx-js/mdx";
import * as jsxRuntime from "react/jsx-runtime";
import { Fragment } from "react";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { CodeBlock } from "./code-block";
import { Callout } from "./callout";

const components = {
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <CodeBlock {...props}>{children}</CodeBlock>
  ),
  Callout,
};

export async function MDXRemote({ source }: { source: string }) {
  const code = await compile(source, {
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  });

  const { default: MDXContent } = await run(String(code), {
    Fragment,
    jsx: (jsxRuntime as Record<string, unknown>).jsx as typeof jsxRuntime.jsx,
    jsxs: (jsxRuntime as Record<string, unknown>).jsxs as typeof jsxRuntime.jsxs,
    baseUrl: import.meta.url,
  });

  return <MDXContent components={components} />;
}
