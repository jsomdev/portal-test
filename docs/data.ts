import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
const docsDirectory = join(process.cwd(), "docs");

export function getMarkdownByFileName(
  filename: string,
  fields: string[] = []
): {
  [key: string]: any;
} {
  const filenameWithoutExtension = filename.replace(/\.md$/, "");
  const fullPath = join(docsDirectory, `${filenameWithoutExtension}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: { [key: string]: any } = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = filenameWithoutExtension;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}
