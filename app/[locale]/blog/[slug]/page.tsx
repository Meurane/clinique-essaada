import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ConversionFooterCTA } from "@/components/sections/ConversionFooterCTA";
import {
  getAllArticles,
  getArticleBySlug,
  getArticleSlugs,
  formatArticleDate,
} from "@/lib/articles";
import { site } from "@/lib/site";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

type PageParams = Promise<{ slug: string; locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    const t = await getTranslations({ locale, namespace: "blog" });
    return { title: t("meta.notFound") };
  }

  const description =
    article.excerpt.length > 160
      ? article.excerpt.slice(0, 157).trimEnd() + "…"
      : article.excerpt;

  const canonical = `${site.url}/blog/${article.slug}`;

  return {
    title: article.title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: article.title,
      description,
      publishedTime: article.date,
      authors: [article.author],
      section: article.category,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: PageParams;
}) {
  const { slug, locale } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const t = await getTranslations({ locale, namespace: "blog" });

  const related = getAllArticles()
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  const crumbs = [
    { name: t("breadcrumb.home"), url: "/" },
    { name: t("breadcrumb.blog"), url: "/blog" },
    { name: article.title, url: `/blog/${article.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        subtitle={article.excerpt}
      />
      <div className="container-custom py-5">
        <Breadcrumb items={crumbs} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(crumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: article.title,
              description: article.excerpt,
              slug: article.slug,
              datePublished: article.date,
              author: article.author,
              category: article.category,
            }),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="flex flex-wrap items-center gap-5 text-sm text-neutral-600 mb-10 pb-6 border-b border-neutral-150">
            <span className="inline-flex items-center gap-1.5">
              <User className="w-4 h-4 text-primary-700" aria-hidden="true" />
              {article.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary-700" aria-hidden="true" />
              <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary-700" aria-hidden="true" />
              {t("readingTimeLong", { minutes: article.readingTime })}
            </span>
          </div>

          <article
            className="prose prose-neutral prose-lg max-w-none prose-headings:font-display prose-headings:text-neutral-900 prose-a:text-primary-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-900"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />

          {related.length > 0 && (
            <aside className="mt-16 pt-10 border-t border-neutral-150">
              <h2 className="font-display text-xl font-semibold text-neutral-900 mb-5">
                {t("alsoRead")}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="block p-5 rounded-xl border border-neutral-150 bg-white hover:border-primary-300 hover:bg-primary-50/30 transition-colors"
                    >
                      <div className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-2">
                        {r.category}
                      </div>
                      <div className="font-display font-semibold text-neutral-900 leading-snug">
                        {r.title}
                      </div>
                      <div className="mt-2 text-sm text-neutral-600 line-clamp-2">
                        {r.excerpt}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <div className="mt-12 pt-6 border-t border-neutral-150">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              {t("backToArticles")}
            </Link>
          </div>
        </div>
      </section>

      <ConversionFooterCTA
        variant="sand"
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        waMessage={t("cta.waMessage", { title: article.title })}
      />
    </>
  );
}
