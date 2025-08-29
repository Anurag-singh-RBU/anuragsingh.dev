import { MDXRemote } from "next-mdx-remote";
import SnippetLayout from "@/layouts/snippets";
import MDXComponents from "@/components/MDXComponents";

export default function Snippet({ mdxSource, frontMatter }) {
  return (
    <SnippetLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </SnippetLayout>
  );
}

export async function getStaticPaths() {
  const snippets = await getFiles("snippets");

  return {
    paths: snippets.map((s) => ({
      params: { slug: s.replace(/\.mdx/, "") },
    })),
    fallback: false,
  };
}

