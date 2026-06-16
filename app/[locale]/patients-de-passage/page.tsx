import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  FileText,
  CheckCircle2,
  Clock,
  Plane,
  Pill,
  Hotel,
  Car,
  Activity,
} from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardIcon } from "@/components/ui/Card";
import { site, waUrl } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "patientsDePassage" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: { canonical: `${site.url}/patients-de-passage` },
    openGraph: {
      title: t("meta.ogTitle"),
      description: t("meta.ogDescription"),
    },
  };
}

const etapes = [
  { id: "step1", num: "1", icon: MessageCircle },
  { id: "step2", num: "2", icon: FileText },
  { id: "step3", num: "3", icon: CheckCircle2 },
];

const docsRequis = ["doc1", "doc2", "doc3", "doc4", "doc5", "doc6"];

const logistique = [
  { id: "airport", icon: Plane },
  { id: "lodging", icon: Hotel },
  { id: "pharmacy", icon: Pill },
  { id: "access", icon: Car },
];

export default function PatientsDePassagePage() {
  const t = useTranslations("patientsDePassage");
  const tc = useTranslations("common");
  return (
    <>
      <PhotoHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        photoIcon={Plane}
        photoSrc="/images/clinique-facade-enseigne.webp"
        photoAlt={t("hero.photoAlt")}
        photoLabel={t("hero.photoLabel")}
        photoTag={t("hero.photoTag")}
      />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[
            { name: t("breadcrumb.home"), url: "/" },
            { name: t("breadcrumb.current"), url: "/patients-de-passage" },
          ]}
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Patients de passage", url: "/patients-de-passage" },
            ]),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <Link
            href="/patients-de-passage/depuis-la-france"
            className="group block mb-12 max-w-3xl mx-auto p-5 md:p-6 rounded-2xl bg-gradient-to-br from-primary-700 to-primary-800 text-white shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/15 grid place-items-center shrink-0">
                <Plane className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold tracking-wide text-primary-200 mb-1">
                  {t("franceCard.eyebrow")}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-2 text-white">
                  {t("franceCard.title")}
                </h3>
                <p className="text-primary-100 leading-relaxed">
                  {t("franceCard.text")}
                </p>
              </div>
              <ArrowRight
                className="w-6 h-6 mt-2 shrink-0 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>
          </Link>

          <SectionHeader
            eyebrow={t("steps.eyebrow")}
            title={t("steps.title")}
            subtitle={t("steps.subtitle")}
          />
          <ol className="grid md:grid-cols-3 gap-5">
            {etapes.map((e) => (
              <li key={e.num}>
                <Card className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center shrink-0">
                      {e.num}
                    </div>
                    <e.icon className="w-6 h-6 text-primary-700" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {t(`steps.${e.id}.title`)}
                  </h3>
                  <p className="text-neutral-700 text-base leading-relaxed">{t(`steps.${e.id}.text`)}</p>
                </Card>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <a
              href={waUrl(t("steps.whatsappMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb558] text-white px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              {t("steps.whatsappCta")}
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader
              eyebrow={t("docs.eyebrow")}
              title={t("docs.title")}
            />
            <ul className="space-y-3">
              {docsRequis.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-800">{t(`docs.items.${d}`)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-white border border-sand-200">
              <Clock className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-neutral-700 text-base">
                <strong>{t("docs.deadlineLabel")}</strong> {t("docs.deadlineText")}
              </p>
            </div>
          </div>

          <div>
            <SectionHeader eyebrow={t("cost.eyebrow")} title={t("cost.title")} />
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                <strong className="text-neutral-900">{t("cost.affiliatedLabel")}</strong> {t("cost.affiliatedText")}
              </p>
              <p>
                <strong className="text-neutral-900">{t("cost.diasporaLabel")}</strong> {t("cost.diasporaText")}
              </p>
              <p>
                <strong className="text-neutral-900">{t("cost.unaffiliatedLabel")}</strong> {t("cost.unaffiliatedText")}
              </p>
            </div>
            <Link
              href="/rendez-vous"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-primary-700 hover:gap-2.5 transition-all"
            >
              {t("cost.quoteCta")}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("medical.eyebrow")}
            title={t("medical.title")}
            subtitle={t("medical.subtitle")}
          />
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary-50 via-white to-sand-50 rounded-2xl p-6 md:p-8 border border-primary-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-600 text-white grid place-items-center shrink-0">
                <Activity className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                  {t("medical.cardTitle")}
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {t("medical.cardText")}
                </p>
                <Link
                  href="/la-clinique/composition-corporelle"
                  className="inline-flex items-center gap-1.5 font-semibold text-primary-700 hover:gap-2.5 transition-all"
                >
                  {t("medical.cardCta")}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("onsite.eyebrow")}
            title={t("onsite.title")}
            subtitle={t("onsite.subtitle")}
          />
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {logistique.map((l) => (
              <li key={l.id}>
                <Card className="h-full">
                  <CardIcon>
                    <l.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                    {t(`onsite.${l.id}.title`)}
                  </h3>
                  <p className="text-neutral-700 text-base">{t(`onsite.${l.id}.text`)}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom grid md:grid-cols-5 gap-6 items-center">
          <div className="md:col-span-3">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
              {t("finalCta.title")}
            </h2>
            <p className="text-neutral-700 text-lg leading-relaxed">
              {t("finalCta.text")}
            </p>
          </div>
          <div className="md:col-span-2 flex flex-col sm:flex-row md:justify-end gap-3">
            <a
              href={waUrl(t("finalCta.whatsappMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb558] text-white px-5 py-3 rounded-full font-semibold min-h-[52px] transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              {t("finalCta.whatsapp")}
            </a>
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-full font-semibold min-h-[52px] transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {tc("call")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
