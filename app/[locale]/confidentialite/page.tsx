import type { Metadata } from "next";
import { localizedAlternates } from "@/lib/i18n-meta";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return {
    title: t("meta.privacy.title"),
    description: t("meta.privacy.description"),
    alternates: localizedAlternates(locale, "/confidentialite"),
  };
}

export default function ConfidentialitePage() {
  const t = useTranslations("legal");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("privacy.heroTitle")} />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[
            { name: t("breadcrumb.home"), url: "/" },
            { name: t("privacy.breadcrumb"), url: "/confidentialite" },
          ]}
        />
      </div>
      <section className="section-padding">
        <div className="container-narrow space-y-8 text-neutral-700">
          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              {t("privacy.collected.title")}
            </h2>
            <p>{t("privacy.collected.intro")}</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t("privacy.collected.items.name")}</li>
              <li>{t("privacy.collected.items.phone")}</li>
              <li>{t("privacy.collected.items.reason")}</li>
              <li>{t("privacy.collected.items.slot")}</li>
              <li>{t("privacy.collected.items.message")}</li>
            </ul>
            <p className="mt-2">{t("privacy.collected.note")}</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              {t("privacy.purpose.title")}
            </h2>
            <p>{t("privacy.purpose.text")}</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              {t("privacy.legalBasis.title")}
            </h2>
            <p>{t("privacy.legalBasis.text")}</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              {t("privacy.retention.title")}
            </h2>
            <p>{t("privacy.retention.text")}</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              {t("privacy.rights.title")}
            </h2>
            <p>
              {t("privacy.rights.text")}
              <br />
              <a href={site.contact.emailHref} className="text-primary-700 underline">
                {site.contact.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              {t("privacy.cookies.title")}
            </h2>
            <p>{t("privacy.cookies.text")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
