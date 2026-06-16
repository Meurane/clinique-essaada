import type { Metadata } from "next";
import { localizedAlternates } from "@/lib/i18n-meta";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, CheckCircle2, Stethoscope, Activity } from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { site } from "@/lib/site";
import { medicalProcedureSchema, breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hemodialysis" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: localizedAlternates(locale, "/services/hemodialyse"),
    openGraph: {
      title: t("meta.ogTitle"),
      description: t("meta.ogDescription"),
    },
  };
}

export default function HemodialysePage() {
  const t = useTranslations("hemodialysis");

  const process = [
    { step: 1, title: t("process.0.title"), text: t("process.0.text") },
    { step: 2, title: t("process.1.title"), text: t("process.1.text") },
    { step: 3, title: t("process.2.title"), text: t("process.2.text") },
    { step: 4, title: t("process.3.title"), text: t("process.3.text") },
  ];

  const qualite = [
    t("qualite.0"),
    t("qualite.1"),
    t("qualite.2"),
    t("qualite.3"),
    t("qualite.4"),
    t("qualite.5"),
  ];

  const seanceIncludes = [
    t("seanceIncludes.0"),
    t("seanceIncludes.1"),
    t("seanceIncludes.2"),
    t("seanceIncludes.3"),
    t("seanceIncludes.4"),
    t("seanceIncludes.5"),
    t("seanceIncludes.6"),
    t("seanceIncludes.7"),
    t("seanceIncludes.8"),
    t("seanceIncludes.9"),
    t("seanceIncludes.10"),
    t("seanceIncludes.11"),
  ];

  return (
    <>
      <PhotoHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle", { lits: site.stats.lits })}
        photoIcon={Stethoscope}
        photoSrc="/images/salle-dialyse.webp"
        photoAlt={t("hero.photoAlt")}
        photoLabel={t("hero.photoLabel")}
        photoTag={t("hero.photoTag")}
      />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[
            { name: t("breadcrumb.home"), url: "/" },
            { name: t("breadcrumb.services"), url: "/services" },
            { name: t("breadcrumb.hemodialysis"), url: "/services/hemodialyse" },
          ]}
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalProcedureSchema({
              name: "Hémodialyse",
              description:
                "Traitement de suppléance rénale réalisé à la Clinique ESSAADA à Sidi Bel Abbès. 37 lits, générateurs dernière génération, eau ultra-pure, équipe pluridisciplinaire.",
              procedureType: "https://schema.org/TherapeuticProcedure",
            }),
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Services", url: "/services" },
              { name: "Hémodialyse", url: "/services/hemodialyse" },
            ]),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader
              eyebrow={t("treatment.eyebrow")}
              title={t("treatment.title")}
            />
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>{t("treatment.p1")}</p>
              <p>{t("treatment.p2")}</p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-neutral-900 mb-4">
              {t("qualiteTitle")}
            </h3>
            <ul className="space-y-3">
              {qualite.map((q) => (
                <li key={q} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-800">{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("seance.eyebrow")}
            title={t("seance.title")}
            subtitle={t("seance.subtitle")}
          />
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 max-w-4xl mx-auto">
            {seanceIncludes.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-neutral-150">
                <CheckCircle2
                  className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-neutral-800 text-base leading-snug">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-neutral-700 text-base max-w-2xl mx-auto">
            {t.rich("seance.note", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("steps.eyebrow")}
            title={t("steps.title")}
            subtitle={t("steps.subtitle")}
          />
          <ol className="grid md:grid-cols-4 gap-5">
            {process.map((p) => (
              <li key={p.step}>
                <Card>
                  <div className="w-10 h-10 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center mb-4">
                    {p.step}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                    {p.title}
                  </h3>
                  <p className="text-neutral-700 text-base">{p.text}</p>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("bioimpedance.eyebrow")}
            title={t("bioimpedance.title")}
            subtitle={t("bioimpedance.subtitle")}
          />
          <div className="max-w-3xl mx-auto bg-sand-50 rounded-2xl p-6 md:p-8 border border-sand-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-600 text-white grid place-items-center shrink-0">
                <Activity className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                  {t("bioimpedance.cardTitle")}
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {t("bioimpedance.cardText")}
                </p>
                <Link
                  href="/la-clinique/composition-corporelle"
                  className="inline-flex items-center gap-1.5 font-semibold text-primary-700 hover:gap-2.5 transition-all"
                >
                  {t("bioimpedance.cardLink")}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom grid md:grid-cols-5 gap-6 items-center">
          <div className="md:col-span-3">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
              {t("firstTime.title")}
            </h2>
            <p className="text-neutral-700 text-lg leading-relaxed">
              {t("firstTime.text")}
            </p>
          </div>
          <div className="md:col-span-2 flex md:justify-end">
            <Link
              href="/services/premiere-seance"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
            >
              {t("firstTime.cta")}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
