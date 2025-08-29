import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";

// MDX Plugins
import rehypePrism from "mdx-prism";         // For code highlighting
import rehypeRaw from "rehype-raw";          // ✅ To allow raw HTML in MDX
import remarkSlug from "remark-slug";
import remarkAutolinkHeadings from "remark-autolink-headings";
import remarkCodeTitles from "remark-code-titles";

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "data", type));
}

export async function getFileBySlug(type, slug) {
  const filePath = slug
    ? path.join(root, "data", type, `${slug}.mdx`)
    : path.join(root, "data", `${type}.mdx`);

  const source = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkAutolinkHeadings, remarkSlug, remarkCodeTitles],
      rehypePlugins: [rehypePrism, rehypeRaw], // ✅ Add rehypeRaw here
      format: "mdx", // ✅ Required by latest MDX
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, "data", type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "data", type, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
