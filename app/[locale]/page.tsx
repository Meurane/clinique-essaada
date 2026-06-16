import type { Metadata } from "next";
import { localizedAlternates } from "@/lib/i18n-meta";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  Heart,
  Droplets,
  Shield,
  Users,
  Clock,
  MessageCircle,
  Compass,
  ClipboardCheck,
  Plane,
} from "lucide-react";
import { HomeHero } from "@/components/sections/HomeHero";
import { StatsRow } from "@/components/sections/StatsRow";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card, CardIcon } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { site, waUrl } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const alternates = localizedAlternates(locale, "/");
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates,
    openGraph: {
      title: t("meta.ogTitle"),
      description: t("meta.ogDescription"),
      url: alternates.canonical,
      type: "website",
    },
  };
}

const journeyStages = [
  { href: "/services/consultation-nephrologie", icon: Compass },
  { href: "/services/premiere-seance", icon: ClipboardCheck },
  { href: "/patients-de-passage", icon: Plane },
];

const whyEssaada = [Heart, Shield, Users];

export default function HomePage() {
  const t = useTranslations("home");
  const tc = useTranslations("common");
  return (
    <>
      <HomeHero />
      <StatsRow />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("journey.eyebrow")}
            title={t("journey.title")}
            subtitle={t("journey.subtitle")}
          />
          <ul className="grid md:grid-cols-3 gap-5">
            {journeyStages.map((s, i) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  aria-label={t(`journey.items.${i}.title`)}
                  className="block group h-full"
                >
                  <Card className="h-full flex flex-col transition-transform duration-200 group-hover:-translate-y-0.5">
                    <div className="flex items-center gap-3 mb-5" aria-hidden="true">
                      <span className="font-display text-sm font-semibold text-sand-700 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-sand-300/70" />
                    </div>
                    <CardIcon>
                      <s.icon className="w-6 h-6" aria-hidden="true" />
                    </CardIcon>
                    <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2 leading-snug">
                      {t(`journey.items.${i}.title`)}
                    </h3>
                    <p className="text-neutral-700 text-base leading-relaxed flex-1">
                      {t(`journey.items.${i}.description`)}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1.5 font-semibold text-primary-700 group-hover:gap-2.5 transition-all">
                      {t(`journey.items.${i}.cta`)}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("services.eyebrow")}
            title={t("services.title")}
            subtitle={t("services.subtitle")}
          />
          <ServicesGrid />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow={t("why.eyebrow")}
              title={t("why.title")}
              subtitle={t("why.subtitle")}
            />
            <ul className="space-y-4">
              {whyEssaada.map((Icon, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary-600 text-white grid place-items-center shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                      {t(`why.items.${i}.title`)}
                    </h3>
                    <p className="text-neutral-700">{t(`why.items.${i}.text`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-white">
            <CardIcon>
              <Droplets className="w-6 h-6" aria-hidden="true" />
            </CardIcon>
            <h3 className="font-display text-2xl font-semibold text-neutral-900 mb-3">
              {t("diaspora.title")}
            </h3>
            <p className="text-neutral-700 mb-5 leading-relaxed">
              {t("diaspora.text")}
            </p>
            <Link
              href="/patients-de-passage"
              className="inline-flex items-center gap-1.5 font-semibold text-primary-700 hover:gap-2.5 transition-all"
            >
              {t("diaspora.cta")}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("hours.eyebrow")}
            title={t("hours.title")}
            subtitle={t("hours.note")}
          />
          <ul className="grid md:grid-cols-3 gap-5">
            {site.hours.sessions.map((s) => (
              <li key={s.label}>
                <Card>
                  <CardIcon>
                    <Clock className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <div className="font-display font-semibold text-lg text-neutral-900">
                    {s.label}
                  </div>
                  <div className="text-primary-700 font-medium text-xl mt-1">
                    {s.range}
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("testimonials.eyebrow")}
            title={t("testimonials.title")}
            subtitle={t("testimonials.subtitle")}
            align="center"
          />
          <TestimonialCarousel />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <Eyebrow className="justify-center">{t("cta.eyebrow")}</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-5 text-neutral-900">
            {t("cta.title")}
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 mb-8">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col-reverse sm:flex-row gap-3 justify-center">
            <Button href="/rendez-vous" variant="primary">
              {tc("bookAppointment")}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
            <Button
              href={waUrl(t("cta.whatsappMessage"))}
              variant="whatsapp"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              {t("cta.whatsappLabel")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
