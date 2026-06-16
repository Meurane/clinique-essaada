import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { departments } from "@/content/equipe";
import { ConversionFooterCTA } from "@/components/sections/ConversionFooterCTA";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Équipe médicale — néphrologie à Sidi Bel Abbès",
  description:
    "Néphrologue, infirmiers spécialisés, personnel d'accompagnement. Découvrez l'équipe de la Clinique ESSAADA à Sidi Bel Abbès.",
  alternates: { canonical: `${site.url}/equipe` },
};

export default function EquipePage() {
  return (
    <>
      <PageHero
        eyebrow="Notre équipe"
        title="Une équipe pluridisciplinaire à vos côtés"
        subtitle="Médecin néphrologue, infirmiers spécialisés, personnel d'accompagnement. Formés à la prise en charge des patients dialysés."
      />
      <div className="container-custom py-5">
        <Breadcrumb items={[{ name: "Accueil", url: "/" }, { name: "Équipe", url: "/equipe" }]} />
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
            eyebrow="Les métiers"
            title="Les professionnels qui vous accompagnent"
            subtitle="Quatre départements, un même engagement : rendre chaque séance aussi sûre et confortable que possible."
          />
          <ul className="grid md:grid-cols-2 gap-5">
            {departments.map((d) => (
              <li key={d.title}>
                <Card>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {d.title}
                  </h3>
                  <p className="text-neutral-700">{d.description}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ConversionFooterCTA
        variant="white"
        eyebrow="Consultation"
        title="Rencontrer l'équipe en consultation ?"
        subtitle="Une consultation néphrologie, un premier contact pour la dialyse, ou une question — nous répondons sous 24-48h ouvrées."
        waMessage="Bonjour, je souhaite rencontrer l'équipe médicale de la Clinique ESSAADA en consultation."
      />
    </>
  );
}
