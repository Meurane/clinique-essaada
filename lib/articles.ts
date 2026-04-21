import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import { marked } from "marked";

export type ArticleFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  readingTime: number;
  tags?: string[];
  cover?: string;
};

export type Article = ArticleFrontmatter & {
  slug: string;
  html: string;
  raw: string;
};

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function readArticleFile(filename: string): Article {
  const slug = filename.replace(/\.md$/, "");
  const filePath = path.join(ARTICLES_DIR, filename);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  const fm: ArticleFrontmatter = {
    title: String(data.title ?? "Sans titre"),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date ?? ""),
    category: String(data.category ?? "Général"),
    author: String(data.author ?? "Clinique ESSAADA"),
    readingTime: Number(data.readingTime ?? 5),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    cover: data.cover ? String(data.cover) : undefined,
  };

  return {
    ...fm,
    slug,
    raw: content,
    html: marked.parse(content, { async: false }) as string,
  };
}

export const getAllArticles = cache((): Article[] => {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"));
  return files
    .map(readArticleFile)
    .sort((a, b) => {
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      return (Number.isNaN(db) ? 0 : db) - (Number.isNaN(da) ? 0 : da);
    });
});

export const getArticleBySlug = cache((slug: string): Article | undefined => {
  return getAllArticles().find((a) => a.slug === slug);
});

export function getArticleSlugs(): string[] {
  return getAllArticles().map((a) => a.slug);
}

export function formatArticleDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
