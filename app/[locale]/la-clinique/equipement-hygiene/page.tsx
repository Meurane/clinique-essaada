import type { Metadata } from "next";
import { localizedAlternates } from "@/lib/i18n-meta";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Droplets,
  Cpu,
  Shield,
  Syringe,
  Users,
  BadgeCheck,
  Activity,
  Factory,
  ArrowRight,
} from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
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
  const t = await getTranslations({ locale, namespace: "equipementHygiene" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: localizedAlternates(locale, "/la-clinique/equipement-hygiene"),
    openGraph: {
      title: t("meta.ogTitle"),
      description: t("meta.ogDescription"),
    },
  };
}

const etapesEau = [
  { id: "step1", n: "1" },
  { id: "step2", n: "2" },
  { id: "step3", n: "3" },
  { id: "step4", n: "4" },
  { id: "step5", n: "5" },
];

const usageUnique = [
  { id: "dialyzer", icon: Activity },
  { id: "bloodLines", icon: Syringe },
];

const securite = ["screening", "isolation", "revaccination", "traceability"];

const controles = [
  { id: "water", icon: Droplets },
  { id: "ktv", icon: Activity },
  { id: "morbidity", icon: Users },
  { id: "accreditation", icon: BadgeCheck },
];

export default function EquipementHygienePage() {
  const t = useTranslations("equipementHygiene");

  const crumbs = [
    { name: t("breadcrumb.home"), url: "/" },
    { name: t("breadcrumb.center"), url: "/la-clinique" },
    { name: t("breadcrumb.equipment"), url: "/la-clinique/equipement-hygiene" },
  ];

  return (
    <>
      <PhotoHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        photoIcon={Factory}
        photoSrc="/images/generateur-dialyse.webp"
        photoAlt={t("hero.photoAlt")}
        photoLabel={t("hero.photoLabel")}
        photoTag={t("hero.photoTag")}
      />
      <div className="container-custom py-5">
        <Breadcrumb items={crumbs} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Le centre", url: "/la-clinique" },
              { name: "Équipement & hygiène", url: "/la-clinique/equipement-hygiene" },
            ]),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("generators.eyebrow")}
            title={t("generators.title", { lits: site.stats.lits })}
            subtitle={t("generators.subtitle")}
          />
          <div className="grid md:grid-cols-3 gap-5">
            <Card>
              <CardIcon>
                <Cpu className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                {t("generators.brand.title")}
              </h3>
              <p className="text-neutral-700 text-base">
                {t("generators.brand.text")}
                <span className="block mt-2 text-neutral-500 text-sm italic">
                  {t("generators.brand.note")}
                </span>
              </p>
            </Card>
            <Card>
              <CardIcon>
                <Shield className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                {t("generators.maintenance.title")}
              </h3>
              <p className="text-neutral-700 text-base">
                {t("generators.maintenance.text")}
              </p>
            </Card>
            <Card>
              <CardIcon>
                <Activity className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                {t("generators.traceability.title")}
              </h3>
              <p className="text-neutral-700 text-base">
                {t("generators.traceability.text")}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("water.eyebrow")}
            title={t("water.title")}
            subtitle={t("water.subtitle")}
          />
          <ol className="grid md:grid-cols-5 gap-4">
            {etapesEau.map((e) => (
              <li key={e.n}>
                <Card className="h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center mb-4 shrink-0">
                    {e.n}
                  </div>
                  <h3 className="font-display text-base font-semibold text-neutral-900 mb-1.5">
                    {t(`water.steps.${e.id}.title`)}
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    {t(`water.steps.${e.id}.text`)}
                  </p>
                </Card>
              </li>
            ))}
          </ol>
          <div className="mt-8 p-5 rounded-xl bg-white border border-sand-200">
            <div className="flex items-start gap-3">
              <Droplets className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-neutral-700">
                <strong className="text-neutral-900">{t("water.controls.label")}</strong>{" "}
                {t("water.controls.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("gallery.eyebrow")}
            title={t("gallery.title")}
            subtitle={t("gallery.subtitle")}
          />
          <PhotoGrid
            columns={3}
            items={[
              {
                src: "/images/generateur-dialyse.webp",
                alt: t("gallery.generator.alt"),
                icon: Cpu,
                label: t("gallery.generator.label"),
                aspectRatio: "1/1",
                caption: t("gallery.generator.caption"),
                tag: t("gallery.generator.tag"),
              },
              {
                src: "/images/osmose-traitement-eau.webp",
                alt: t("gallery.osmosis.alt"),
                icon: Factory,
                label: t("gallery.osmosis.label"),
                aspectRatio: "1/1",
                caption: t("gallery.osmosis.caption"),
                tag: t("gallery.osmosis.tag"),
              },
              {
                src: "/images/poste-dialyse.webp",
                alt: t("gallery.station.alt"),
                icon: Shield,
                label: t("gallery.station.label"),
                aspectRatio: "1/1",
                caption: t("gallery.station.caption"),
                tag: t("gallery.station.tag"),
              },
            ]}
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader
              eyebrow={t("singleUse.eyebrow")}
              title={t("singleUse.title")}
              subtitle={t("singleUse.subtitle")}
            />
            <ul className="space-y-4">
              {usageUnique.map((u) => (
                <li key={u.id}>
                  <Card>
                    <CardIcon>
                      <u.icon className="w-6 h-6" aria-hidden="true" />
                    </CardIcon>
                    <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                      {t(`singleUse.items.${u.id}.title`)}
                    </h3>
                    <p className="text-neutral-700">{t(`singleUse.items.${u.id}.text`)}</p>
                  </Card>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-neutral-600 italic">
              {t("singleUse.diasporaNote")}
            </p>
          </div>

          <div>
            <SectionHeader
              eyebrow={t("safety.eyebrow")}
              title={t("safety.title")}
            />
            <ul className="space-y-3">
              {securite.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 p-4 rounded-xl bg-sand-50"
                >
                  <Shield
                    className="w-5 h-5 text-primary-700 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-800">{t(`safety.items.${s}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("staff.eyebrow")}
            title={t("staff.title")}
          />
          <div className="grid md:grid-cols-4 gap-5">
            <Card>
              <CardIcon>
                <Users className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-base font-semibold text-neutral-900 mb-1">
                {t("staff.nurses.title")}
              </h3>
              <p className="text-neutral-700 text-sm">
                {t("staff.nurses.text")}
              </p>
            </Card>
            <Card>
              <CardIcon>
                <BadgeCheck className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-base font-semibold text-neutral-900 mb-1">
                {t("staff.nephrologist.title")}
              </h3>
              <p className="text-neutral-700 text-sm">
                {t("staff.nephrologist.text")}
              </p>
            </Card>
            <Card>
              <CardIcon>
                <Cpu className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-base font-semibold text-neutral-900 mb-1">
                {t("staff.biomedical.title")}
              </h3>
              <p className="text-neutral-700 text-sm">
                {t("staff.biomedical.text")}
              </p>
            </Card>
            <Card>
              <CardIcon>
                <Shield className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-base font-semibold text-neutral-900 mb-1">
                {t("staff.hygiene.title")}
              </h3>
              <p className="text-neutral-700 text-sm">
                {t("staff.hygiene.text")}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("quality.eyebrow")}
            title={t("quality.title")}
          />
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {controles.map((c) => (
              <li key={c.id}>
                <Card className="h-full">
                  <CardIcon>
                    <c.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-base font-semibold text-neutral-900 mb-1">
                    {t(`quality.items.${c.id}.title`)}
                  </h3>
                  <p className="text-neutral-700 text-sm">{t(`quality.items.${c.id}.text`)}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("bioimpedance.eyebrow")}
            title={t("bioimpedance.title")}
            subtitle={t("bioimpedance.subtitle")}
          />
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-8 border border-sand-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-600 text-white grid place-items-center shrink-0">
                <Activity className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                  Bodystat Multiscan 5000
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {t("bioimpedance.deviceText")}
                </p>
                <Link
                  href="/la-clinique/composition-corporelle"
                  className="inline-flex items-center gap-1.5 font-semibold text-primary-700 hover:gap-2.5 transition-all"
                >
                  {t("bioimpedance.cta")}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
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
