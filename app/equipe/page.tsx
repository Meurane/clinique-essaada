import type { Metadata } from "next";
import { UserCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { PortraitCard } from "@/components/ui/PortraitCard";
import { Callout } from "@/components/ui/Callout";
import { team, departments } from "@/content/equipe";
import { ConversionFooterCTA } from "@/components/sections/ConversionFooterCTA";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Équipe médicale — néphrologie à Sidi Bel Abbès",
  description:
    "Néphrologues, infirmiers spécialisés, personnel d'accompagnement. Découvrez l'équipe de la Clinique ESSAADA à Sidi Bel Abbès.",
  alternates: { canonical: `${site.url}/equipe` },
};

/**
 * Aperçu structurel affiché quand `team` est vide — montre aux visiteurs
 * la forme et la qualité de présentation à venir, sans inventer d'identités.
 */
const placeholderRoles = [
  { role: "Médecin néphrologue", credentials: ["DEMS néphrologie"] },
  { role: "Médecin néphrologue", credentials: ["Consultation / suivi"] },
  { role: "Infirmier·ère chef·fe de service", credentials: ["Spécialité dialyse"] },
  { role: "Infirmier·ère DE", credentials: ["Hémodialyse"] },
  { role: "Responsable accueil", credentials: ["CNAS / CASNOS"] },
];

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

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Nos praticiens"
            title={team.length > 0 ? "Les visages qui vous accueillent" : "Les profils à venir"}
            subtitle={
              team.length > 0
                ? "Médecins et soignants qui composent l'équipe ESSAADA."
                : "Les portraits et parcours individuels seront publiés dès réception des informations par la clinique. Aperçu de la structure :"
            }
          />

          {team.length > 0 ? (
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
              {team.map((m) => (
                <li key={m.slug}>
                  <PortraitCard
                    name={m.name}
                    role={m.role}
                    credentials={m.specialty ? [m.specialty] : undefined}
                    bio={m.bio}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {placeholderRoles.map((p, i) => (
                  <li key={i}>
                    <PortraitCard
                      name="Dr. [Nom à venir]"
                      role={p.role}
                      credentials={p.credentials}
                    />
                  </li>
                ))}
              </ul>
              <Callout icon={UserCircle2} className="mt-10 max-w-3xl">
                Cet aperçu représente la structure de l'équipe. Chaque fiche
                individuelle (nom, parcours, photographie) sera mise en ligne
                après validation par la clinique et consentement écrit des
                personnes concernées.
              </Callout>
            </>
          )}
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
