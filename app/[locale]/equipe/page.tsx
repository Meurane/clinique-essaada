import type { Metadata } from "next";
import { localizedAlternates } from "@/lib/i18n-meta";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { departments } from "@/content/equipe";
import { ConversionFooterCTA } from "@/components/sections/ConversionFooterCTA";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "team" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: localizedAlternates(locale, "/equipe"),
  };
}

export default function EquipePage() {
  const t = useTranslations("team");

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
            { name: t("breadcrumb.team"), url: "/equipe" },
          ]}
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Équipe", url: "/equipe" },
            ]),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow={t("section.eyebrow")}
            title={t("section.title")}
            subtitle={t("section.subtitle")}
          />
          <ul className="grid md:grid-cols-2 gap-5">
            {departments.map((_, i) => (
              <li key={i}>
                <Card>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {t(`departments.${i}.title`)}
                  </h3>
                  <p className="text-neutral-700">{t(`departments.${i}.description`)}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ConversionFooterCTA
        variant="white"
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        waMessage={t("cta.waMessage")}
      />
    </>
  );
}
