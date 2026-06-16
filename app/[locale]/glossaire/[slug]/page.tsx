import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { glossaire, findTerm } from "@/content/glossaire";
import { site } from "@/lib/site";
import { breadcrumbSchema, definedTermSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return glossaire.map((t) => ({ slug: t.slug }));
}

type PageParams = Promise<{ slug: string; locale: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug, locale } = await params;
  const term = findTerm(slug);
  if (!term) return { title: "Terme introuvable" };

  const t = await getTranslations({ locale, namespace: "glossary" });

  const rawDesc = t(`terms.${term.slug}.definition`).replace(/\s+/g, " ").trim();
  const description =
    rawDesc.length > 160 ? rawDesc.slice(0, 157).trimEnd() + "…" : rawDesc;

  const canonical = `${site.url}/glossaire/${term.slug}`;
  const title = t(`terms.${term.slug}.question`);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: t("meta.ogTitleTerm", { title }),
      description,
    },
  };
}

export default async function GlossaireTermPage({ params }: { params: PageParams }) {
  const { slug, locale } = await params;
  const term = findTerm(slug);
  if (!term) notFound();

  const t = await getTranslations({ locale, namespace: "glossary" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const relatedEntries = (term.relatedTerms ?? [])
    .map((s) => findTerm(s))
    .filter((e): e is NonNullable<typeof e> => Boolean(e));

  const crumbs = [
    { name: t("breadcrumb.home"), url: "/" },
    { name: t("breadcrumb.glossary"), url: "/glossaire" },
    { name: t(`terms.${term.slug}.term`), url: `/glossaire/${term.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("term.eyebrow")}
        title={t(`terms.${term.slug}.term`)}
        subtitle={t("term.subtitle")}
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
            definedTermSchema({
              name: term.term,
              description: term.definition,
              slug: term.slug,
            }),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary-600 text-white grid place-items-center shrink-0">
              <BookOpen className="w-6 h-6" aria-hidden="true" />
            </div>
            <p className="text-lg md:text-xl text-neutral-800 leading-relaxed">
              {t(`terms.${term.slug}.definition`)}
            </p>
          </div>

          {relatedEntries.length > 0 && (
            <aside className="mt-12 pt-8 border-t border-neutral-150">
              <h2 className="font-display text-xl font-semibold text-neutral-900 mb-4">
                {t("relatedTerms")}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {relatedEntries.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/glossaire/${r.slug}`}
                      className="flex items-start gap-3 p-4 rounded-xl border border-neutral-150 bg-white hover:border-primary-300 hover:bg-primary-50/30 transition-colors"
                    >
                      <BookOpen
                        className="w-5 h-5 text-primary-700 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="font-display font-semibold text-neutral-900">
                          {t(`terms.${r.slug}.term`)}
                        </div>
                        <div className="text-sm text-neutral-600 line-clamp-2 mt-1">
                          {t(`terms.${r.slug}.definition`).slice(0, 110).trim()}…
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <div className="mt-10 pt-6 border-t border-neutral-150">
            <Link
              href="/glossaire"
              className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              {t("term.backToGlossary")}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-narrow text-center">
          <SectionHeader
            eyebrow={t("term.furtherEyebrow")}
            title={t("term.furtherTitle")}
            subtitle={t("term.furtherSubtitle")}
            align="center"
          />
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/services/consultation-nephrologie"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
            >
              {t("term.viewConsultation")}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/rendez-vous"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
            >
              {tc("bookAppointment")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
