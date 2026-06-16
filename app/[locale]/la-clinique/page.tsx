import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Activity,
  Droplets,
  Shield,
  Sparkles,
  Eye,
  ArrowRight,
  MessageCircle,
  Quote,
  ClipboardCheck,
  Users,
  Stethoscope,
  Building2,
  Armchair,
} from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card, CardIcon } from "@/components/ui/Card";
import { site, waUrl } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "laClinique" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: { canonical: `${site.url}/la-clinique` },
  };
}

const engagements = [
  { id: "professionals", icon: Stethoscope },
  { id: "equipmentManaged", icon: Shield },
  { id: "globalApproach", icon: Users },
  { id: "prescribers", icon: ClipboardCheck },
];

const equipements = [
  { id: "generators", icon: Droplets },
  { id: "ultraPureWater", icon: Sparkles },
  { id: "beds", icon: Activity },
  { id: "qualityProtocols", icon: Shield },
];

export default function LaCliniquePage() {
  const t = useTranslations("laClinique");
  return (
    <>
      <PhotoHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle", {
          lits: site.stats.lits,
          city: site.city,
          country: site.country,
        })}
        photoIcon={Building2}
        photoSrc="/images/clinique-facade.webp"
        photoAlt={t("hero.photoAlt")}
        photoLabel={t("hero.photoLabel")}
        photoTag="Sidi Bel Abbès"
      />
      <div className="container-custom py-5">
        <Breadcrumb items={[{ name: t("breadcrumb.home"), url: "/" }, { name: t("breadcrumb.center"), url: "/la-clinique" }]} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Le centre", url: "/la-clinique" },
            ]),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader eyebrow={t("mission.eyebrow")} title={t("mission.title")} />
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>{t("mission.p1", { city: site.city })}</p>
              <p>{t("mission.p2")}</p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { k: t("stats.capacity"), v: t("stats.capacityValue", { lits: site.stats.lits }) },
              { k: t("stats.slotsPerDay"), v: "3" },
              { k: t("stats.equipment"), v: t("stats.equipmentValue") },
              { k: t("stats.conventions"), v: site.legal.conventions.join(" · ") },
            ].map((row) => (
              <div
                key={row.k}
                className="flex justify-between gap-4 bg-sand-50 rounded-xl px-5 py-4"
              >
                <span className="text-neutral-600">{row.k}</span>
                <span className="font-display font-semibold text-primary-700">
                  {row.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("equipment.eyebrow")}
            title={t("equipment.title")}
            subtitle={t("equipment.subtitle")}
          />
          <ul className="grid md:grid-cols-2 gap-5">
            {equipements.map((e) => (
              <li key={e.id}>
                <Card>
                  <CardIcon>
                    <e.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                    {t(`equipment.items.${e.id}.title`)}
                  </h3>
                  <p className="text-neutral-700">{t(`equipment.items.${e.id}.text`)}</p>
                </Card>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link
              href="/la-clinique/equipement-hygiene"
              className="inline-flex items-center gap-2 bg-white border-2 border-primary-600 text-primary-700 hover:bg-primary-50 px-6 py-3.5 rounded-full font-semibold min-h-[52px] transition-colors"
            >
              {t("equipment.detailLink")}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
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
            columns={2}
            items={[
              {
                src: "/images/salle-dialyse.webp",
                alt: t("gallery.dialysisRoom.alt"),
                icon: Armchair,
                label: t("gallery.dialysisRoom.label"),
                aspectRatio: "4/5",
                caption: t("gallery.dialysisRoom.caption"),
                tag: t("gallery.dialysisRoom.tag"),
              },
              {
                src: "/images/clinique-reception.webp",
                alt: t("gallery.reception.alt"),
                icon: Building2,
                label: t("gallery.reception.label"),
                aspectRatio: "4/5",
                caption: t("gallery.reception.caption"),
                tag: t("gallery.reception.tag"),
              },
            ]}
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-5 gap-10 md:gap-14 items-start">
          <div className="md:col-span-2">
            <div className="sticky top-24">
              <Eyebrow>{t("welcome.eyebrow")}</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-4">
                {t("welcome.title")}
              </h2>
              <p className="lead">{t("welcome.intro")}</p>
            </div>
          </div>
          <Card className="md:col-span-3 bg-sand-50 border-sand-200">
            <Quote className="w-8 h-8 text-primary-600 mb-4" aria-hidden="true" />
            <div className="space-y-4 text-neutral-800 text-lg leading-relaxed italic">
              <p>{t("welcome.q1")}</p>
              <p>{t("welcome.q2")}</p>
              <p>{t("welcome.q3")}</p>
            </div>
            <div className="mt-6 pt-6 border-t border-sand-300/70">
              <div className="font-display font-semibold text-neutral-900">
                {t("welcome.signature")}
              </div>
              <a
                href={site.contact.emailHref}
                className="mt-2 inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium"
              >
                {site.contact.email}
              </a>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom">
          <SectionHeader
            tone="light"
            eyebrow={t("commitments.eyebrow")}
            title={t("commitments.title")}
            subtitle={t("commitments.subtitle")}
          />
          <ul className="grid md:grid-cols-2 gap-5">
            {engagements.map((e) => (
              <li key={e.id}>
                <div className="bg-primary-600/40 border border-primary-400/30 rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/15 grid place-items-center mb-4 shrink-0">
                    <e.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">
                    {t(`commitments.items.${e.id}.title`)}
                  </h3>
                  <p className="text-primary-100 leading-relaxed">{t(`commitments.items.${e.id}.text`)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="visite-decouverte" className="section-padding scroll-mt-24">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow={t("visit.eyebrow")}
              title={t("visit.title")}
            />
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>{t("visit.p1")}</p>
              <p>
                {t.rich("visit.p2", {
                  strong: (chunks) => (
                    <strong className="text-neutral-900">{chunks}</strong>
                  ),
                })}
              </p>
            </div>
          </div>
          <Card className="bg-white">
            <CardIcon>
              <Eye className="w-6 h-6" aria-hidden="true" />
            </CardIcon>
            <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3">
              {t("visit.cardTitle")}
            </h3>
            <p className="text-neutral-700 mb-5">{t("visit.cardText")}</p>
            <div className="flex flex-col lg:flex-row gap-3">
              <Link
                href="/rendez-vous"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-full font-semibold min-h-[48px] transition-colors"
              >
                {t("visit.requestCta")}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={waUrl(t("visit.whatsappMessage"))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb558] text-white px-5 py-3 rounded-full font-semibold min-h-[48px] transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
