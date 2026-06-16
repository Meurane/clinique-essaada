import type { Metadata } from "next";
import { localizedAlternates } from "@/lib/i18n-meta";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import schemaReinCoupe from "@/public/images/schema-rein-coupe.webp";
import schemaNephron from "@/public/images/schema-nephron.webp";
import {
  Info,
  Droplets,
  AlertCircle,
  Activity,
  Users,
  Stethoscope,
  ShieldCheck,
  Heart,
  ArrowRight,
} from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Callout } from "@/components/ui/Callout";
import { PullQuote } from "@/components/ui/PullQuote";
import { Card, CardIcon } from "@/components/ui/Card";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "comprendre" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: localizedAlternates(locale, "/comprendre-l-insuffisance-renale"),
    openGraph: {
      title: t("meta.ogTitle"),
      description: t("meta.ogDescription"),
    },
  };
}

const stadesData = [
  { n: "1", key: "stade1", dfg: "> 90", color: "bg-accent-100 text-accent-800" },
  { n: "2", key: "stade2", dfg: "60 – 89", color: "bg-accent-50 text-accent-700" },
  { n: "3", key: "stade3", dfg: "30 – 59", color: "bg-warning-50 text-warning-700" },
  { n: "4", key: "stade4", dfg: "15 – 29", color: "bg-warning-100 text-warning-700" },
  { n: "5", key: "stade5", dfg: "< 15", color: "bg-danger-50 text-danger-700" },
];

const pilierIcons = [Heart, Activity, ShieldCheck, Users];
const pilierKeys = ["pilier1", "pilier2", "pilier3", "pilier4"];
const pilierItemCounts = [6, 4, 3, 4];

