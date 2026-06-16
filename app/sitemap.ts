import { MetadataRoute } from "next";
import { sitemapRoutes } from "@/lib/routes";
import { site } from "@/lib/site";
import { localePath } from "@/lib/i18n-meta";
import { glossaire } from "@/content/glossaire";
import { getAllArticles } from "@/lib/articles";

// hreflang fr/en/ar (+ x-default = fr) pour une page donnée, cohérent avec les
// `alternates` posés sur chaque page via localizedAlternates().
function alternatesFor(pathname: string) {
  return {
    languages: {
      fr: `${site.url}${localePath("fr", pathname)}`,
      en: `${site.url}${localePath("en", pathname)}`,
      ar: `${site.url}${localePath("ar", pathname)}`,
      "x-default": `${site.url}${localePath("fr", pathname)}`,
    } as Record<string, string>,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const mainRoutes: MetadataRoute.Sitemap = sitemapRoutes.map((r) => ({
    url: `${site.url}${localePath("fr", r.href)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority ?? 0.5,
    alternates: alternatesFor(r.href),
  }));

  const glossaryPages: MetadataRoute.Sitemap = glossaire.map((t) => ({
    url: `${site.url}/glossaire/${t.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.4,
    alternates: alternatesFor(`/glossaire/${t.slug}`),
  }));

  const articlePages: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${site.url}/blog/${a.slug}`,
    lastModified: a.date ? new Date(a.date) : undefined,
    changeFrequency: "yearly",
    priority: 0.7,
    alternates: alternatesFor(`/blog/${a.slug}`),
  }));

  return [...mainRoutes, ...glossaryPages, ...articlePages];
}
