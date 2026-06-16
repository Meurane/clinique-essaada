import type { Metadata } from "next";
import { localizedAlternates } from "@/lib/i18n-meta";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, CheckCircle2, GraduationCap, Users, BookOpen } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
  const t = await getTranslations({ locale, namespace: "consultation" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: localizedAlternates(locale, "/services/consultation-nephrologie"),
  };
}

const etpPiliers = [
  { icon: BookOpen },
  { icon: Users },
  { icon: GraduationCap },
];

export default function ConsultationPage() {
  const t = useTranslations("consultation");
  const tc = useTranslations("common");

  const bullets = [
    t("bullets.0"),
    t("bullets.1"),
    t("bullets.2"),
    t("bullets.3"),
    t("bullets.4"),
  ];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[
            { name: t("breadcrumb.home"), url: "/" },
            { name: t("breadcrumb.services"), url: "/services" },
            { name: t("breadcrumb.consultation"), url: "/services/consultation-nephrologie" },
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
              { name: "Consultation néphrologie", url: "/services/consultation-nephrologie" },
            ]),
          ),
        }}
      />
      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-4 text-neutral-700 leading-relaxed">
            <p>{t("intro.p1")}</p>
            <p>{t("intro.p2")}</p>
          </div>
          <div className="md:col-span-2 bg-sand-50 rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold text-neutral-900 mb-4">
              {t("bulletsTitle")}
            </h3>
            <ul className="space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-800">{b}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/rendez-vous"
              className="mt-6 inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-full font-semibold min-h-[48px]"
            >
              {tc("bookAppointment")}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom">
          <PullQuote
            eyebrow={t("pullQuote.eyebrow")}
            quote={
              <>
                {t("pullQuote.quoteLine1")}
                <br className="hidden md:inline" />
                {t("pullQuote.quoteLine2")}
              </>
            }
            caption={t("pullQuote.caption")}
          />
          <div className="mt-8 flex justify-center">
            <Link
              href="/comprendre-l-insuffisance-renale"
              className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 px-6 py-3.5 rounded-full font-semibold min-h-[52px] transition-colors"
            >
              {t("pullQuote.cta")}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("etp.eyebrow")}
            title={t("etp.title")}
            subtitle={t("etp.subtitle")}
          />
          <ul className="grid md:grid-cols-3 gap-5">
            {etpPiliers.map((e, i) => (
              <li key={i}>
                <Card className="h-full">
                  <CardIcon>
                    <e.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {t(`etp.piliers.${i}.title`)}
                  </h3>
                  <p className="text-neutral-700">{t(`etp.piliers.${i}.text`)}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