export default function ComprendreIrcPage() {
  const t = useTranslations("comprendre");
  const signesDebut = [0, 1, 2, 3].map((i) => t(`signesDebut.${i}`));
  const signesEvolution = [0, 1, 2, 3, 4].map((i) => t(`signesEvolution.${i}`));
  const facteursRisque = [0, 1, 2, 3, 4, 5].map((i) => t(`facteursRisque.${i}`));
  const piliers = pilierKeys.map((key, idx) => ({
    icon: pilierIcons[idx],
    title: t(`${key}.title`),
    items: Array.from({ length: pilierItemCounts[idx] }, (_, j) =>
      t(`${key}.items.${j}`)
    ),
  }));
  const crumbs = [
    { name: t("breadcrumb.home"), url: "/" },
    { name: t("breadcrumb.current"), url: "/comprendre-l-insuffisance-renale" },
  ];

  return (
    <>
      <PhotoHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        photoSrc={schemaReinCoupe}
        photoAlt={t("hero.photoAlt")}
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
        <div className="container-custom max-w-4xl">
          <Callout icon={Info} className="mb-10">
            {t("intro.disclaimer")}
          </Callout>

          <SectionHeader
            eyebrow={t("intro.eyebrow")}
            title={t("intro.title")}
          />
          <p className="lead">
            {t.rich("intro.lead", {
              strong: (chunks) => (
                <strong className="font-semibold text-neutral-900">
                  {chunks}
                </strong>
              ),
            })}
          </p>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <SectionHeader
              eyebrow={t("anatomie.eyebrow")}
              title={t("anatomie.title")}
            />
            <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
              <p>
                {t.rich("anatomie.p1", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
              <p>
                {t.rich("anatomie.p2", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
              <p>
                {t.rich("anatomie.p3", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </div>
          </div>

          <Card className="bg-white">
            <CardIcon>
              <Droplets className="w-6 h-6" aria-hidden="true" />
            </CardIcon>
            <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3">
              {t("definition.title")}
            </h3>
            <div className="space-y-3 text-neutral-700 leading-relaxed">
              <p>
                {t.rich("definition.p1", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
              <p>
                {t.rich("definition.p2", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <figure className="m-0 md:order-1">
            <div className="rounded-2xl overflow-hidden bg-sand-50 border border-sand-200 p-3 md:p-5">
              <Image
                src={schemaNephron}
                alt={t("nephron.imageAlt")}
                placeholder="blur"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <figcaption className="mt-3 text-sm text-neutral-600 text-center italic">
              {t("nephron.caption")}
            </figcaption>
          </figure>

          <div className="md:order-2">
            <SectionHeader
              eyebrow={t("nephron.eyebrow")}
              title={t("nephron.title")}
            />
            <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
              <p>
                {t.rich("nephron.p1", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
              <p>
                {t.rich("nephron.p2", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
              <p>
                {t.rich("nephron.p3", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("signes.eyebrow")}
            title={t("signes.title")}
            subtitle={t("signes.subtitle")}
          />
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-warning-600" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-neutral-900">
                  {t("signes.debutTitle")}
                </h3>
              </div>
              <ul className="space-y-3 text-neutral-700">
                {signesDebut.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-danger-600" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-neutral-900">
                  {t("signes.evolutionTitle")}
                </h3>
              </div>
              <ul className="space-y-3 text-neutral-700">
                {signesEvolution.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <Callout title={t("signes.calloutTitle")} className="mt-8 max-w-4xl">
            {t.rich("signes.calloutBody", {
              em: (chunks) => <em>{chunks}</em>,
            })}
          </Callout>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("stades.eyebrow")}
            title={t("stades.title")}
            subtitle={t("stades.subtitle")}
          />
          <div className="max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <table className="w-full">
                <thead className="bg-primary-700 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-display font-semibold">{t("stades.colStage")}</th>
                    <th className="px-4 py-3 text-left font-display font-semibold">{t("stades.colDescription")}</th>
                    <th className="px-4 py-3 text-right font-display font-semibold whitespace-nowrap">
                      {t("stades.colDfg")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {stadesData.map((s, i) => (
                    <tr
                      key={s.n}
                      className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}
                    >
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex w-8 h-8 rounded-lg items-center justify-center font-display font-bold ${s.color}`}
                        >
                          {s.n}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-neutral-800">{t(`stades.${s.key}`)}</td>
                      <td className="px-4 py-4 text-right font-display font-semibold text-primary-700 whitespace-nowrap">
                        {s.dfg}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-neutral-700 leading-relaxed">
              {t.rich("stades.note", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader
              eyebrow={t("depistage.whoEyebrow")}
              title={t("depistage.whoTitle")}
              subtitle={t("depistage.whoSubtitle")}
            />
            <ul className="space-y-3">
              {facteursRisque.map((f) => (
                <li key={f} className="flex items-start gap-3 p-3 rounded-xl bg-sand-50">
                  <Stethoscope
                    className="w-5 h-5 text-primary-700 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-800">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader
              eyebrow={t("depistage.howEyebrow")}
              title={t("depistage.howTitle")}
            />
            <Card className="bg-white">
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center shrink-0">
                    1
                  </span>
                  <div>
                    <div className="font-semibold text-neutral-900 mb-1">{t("depistage.step1Title")}</div>
                    <p className="text-neutral-700">
                      {t("depistage.step1Body")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center shrink-0">
                    2
                  </span>
                  <div>
                    <div className="font-semibold text-neutral-900 mb-1">{t("depistage.step2Title")}</div>
                    <p className="text-neutral-700">
                      {t("depistage.step2Body")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center shrink-0">
                    3
                  </span>
                  <div>
                    <div className="font-semibold text-neutral-900 mb-1">
                      {t("depistage.step3Title")}
                    </div>
                    <p className="text-neutral-700">
                      {t("depistage.step3Body")}
                    </p>
                  </div>
                </li>
              </ol>
              <p className="mt-5 text-sm text-neutral-600 italic">
                {t("depistage.note")}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom">
          <div className="mb-12">
            <PullQuote
              eyebrow={t("piliers.quoteEyebrow")}
              quote={t("piliers.quote")}
              caption={t("piliers.quoteCaption")}
            />
          </div>
          <div className="max-w-4xl mx-auto">

          <ol className="grid md:grid-cols-2 gap-5">
            {piliers.map((p, i) => (
              <li key={p.title}>
                <div className="bg-primary-600/40 border border-primary-400/30 rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-lg bg-white/15 grid place-items-center shrink-0">
                      <p.icon className="w-5 h-5 text-white" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold tracking-wide text-primary-200">
                        {t("piliers.label", { num: i + 1 })}
                      </div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                  <ul className="space-y-2 text-primary-100">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-200 mt-2.5 shrink-0" aria-hidden="true" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <SectionHeader
            eyebrow={t("cta.eyebrow")}
            title={t("cta.title")}
            subtitle={t("cta.subtitle", { city: site.city })}
            align="center"
          />
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/services/consultation-nephrologie"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3.5 rounded-full font-semibold min-h-[52px] transition-colors"
            >
              {t("cta.consultationLink")}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/glossaire"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-700 hover:bg-primary-50 px-6 py-3.5 rounded-full font-semibold min-h-[52px] transition-colors"
            >
              {t("cta.glossaireLink")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
