import type { Metadata } from "next";
import { Activity, Droplets, Shield, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardIcon } from "@/components/ui/Card";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "La clinique",
  description:
    "Découvrez la Clinique ESSAADA : 40 postes de dialyse, équipements récents, eau ultra-pure, équipe pluridisciplinaire à Sidi Bel Abbès.",
  alternates: { canonical: `${site.url}/la-clinique` },
};

const equipements = [
  {
    icon: Droplets,
    title: "Générateurs dernière génération",
    text: "Traçabilité des paramètres, contrôle continu de la qualité de la séance.",
  },
  {
    icon: Sparkles,
    title: "Eau de dialyse ultra-pure",
    text: "Traitement de l'eau conforme aux standards internationaux, contrôles réguliers.",
  },
  {
    icon: Activity,
    title: "Lits 3 positions",
    text: "Positionnement adapté pendant les 4 heures de séance.",
  },
  {
    icon: Shield,
    title: "Protocoles qualité",
    text: "Hygiène stricte, équipements certifiés, médecin présent en permanence.",
  },
];

export default function LaCliniquePage() {
  return (
    <>
      <PageHero
        eyebrow="La clinique"
        title="Un centre dédié à la dialyse, pensé pour vous"
        subtitle={`${site.stats.postes} postes de dialyse, une équipe pluridisciplinaire, un plateau technique récent. À ${site.city}, ${site.country}.`}
      />
      <div className="container-custom py-5">
        <Breadcrumb items={[{ name: "Accueil", url: "/" }, { name: "La clinique", url: "/la-clinique" }]} />
      </div>

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader eyebrow="Notre mission" title="Soigner, rassurer, accompagner" />
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                La Clinique ESSAADA est un centre d'hémodialyse privé à {site.city}.
                Elle accueille patients résidents et patients de passage avec la
                même exigence : une prise en charge médicale rigoureuse dans un
                environnement serein.
              </p>
              <p>
                Nos équipes combinent compétences néphrologiques, savoir-faire
                infirmier et accompagnement des patients. Chaque personne bénéficie
                d'un suivi personnalisé&nbsp;: éducation thérapeutique (apprendre à
                vivre avec la maladie), conseils diététiques, soutien psychologique,
                accompagnement des proches.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { k: "Postes de dialyse", v: `${site.stats.postes}` },
              { k: "Créneaux par jour", v: "3" },
              { k: "Équipements renouvelés en", v: `${site.stats.equipementsRecents}` },
              { k: "Conventionnements", v: site.legal.conventions.join(" · ") },
            ].map((row) => (
              <div
                key={row.k}
                className="flex justify-between gap-4 bg-sand-50 rounded-xl px-5 py-4"
              >
                <span className="text-neutral-600">{row.k}</span>
                <span className="font-display font-semibold text-primary-700">
                  {row.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Équipements"
            title="Un plateau technique pensé pour la qualité de soin"
          />
          <ul className="grid md:grid-cols-2 gap-5">
            {equipements.map((e) => (
              <li key={e.title}>
                <Card>
                  <CardIcon>
                    <e.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                    {e.title}
                  </h3>
                  <p className="text-neutral-700">{e.text}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
