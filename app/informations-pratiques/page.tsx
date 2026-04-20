import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardIcon } from "@/components/ui/Card";
import { infosBlocks } from "@/content/infos-pratiques";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Informations pratiques",
  description:
    "Horaires, accès, parking, WiFi, repas, sécurité. Tout ce qu'il faut savoir avant de venir à la Clinique ESSAADA.",
  alternates: { canonical: `${site.url}/informations-pratiques` },
};

export default function InfosPratiquesPage() {
  return (
    <>
      <PageHero
        eyebrow="Infos pratiques"
        title="Tout ce qu'il faut savoir avant de venir"
        subtitle="Horaires, accès, services sur place : nous avons pensé aux détails qui comptent."
      />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[{ name: "Accueil", url: "/" }, { name: "Infos pratiques", url: "/informations-pratiques" }]}
        />
      </div>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader title="Votre confort, nos priorités" />
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {infosBlocks.map((b) => (
              <li key={b.title}>
                <Card className="h-full">
                  <CardIcon>
                    <b.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {b.title}
                  </h3>
                  <ul className="space-y-1.5 text-neutral-700 text-base">
                    {b.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
