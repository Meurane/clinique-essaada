import type { Metadata } from "next";
import { localizedAlternates } from "@/lib/i18n-meta";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Moon,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Clock,
  UtensilsCrossed,
  Droplets,
  Apple,
} from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardIcon } from "@/components/ui/Card";
import { ConversionFooterCTA } from "@/components/sections/ConversionFooterCTA";
import { site, waUrl } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ramadan" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: localizedAlternates(locale, "/ramadan-et-dialyse"),
    openGraph: {
      title: t("meta.ogTitle"),
      description: t("meta.ogDescription"),
    },
  };
}

const principes = [
  { id: "decision", icon: Moon },
  { id: "premiere-seance", icon: Moon },
  { id: "vigilance", icon: Moon },
];

const alimentation = [
  { id: "repas", icon: UtensilsCrossed },
  { id: "hydratation", icon: Droplets },
  { id: "dattes", icon: Apple },
  { id: "rompre", icon: AlertTriangle },
];

const faqRamadan = ["jeuner", "medicaments", "hydratation", "malaise", "cafe"];

export default function RamadanDialysePage() {
  const t = useTranslations("ramadan");
  const tc = useTranslations("common");
  return (
    <>
      <PhotoHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        photoIcon={Moon}
        photoSrc="/images/salle-dialyse-vue-large.webp"
        photoAlt={t("hero.photoAlt")}
        photoLabel={t("hero.photoLabel")}
        photoTag={t("hero.photoTag")}
      />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[
            { name: t("breadcrumb.home"), url: "/" },
            { name: t("breadcrumb.current"), url: "/ramadan-et-dialyse" },
          ]}
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Ramadan & dialyse", url: "/ramadan-et-dialyse" },
            ]),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 flex items-start gap-4 p-5 rounded-2xl bg-warning-50 border border-warning-100">
            <AlertTriangle className="w-6 h-6 text-warning-700 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h2 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                {t("warning.title")}
              </h2>
              <p className="text-neutral-700 text-base">
                {t.rich("warning.body", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </div>
          </div>

          <SectionHeader
            eyebrow={t("principles.eyebrow")}
            title={t("principles.title")}
          />
          <ul className="grid md:grid-cols-3 gap-5">
            {principes.map((p) => (
              <li key={p.id}>
                <Card className="h-full">
                  <CardIcon>
                    <p.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {t(`principles.items.${p.id}.title`)}
                  </h3>
                  <p className="text-neutral-700 text-base">
                    {t(`principles.items.${p.id}.text`)}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader
              eyebrow={t("schedule.eyebrow")}
              title={t("schedule.title")}
            />
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>{t("schedule.intro")}</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    {t.rich("schedule.point1", {
                      strong: (chunks) => (
                        <strong className="text-neutral-900">{chunks}</strong>
                      ),
                    })}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    {t.rich("schedule.point2", {
                      strong: (chunks) => (
                        <strong className="text-neutral-900">{chunks}</strong>
                      ),
                    })}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-sand-200">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-primary-700" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-neutral-900">
                {t("schedule.ctaTitle")}
              </h3>
            </div>
            <p className="text-neutral-700 leading-relaxed mb-5">
              {t.rich("schedule.ctaBody", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <Link
              href="/rendez-vous"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-full font-semibold min-h-[48px] transition-colors"
            >
              {tc("bookAppointment")}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <p className="mt-5 text-sm text-neutral-600">
              {t.rich("schedule.contact", {
                phone: () => (
                  <a href={site.contact.phoneHref} className="text-primary-700 underline">
                    {site.contact.phone}
                  </a>
                ),
                whatsapp: () => (
                  <a
                    href={waUrl(t("schedule.whatsappMessage"))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-700 underline"
                  >
                    WhatsApp
                  </a>
                ),
              })}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("nutrition.eyebrow")}
            title={t("nutrition.title")}
          />
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-neutral-700 text-lg leading-relaxed text-center">
              {t("nutrition.intro")}
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {alimentation.map((a) => (
              <li key={a.id}>
                <Card className="h-full">
                  <CardIcon>
                    <a.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {t(`nutrition.items.${a.id}.title`)}
                  </h3>
                  <p className="text-neutral-700 text-base">
                    {t(`nutrition.items.${a.id}.text`)}
                  </p>
                </Card>
              </li>
            ))}
          </ul>

          <div className="max-w-2xl mx-auto p-6 md:p-8 bg-sand-50 border border-sand-200 rounded-2xl text-center">
            <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
              {t("guide.title")}
            </h3>
            <p className="text-neutral-700 mb-5">{t("guide.body")}</p>
            <Link
              href="/blog/ramadan-alimentation-dialyse-sidi-bel-abbes"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-full font-semibold min-h-[48px] transition-colors"
            >
              {t("guide.cta")}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-narrow">
          <SectionHeader
            eyebrow={t("faq.eyebrow")}
            title={t("faq.title")}
          />
          <div className="space-y-3">
            {faqRamadan.map((id) => (
              <details
                key={id}
                className="group bg-white border border-neutral-150 rounded-xl overflow-hidden open:shadow-sm transition-shadow"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none p-5 md:p-6 font-display font-semibold text-lg text-neutral-900 hover:bg-neutral-50">
                  <span>{t(`faq.items.${id}.q`)}</span>
                  <span className="w-5 h-5 shrink-0 mt-1 grid place-items-center text-primary-600 text-xl transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 md:px-6 md:pb-6 text-neutral-700 leading-relaxed">
                  {t(`faq.items.${id}.a`)}
                </div>
              </details>
            ))}
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
