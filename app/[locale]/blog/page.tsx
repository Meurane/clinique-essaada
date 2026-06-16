import type { Metadata } from "next";
import { localizedAlternates } from "@/lib/i18n-meta";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { getAllArticles, formatArticleDate } from "@/lib/articles";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: localizedAlternates(locale, "/blog"),
    openGraph: {
      type: "website",
      url: `${site.url}/blog`,
      title: t("meta.ogTitle"),
      description: t("meta.ogDescription"),
    },
  };
}

export default function BlogIndexPage() {
  const t = useTranslations("blog");
  const articles = getAllArticles();
  const crumbs = [
    { name: t("breadcrumb.home"), url: "/" },
    { name: t("breadcrumb.blog"), url: "/blog" },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
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

      <section className="section-padding">
        <div className="container-custom">
          {articles.length === 0 ? (
            <div className="max-w-xl mx-auto text-center py-20">
              <p className="text-lg text-neutral-700">
                {t("empty.title")}
              </p>
              <p className="mt-2 text-sm text-neutral-500">
                {t.rich("empty.body", {
                  faq: (chunks) => (
                    <Link href="/faq" className="underline text-primary-700">
                      {chunks}
                    </Link>
                  ),
                  glossary: (chunks) => (
                    <Link href="/glossaire" className="underline text-primary-700">
                      {chunks}
                    </Link>
                  ),
                })}
              </p>
            </div>
          ) : (
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link href={`/blog/${a.slug}`} className="block group h-full">
                    <Card className="h-full flex flex-col transition-transform duration-200 group-hover:-translate-y-0.5">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary-700 mb-3">
                        <span className="px-2 py-1 rounded-md bg-primary-50">
                          {a.category}
                        </span>
                        <span className="text-neutral-500 normal-case font-normal tracking-normal">
                          {formatArticleDate(a.date)}
                        </span>
                      </div>
                      <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2 leading-snug group-hover:text-primary-700 transition-colors">
                        {a.title}
                      </h2>
                      <p className="text-neutral-700 leading-relaxed flex-1">
                        {a.excerpt}
                      </p>
                      <div className="mt-5 pt-4 border-t border-neutral-150 flex items-center justify-between text-sm text-neutral-600">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                          {t("readingTime", { minutes: a.readingTime })}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-primary-700 font-semibold group-hover:gap-2.5 transition-all">
                          {t("read")}
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </Card>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
