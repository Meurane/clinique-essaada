import { MetadataRoute } from "next";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r.href === "/" ? "" : r.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority ?? 0.5,
  }));
}
