import type { Metadata } from "next";
import { localizedAlternates } from "@/lib/i18n-meta";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, CheckCircle2, ClipboardList, Heart } from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

const timelineKeys = [
  "arrivee",
  "accueil",
  "consultation",
  "installation",
  "debut",
  "surveillance",
  "fin",
  "depart",
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "firstSession" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: localizedAlternates(locale, "/services/premiere-seance"),
  };
}

const avantKeys = ["bilan", "serologies", "ordonnance", "chifa", "identite"] as const;

const etapesData = [
  { k: "1", key: "arrivee", itemKeys: ["accueil", "constantes", "examen", "bio", "installation"] },
  { k: "2", key: "pendant", itemKeys: ["duree", "occupations", "surveillance", "cafe"] },
  { k: "3", key: "apres", itemKeys: ["repos", "controle", "rdv"] },
] as const;

export default function PremiereSeancePage() {
  const t = useTranslations("firstSession");
  return (
    <>
      <PhotoHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        photoIcon={ClipboardList}
        photoSrc="/images/clinique-reception-logo.webp"
        photoAlt={t("hero.photoAlt")}
        photoLabel={t("hero.photoLabel")}
        photoTag={t("hero.photoTag")}
      />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[
            { name: t("breadcrumb.home"), url: "/" },
            { name: t("breadcrumb.services"), url: "/services" },
            { name: t("breadcrumb.current"), url: "/services/premiere-seance" },
          ]}
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Services", url: "/services" },
              { name: "Votre 1ʳᵉ séance", url: "/services/premiere-seance" },
            ]),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <SectionHeader
              eyebrow={t("documents.eyebrow")}
              title={t("documents.title")}
            />
            <ul className="space-y-3">
              {avantKeys.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-800">{t(`documents.items.${key}`)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-neutral-700 leading-relaxed">
              {t("documents.tip")}
            </p>
          </div>

          <div className="md:col-span-2 space-y-5">
            <div className="bg-sand-50 rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <ClipboardList className="w-6 h-6 text-primary-700 shrink-0" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-neutral-900">
                  {t("passage.title")}
                </h3>
              </div>
              <p className="text-neutral-700">
                {t("passage.text", { city: site.city })}
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-primary-700 hover:gap-2.5 transition-all"
              >
                {t("passage.cta")}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-sand-200">
              <h3 className="font-display text-base font-semibold text-neutral-900 mb-2">
                {t("bodyComposition.title")}
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                {t("bodyComposition.text")}
              </p>
              <Link
                href="/la-clinique/composition-corporelle"
                className="mt-4 inline-flex items-center gap-1.5 font-semibold text-primary-700 hover:gap-2.5 transition-all text-sm"
              >
                {t("bodyComposition.cta")}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("timeline.eyebrow")}
            title={t("timeline.title")}
            subtitle={t("timeline.subtitle")}
          />
          <ol className="relative max-w-3xl mx-auto border-l-2 border-primary-200 pl-6 md:pl-8 space-y-8">
            {timelineKeys.map((key) => (
              <li key={key} className="relative">
                <span
                  className="absolute -left-[34px] md:-left-[42px] w-9 h-9 rounded-full bg-primary-600 text-white grid place-items-center border-4 border-white shadow-sm"
                  aria-hidden="true"
                >
                  <Heart className="w-4 h-4" />
                </span>
                <div className="text-sm font-semibold tracking-wide text-primary-700 mb-1">
                  {t(`timeline.steps.${key}.time`)}
                </div>
                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1.5">
                  {t(`timeline.steps.${key}.title`)}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {t(`timeline.steps.${key}.text`)}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-center text-neutral-600 italic max-w-2xl mx-auto">
            {t("timeline.note")}
          </p>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("summary.eyebrow")}
            title={t("summary.title")}
          />
          <ul className="grid md:grid-cols-3 gap-5">
            {etapesData.map((e) => (
              <li
                key={e.k}
                className="bg-white rounded-2xl p-6 border border-neutral-150 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center mb-3">
                  {e.k}
                </div>
                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-3">
                  {t(`summary.steps.${e.key}.title`)}
                </h3>
                <ul className="space-y-2 text-neutral-700 text-base">
                  {e.itemKeys.map((itemKey) => (
                    <li key={itemKey} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                      <span>{t(`summary.steps.${e.key}.items.${itemKey}`)}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
