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
    title: t("meta.mentions.title"),
    description: t("meta.mentions.description"),
    alternates: localizedAlternates(locale, "/mentions-legales"),
  };
}

export default function MentionsLegalesPage() {
  const t = useTranslations("legal");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("mentions.heroTitle")} />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[
            { name: t("breadcrumb.home"), url: "/" },
            { name: t("mentions.breadcrumb"), url: "/mentions-legales" },
          ]}
        />
      </div>
      <section className="section-padding">
        <div className="container-narrow prose prose-neutral max-w-none space-y-8 text-neutral-700">
          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              {t("mentions.editor.title")}
            </h2>
            <p>
              {t("mentions.editor.publishedByPrefix")} (
              <a
                href="https://lumai-consulting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 underline"
              >
                lumai-consulting.com
              </a>
              ) {t("mentions.editor.publishedBySuffix", { name: site.name })}
            </p>
            <p>
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}, {site.address.country}
              <br />
              {t("mentions.editor.phoneLabel")}&nbsp;: {site.contact.phone}
              <br />
              {t("mentions.editor.emailLabel")}&nbsp;:{" "}
              <a href={site.contact.emailHref} className="text-primary-700 underline">
                {site.contact.email}
              </a>
            </p>
            <p>{t("mentions.editor.editorialResponsible", { name: site.name })}</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              {t("mentions.agrement.title")}
            </h2>
            <p>
              {t("mentions.agrement.text")}&nbsp;: {site.legal.agrement}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              {t("mentions.host.title")}
            </h2>
            <p>
              {t("mentions.host.label")}&nbsp;: LumAI Consulting —{" "}
              <a
                href="https://lumai-consulting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 underline"
              >
                lumai-consulting.com
              </a>
              <br />
              {t("mentions.host.text")}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              {t("mentions.ip.title")}
            </h2>
            <p>{t("mentions.ip.text", { name: site.name })}</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              {t("mentions.liability.title")}
            </h2>
            <p>{t("mentions.liability.text")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
