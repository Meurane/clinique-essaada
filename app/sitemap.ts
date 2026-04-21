import { MetadataRoute } from "next";
import { sitemapRoutes } from "@/lib/routes";
import { site } from "@/lib/site";
import { glossaire } from "@/content/glossaire";
import { getAllArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const mainRoutes: MetadataRoute.Sitemap = sitemapRoutes.map((r) => ({
    url: `${site.url}${r.href === "/" ? "" : r.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority ?? 0.5,
  }));

  const glossaryPages: MetadataRoute.Sitemap = glossaire.map((t) => ({
    url: `${site.url}/glossaire/${t.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  const articlePages: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${site.url}/blog/${a.slug}`,
    lastModified: a.date ? new Date(a.date) : undefined,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...mainRoutes, ...glossaryPages, ...articlePages];
}
