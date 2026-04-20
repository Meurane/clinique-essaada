import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { team, departments } from "@/content/equipe";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Équipe médicale",
  description:
    "Néphrologues, infirmiers spécialisés, personnel d'accompagnement. Découvrez l'équipe de la Clinique ESSAADA à Sidi Bel Abbès.",
  alternates: { canonical: `${site.url}/equipe` },
};

export default function EquipePage() {
  return (
    <>
      <PageHero
        eyebrow="Notre équipe"
        title="Une équipe pluridisciplinaire à vos côtés"
        subtitle="Médecins néphrologues, infirmiers spécialisés, personnel d'accompagnement. Formés à la prise en charge des patients dialysés."
      />
      <div className="container-custom py-5">
        <Breadcrumb items={[{ name: "Accueil", url: "/" }, { name: "Équipe", url: "/equipe" }]} />
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Nos équipes"
            title="Les professionnels qui vous accompagnent"
            subtitle="Les profils individuels (noms, parcours, photos) seront publiés dès réception des informations par la clinique."
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

          {team.length > 0 && (
            <div className="mt-16">
              <SectionHeader title="Nos praticiens" />
              <ul className="grid md:grid-cols-3 gap-6">
                {team.map((m) => (
                  <li key={m.slug}>
                    <Card>
                      <div className="font-display text-lg font-semibold text-neutral-900">
                        {m.name}
                      </div>
                      <div className="text-primary-700 font-medium mt-0.5">{m.role}</div>
                      {m.specialty && (
                        <p className="text-neutral-600 text-base mt-2">{m.specialty}</p>
                      )}
                    </Card>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
