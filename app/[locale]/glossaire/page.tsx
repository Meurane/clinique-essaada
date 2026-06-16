import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import {
  glossaire,
  glossaireByLetter,
  glossaireLetters,
  findTerm,
} from "@/content/glossaire";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "glossary" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: { canonical: `${site.url}/glossaire` },
    openGraph: {
      title: t("meta.ogTitle"),
      description: t("meta.ogDescription"),
    },
  };
}

export default function GlossairePage() {
  const t = useTranslations("glossary");
  const tc = useTranslations("common");
  const crumbs = [
    { name: t("breadcrumb.home"), url: "/" },
    { name: t("breadcrumb.glossary"), url: "/glossaire" },
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
          <nav
            aria-label={t("index.navAria")}
            className="mb-10 flex flex-wrap gap-2 items-center p-4 rounded-2xl bg-sand-50 border border-sand-200"
          >
            <span className="text-sm font-semibold text-neutral-700 mr-2">
              {t("index.goTo")}
            </span>
            {glossaireLetters.map((letter) => (
              <a
                key={letter}
                href={`#lettre-${letter}`}
                className="w-9 h-9 grid place-items-center rounded-lg bg-white border border-neutral-200 text-primary-700 font-display font-semibold hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-colors"
                aria-label={t("index.letterAria", { letter })}
              >
                {letter}
              </a>
            ))}
            <span className="ml-auto text-sm text-neutral-600 hidden sm:inline">
              {t("index.entriesCount", { count: glossaire.length })}
            </span>
          </nav>

          <div className="space-y-12">
            {glossaireLetters.map((letter) => (
              <section
                key={letter}
                id={`lettre-${letter}`}
                className="scroll-mt-24"
                aria-labelledby={`heading-${letter}`}
              >
                <h2
                  id={`heading-${letter}`}
                  className="font-display text-5xl md:text-6xl font-bold text-sand-500 mb-6"
                  aria-hidden="true"
                >
                  {letter}
                </h2>
                <ul className="grid md:grid-cols-2 gap-5">
                  {glossaireByLetter[letter].map((entry) => (
                    <li key={entry.slug} id={entry.slug} className="scroll-mt-24">
                      <Card className="h-full flex flex-col">
                        <div className="flex items-start gap-3 mb-3">
                          <BookOpen
                            className="w-5 h-5 text-primary-700 shrink-0 mt-1"
                            aria-hidden="true"
                          />
                          <h3 className="font-display text-xl font-semibold leading-tight">
                            <Link
                              href={`/glossaire/${entry.slug}`}
                              className="text-neutral-900 hover:text-primary-700 transition-colors"
                            >
                              {t(`terms.${entry.slug}.term`)}
                            </Link>
                          </h3>
                        </div>
                        <p className="text-neutral-700 leading-relaxed flex-1">
                          {t(`terms.${entry.slug}.definition`)}
                        </p>
                        <Link
                          href={`/glossaire/${entry.slug}`}
                          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:gap-2 transition-all"
                          aria-label={t("card.dedicatedPageAria", {
                            term: t(`terms.${entry.slug}.term`),
                          })}
                        >
                          {t("card.dedicatedPage")}
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                        {entry.relatedTerms && entry.relatedTerms.length > 0 && (
                          <div className="mt-5 pt-5 border-t border-neutral-150">
                            <div className="text-xs font-semibold tracking-wide text-neutral-500 mb-2">
                              {t("relatedTerms")}
                            </div>
                            <ul className="flex flex-wrap gap-2">
                              {entry.relatedTerms.map((slug) => {
                                const rel = findTerm(slug);
                                if (!rel) return null;
                                return (
                                  <li key={slug}>
                                    <Link
                                      href={`/glossaire/${slug}`}
                                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sand-50 text-primary-700 text-sm hover:bg-sand-100 transition-colors"
                                    >
                                      {t(`terms.${rel.slug}.term`)}
                                      <ArrowUpRight
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                      />
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </Card>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-16 p-6 rounded-2xl bg-primary-700 text-white max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-semibold mb-3 text-white">
              {t("ctaBlock.title")}
            </h2>
            <p className="text-primary-100 mb-5 leading-relaxed">
              {t("ctaBlock.body")}
            </p>
            <Link
              href="/rendez-vous"
              className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 px-5 py-3 rounded-full font-semibold min-h-[48px] transition-colors"
            >
              {tc("bookAppointment")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
