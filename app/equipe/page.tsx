import type { Metadata } from "next";
import { User } from "lucide-react";
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
            eyebrow="Médecins & paramédical"
            title="Des professionnels expérimentés, disponibles et à l'écoute"
          />
          <ul className="grid md:grid-cols-3 gap-6">
            {team.map((m) => (
              <li key={m.slug}>
                <Card>
                  <div className="aspect-[4/5] rounded-xl bg-sand-100 grid place-items-center mb-4">
                    <User className="w-12 h-12 text-sand-500" aria-hidden="true" />
                  </div>
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
          <p className="mt-6 text-sm text-neutral-500 italic">
            Les noms et photos du personnel seront affichés dès réception des informations de la clinique.
          </p>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader eyebrow="Organisation" title="Les équipes qui vous accompagnent" />
          <ul className="grid md:grid-cols-2 gap-5">
            {departments.map((d) => (
              <li key={d.title} className="bg-white rounded-2xl p-6 border border-neutral-150">
                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                  {d.title}
                </h3>
                <p className="text-neutral-700">{d.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
