import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ConversionFooterCTA } from "@/components/sections/ConversionFooterCTA";
import { faq } from "@/content/faq";
import { site } from "@/lib/site";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: { canonical: `${site.url}/faq` },
    openGraph: {
      title: t("meta.ogTitle"),
      description: t("meta.ogDescription"),
    },
  };
}

export default function FaqPage() {
  const t = useTranslations("faq");
  const crumbs = [
    { name: t("breadcrumb.home"), url: "/" },
    { name: t("breadcrumb.faq"), url: "/faq" },
  ];

  const items = faq.map((f) => ({
    question: t(`${f.id}.question`),
    answer: t(`${f.id}.answer`),
  }));

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />
      <div className="container-custom py-5">
        <Breadcrumb items={crumbs} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(items)),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(crumbs)),
        }}
      />

      <section className="section-padding">
        <div className="container-narrow">
          <FaqAccordion items={items} />
        </div>
      </section>

      <ConversionFooterCTA
        variant="sand"
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        waMessage={t("cta.waMessage")}
      />
    </>
  );
}
