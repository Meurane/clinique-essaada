import type { Metadata } from "next";
import { localizedAlternates } from "@/lib/i18n-meta";
import { getTranslations } from "next-intl/server";
import { CheckCircle2, Clock, Shield, Handshake, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { RdvForm } from "@/components/sections/RdvForm";
import { site, waUrl } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "rendezVous" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: localizedAlternates(locale, "/rendez-vous"),
  };
}

const reassurance = [
  { icon: Clock, key: "rappel" },
  { icon: Shield, key: "donneesProtegees" },
  { icon: Handshake, key: "sansEngagement" },
];

export default async function RdvPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ success?: string }>;
}) {
  const { locale } = await params;
  const { success } = await searchParams;
  const t = await getTranslations({ locale, namespace: "rendezVous" });

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle", { delai: site.rdv.rappelDelai })}
      />
      <div className="container-custom py-5">
        <Breadcrumb items={[{ name: t("breadcrumb.accueil"), url: "/" }, { name: t("breadcrumb.rendezVous"), url: "/rendez-vous" }]} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Rendez-vous", url: "/rendez-vous" },
            ]),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-narrow">
          {success ? (
            <div className="rounded-2xl bg-accent-50 border border-accent-600/40 p-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-accent-600 mx-auto mb-4" aria-hidden="true" />
              <h2 className="font-display text-2xl font-bold text-neutral-900 mb-2">
                {t("success.title")}
              </h2>
              <p className="text-neutral-700 mb-6">
                {t("success.body", { delai: site.rdv.rappelDelai })}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={waUrl(t("success.whatsappMessage"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb558] text-white px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  {t("success.whatsappCta")}
                </a>
                <a
                  href={site.contact.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  {t("success.callCta")}
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <ul className="grid sm:grid-cols-3 gap-3">
                {reassurance.map((r) => (
                  <li
                    key={r.key}
                    className="p-4 rounded-xl bg-sand-50 border border-sand-100"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <r.icon className="w-5 h-5 text-primary-700 shrink-0" aria-hidden="true" />
                      <span className="font-display font-semibold text-neutral-900 text-base">
                        {t(`reassurance.${r.key}.title`, { delai: site.rdv.rappelDelai })}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-700">{t(`reassurance.${r.key}.text`)}</p>
                  </li>
                ))}
              </ul>
              <RdvForm />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
