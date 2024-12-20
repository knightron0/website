import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import { defineCollection, defineConfig, s } from "velite";

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

export const posts = defineCollection({
  name: "Post", // collection type name
  pattern: "*.mdx", // content files glob pattern
  schema: s
    .object({
      title: s.string().max(99), // Zod primitive type
      slug: s.path(), // validate format, unique in posts collection
      published: s.boolean().default(true),
      image: s.string(),
      date: s.isodate(),
      summary: s.string().max(999), // excerpt of markdown content
      body: s.mdx(), // transform markdown to html
      toc: s.toc(),
      raw: s.raw(),
    })
    // more additional fields (computed fields)
    .transform((data) => ({ ...data, permalink: `${data.slug}` })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    commonmark: true,
    gfm: true,
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      [rehypePrettyCode, { theme: "one-dark-pro" }],
    ],
    remarkPlugins: [remarkMath],
  },
});
