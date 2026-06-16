import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import {
  FileCheck2,
  FileSignature,
  Send,
  ArrowRight,
  Phone,
  Plane,
  Wallet,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Callout } from "@/components/ui/Callout";
import { Card, CardIcon } from "@/components/ui/Card";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ConversionFooterCTA } from "@/components/sections/ConversionFooterCTA";
import { site } from "@/lib/site";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "depuisLaFrance" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: {
      canonical: `${site.url}/patients-de-passage/depuis-la-france`,
    },
    openGraph: {
      title: t("meta.ogTitle"),
      description: t("meta.ogDescription"),
    },
  };
}

const etapesCpam = [
  { id: "step1", n: "1", icon: FileCheck2 },
  { id: "step2", n: "2", icon: FileSignature },
  { id: "step3", n: "3", icon: Send },
];

const docsClinique = ["doc1", "doc2", "doc3", "doc4", "doc5", "doc6"];

const surPlace = ["item1", "item2", "item3", "item4", "item5", "item6"];

const diasporaFaqIds = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"];

export default function DepuisLaFrancePage() {
  const t = useTranslations("depuisLaFrance");

  const crumbs = [
    { name: "Accueil", url: "/" },
    { name: "Patients de passage", url: "/patients-de-passage" },
    {
      name: "Je viens de France",
      url: "/patients-de-passage/depuis-la-france",
    },
  ];

  const diasporaFaq = diasporaFaqIds.map((id) => ({
    question: t(`faq.${id}.question`),
    answer: t(`faq.${id}.answer`),
  }));

  return (
    <>
      <PhotoHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        photoIcon={Plane}
        photoSrc="/images/clinique-entree-marbre.webp"
        photoAlt={t("hero.photoAlt")}
        photoLabel={t("hero.photoLabel")}
        photoTag={t("hero.photoTag")}
      />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[
            { name: t("breadcrumb.home"), url: "/" },
            { name: t("breadcrumb.parent"), url: "/patients-de-passage" },
            {
              name: t("breadcrumb.current"),
              url: "/patients-de-passage/depuis-la-france",
            },
          ]}
        />
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
          __html: JSON.stringify(faqPageSchema(diasporaFaq)),
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <Callout icon={AlertTriangle} className="mb-12 max-w-3xl">
            {t.rich("anticipate", {
              strong: (chunks) => (
                <strong className="text-neutral-900">{chunks}</strong>
              ),
            })}
          </Callout>

          <SectionHeader
            eyebrow={t("steps.eyebrow")}
            title={t("steps.title")}
            subtitle={t("steps.subtitle")}
          />
          <ol className="grid md:grid-cols-3 gap-5">
            {etapesCpam.map((e) => (
              <li key={e.n}>
                <Card className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center shrink-0">
                      {e.n}
                    </div>
                    <e.icon className="w-6 h-6 text-primary-700" aria-hidden="true" />
                  </div>
                  <div className="text-sm text-primary-700 font-semibold tracking-wide mb-1">
                    {t(`steps.${e.id}.semaine`)}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {t(`steps.${e.id}.title`)}
                  </h3>
                  <p className="text-neutral-700 text-base leading-relaxed">
                    {t(`steps.${e.id}.text`)}
                  </p>
                </Card>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <SectionHeader
              eyebrow={t("docs.eyebrow")}
              title={t("docs.title")}
            />
            <ul className="grid md:grid-cols-2 gap-3 max-w-4xl">
              {docsClinique.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-800">{t(`docs.${d}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader
              eyebrow={t("onsite.eyebrow")}
              title={t("onsite.title")}
            />
            <ul className="space-y-3">
              {surPlace.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-800">{t(`onsite.${s}`)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-neutral-600 italic">
              {t("onsite.disclaimer")}
            </p>
          </div>

          <div>
            <SectionHeader
              eyebrow={t("reimbursement.eyebrow")}
              title={t("reimbursement.title")}
            />
            <Card className="bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-600 text-white grid place-items-center">
                  <Wallet className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-neutral-600">
                    {t("reimbursement.capLabel")}
                  </div>
                  <div className="font-display text-2xl font-bold text-primary-700">
                    86,95 € / séance
                  </div>
                </div>
              </div>
              <ul className="space-y-2.5 text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{t("reimbursement.item1")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{t("reimbursement.item2")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertTriangle
                    className="w-5 h-5 text-danger-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{t("reimbursement.item3")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{t("reimbursement.item4")}</span>
                </li>
              </ul>
              <p className="mt-5 text-sm text-neutral-600">
                {t("reimbursement.mutuelle")}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("arrival.eyebrow")}
            title={t("arrival.title")}
            subtitle={t("arrival.subtitle")}
          />
          <div className="grid md:grid-cols-3 gap-5">
            <Card>
              <CardIcon>
                <Plane className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                {t("arrival.taxi.title")}
              </h3>
              <p className="text-neutral-700">{t("arrival.taxi.text")}</p>
            </Card>
            <Card>
              <CardIcon>
                <Phone className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                {t("arrival.shuttle.title")}
              </h3>
              <p className="text-neutral-700">{t("arrival.shuttle.text")}</p>
            </Card>
            <Card>
              <CardIcon>
                <ArrowRight className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                {t("arrival.car.title")}
              </h3>
              <p className="text-neutral-700">{t("arrival.car.text")}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom max-w-4xl">
          <SectionHeader
            eyebrow={t("faq.eyebrow")}
            title={t("faq.title")}
          />
          <FaqAccordion items={diasporaFaq} />
        </div>
      </section>

      <ConversionFooterCTA
        variant="sand"
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        primaryCtaLabel={t("cta.primaryCtaLabel")}
        waMessage={t("cta.waMessage")}
      />
    </>
  );
}
