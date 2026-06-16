import type { Metadata } from "next";
import { localizedAlternates } from "@/lib/i18n-meta";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import {
  Activity,
  Droplets,
  HeartPulse,
  Microscope,
  CheckCircle2,
  ShieldCheck,
  Clock3,
  ArrowRight,
} from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardIcon } from "@/components/ui/Card";
import { ConversionFooterCTA } from "@/components/sections/ConversionFooterCTA";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "compositionCorporelle" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: localizedAlternates(locale, "/la-clinique/composition-corporelle"),
    openGraph: {
      title: t("meta.ogTitle"),
      description: t("meta.ogDescription"),
    },
  };
}

const piliers = [
  { id: "drySetting", icon: Droplets },
  { id: "bodyComposition", icon: Activity },
  { id: "phaseAngle", icon: HeartPulse },
];

const deroule = [
  { n: "1", id: "setup" },
  { n: "2", id: "electrodes" },
  { n: "3", id: "measurement" },
  { n: "4", id: "reading" },
];

const quand = [
  { id: "firstSession", icon: CheckCircle2 },
  { id: "regularFollowUp", icon: Clock3 },
  { id: "visitingPatients", icon: ShieldCheck },
];

export default function CompositionCorporellePage() {
  const t = useTranslations("compositionCorporelle");

  const crumbs = [
    { name: t("breadcrumb.home"), url: "/" },
    { name: t("breadcrumb.center"), url: "/la-clinique" },
    { name: t("breadcrumb.current"), url: "/la-clinique/composition-corporelle" },
  ];

  return (
    <>
      <PhotoHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        photoIcon={Activity}
        photoSrc="/images/bodystat-multiscan-5000.webp"
        photoAlt={t("hero.photoAlt")}
        photoTag={t("hero.photoTag")}
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
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader
              eyebrow={t("why.eyebrow")}
              title={t("why.title")}
            />
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>{t.rich("why.p1", { strong: (chunks) => <strong>{chunks}</strong> })}</p>
              <p>{t.rich("why.p2", { strong: (chunks) => <strong>{chunks}</strong> })}</p>
              <p>{t.rich("why.p3", { strong: (chunks) => <strong>{chunks}</strong> })}</p>
            </div>
          </div>

          <Card className="bg-sand-50 border-sand-200">
            <CardIcon>
              <Microscope className="w-6 h-6" aria-hidden="true" />
            </CardIcon>
            <h3 className="font-display text-lg font-semibold text-neutral-900 mb-3">
              {t("device.title")}
            </h3>
            <ul className="space-y-2.5 text-neutral-700 text-base">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                <span>
                  {t.rich("device.item1", { strong: (chunks) => <strong>{chunks}</strong> })}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                <span>{t("device.item2")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                <span>{t("device.item3")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                <span>{t("device.item4")}</span>
              </li>
            </ul>
            <p className="mt-5 text-sm text-neutral-600 italic leading-relaxed">
              {t("device.note")}
            </p>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("pillars.eyebrow")}
            title={t("pillars.title")}
            subtitle={t("pillars.subtitle")}
          />
          <ul className="grid md:grid-cols-3 gap-5">
            {piliers.map((p) => (
              <li key={p.id}>
                <Card className="h-full">
                  <CardIcon>
                    <p.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {t(`pillars.${p.id}.title`)}
                  </h3>
                  <p className="text-neutral-700 text-base leading-relaxed">
                    {t(`pillars.${p.id}.text`)}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
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
            {deroule.map((d) => (
              <li key={d.n}>
                <Card className="h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center mb-4 shrink-0">
                    {d.n}
                  </div>
                  <h3 className="font-display text-base font-semibold text-neutral-900 mb-1.5">
                    {t(`steps.${d.id}.title`)}
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    {t(`steps.${d.id}.text`)}
                  </p>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-primary-50/40">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("report.eyebrow")}
            title={t("report.title")}
            subtitle={t("report.subtitle")}
          />
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
            <figure className="bg-white rounded-2xl p-3 md:p-4 ring-1 ring-sand-200/80 shadow-[0_2px_8px_-2px_rgb(10_71_93_/_0.08),0_12px_32px_-12px_rgb(10_71_93_/_0.12)] flex flex-col">
              <Image
                src="/images/composition-corporelle-rapport-1.webp"
                alt={t("report.alt1")}
                width={961}
                height={1280}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="w-full h-auto rounded-xl"
              />
              <figcaption className="text-center text-xs text-neutral-600 mt-auto pt-3 font-medium tracking-wide">
                {t("report.caption1")}
              </figcaption>
            </figure>
            <figure className="bg-white rounded-2xl p-3 md:p-4 ring-1 ring-sand-200/80 shadow-[0_2px_8px_-2px_rgb(10_71_93_/_0.08),0_12px_32px_-12px_rgb(10_71_93_/_0.12)] flex flex-col">
              <Image
                src="/images/composition-corporelle-rapport-2.webp"
                alt={t("report.alt2")}
                width={962}
                height={1280}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="w-full h-auto rounded-xl"
              />
              <figcaption className="text-center text-xs text-neutral-600 mt-auto pt-3 font-medium tracking-wide">
                {t("report.caption2")}
              </figcaption>
            </figure>
          </div>
          <p className="mt-6 text-center text-sm text-neutral-600 italic max-w-2xl mx-auto leading-relaxed">
            {t("report.disclaimer")}
          </p>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("when.eyebrow")}
            title={t("when.title")}
          />
          <ul className="grid md:grid-cols-3 gap-5">
            {quand.map((q) => (
              <li key={q.id}>
                <Card className="h-full">
                  <CardIcon>
                    <q.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {t(`when.${q.id}.title`)}
                  </h3>
                  <p className="text-neutral-700 text-base leading-relaxed">
                    {t(`when.${q.id}.text`)}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto">
          <SectionHeader
            eyebrow={t("honesty.eyebrow")}
            title={t("honesty.title")}
          />
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="bg-white border-sand-200">
              <h3 className="font-display text-base font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-600" aria-hidden="true" />
                {t("honesty.doesTitle")}
              </h3>
              <ul className="space-y-2.5 text-neutral-700 text-base">
                <li>{t.rich("honesty.does1", { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                <li>{t.rich("honesty.does2", { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                <li>{t.rich("honesty.does3", { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                <li>{t.rich("honesty.does4", { strong: (chunks) => <strong>{chunks}</strong> })}</li>
              </ul>
            </Card>
            <Card className="bg-sand-50 border-sand-300">
              <h3 className="font-display text-base font-semibold text-neutral-900 mb-3">
                {t("honesty.doesNotTitle")}
              </h3>
              <ul className="space-y-2.5 text-neutral-700 text-base">
                <li>{t.rich("honesty.doesNot1", { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                <li>{t.rich("honesty.doesNot2", { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                <li>{t.rich("honesty.doesNot3", { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                <li>{t("honesty.doesNot4")}</li>
              </ul>
            </Card>
          </div>
          <p className="mt-6 text-sm text-neutral-600 italic text-center leading-relaxed">
            {t("honesty.note")}
          </p>
        </div>
      </section>

      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              {t("partOf.title")}
            </h2>
            <p className="text-primary-100 text-lg leading-relaxed">
              {t("partOf.text")}
            </p>
          </div>
          <div className="md:col-span-2 flex md:justify-end">
            <Link
              href="/services/hemodialyse"
              className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
            >
              {t("partOf.cta")}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ConversionFooterCTA
        variant="sand"
        eyebrow={t("footerCta.eyebrow")}
        title={t("footerCta.title")}
        subtitle={t("footerCta.subtitle")}
        waMessage={t("footerCta.waMessage")}
      />
    </>
  );
}
