import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, ImageIcon } from "lucide-react";
import { site } from "@/lib/site";

const proofPoints = [
  "Médecin néphrologue présent à chaque séance — pas d'astreinte téléphonique",
  "Dossier CNAS / CASNOS : on s'occupe de la paperasse, vous venez avec votre carte Chifa",
  "Accompagnant bienvenu · salle d'attente dédiée · café et thé servis",
];

export function HomeHero() {
  return (
    <section className="relative bg-primary-700 text-white overflow-hidden">
      <div className="container-custom relative pt-16 pb-16 md:pt-24 md:pb-24 grid md:grid-cols-5 gap-10 md:gap-14 items-center">
        {/* Colonne gauche — contenu prioritaire (3/5) */}
        <div className="md:col-span-3 space-y-7">
          <div className="inline-flex items-center gap-2 bg-primary-600/40 border border-primary-400/40 px-3 py-1.5 rounded-full text-sm text-primary-100">
            <span className="w-2 h-2 rounded-full bg-accent-500" aria-hidden="true" />
            Conventionnée CNAS · CASNOS — tiers-payant intégral, zéro avance de frais
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
            Votre vie continue,
            <br />
            <span className="text-sand-100">on en prend soin.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-xl leading-relaxed">
            Hémodialyse à Sidi Bel Abbès — {site.stats.lits} lits,
            néphrologues présents, équipe formée à l'accompagnement des
            patients dialysés et de leurs proches.
          </p>
          <ul className="space-y-2.5 text-primary-50">
            {proofPoints.map((p) => (
              <li key={p} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 mt-0.5 text-accent-500 shrink-0" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
            <Link
              href="/rendez-vous"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 hover:bg-primary-50 px-6 py-4 rounded-full font-semibold transition-colors min-h-[56px]"
            >
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/la-clinique#visite-decouverte"
              className="inline-flex items-center justify-center gap-2 border border-primary-300/50 text-white hover:bg-primary-600/40 px-6 py-4 rounded-full font-semibold transition-colors min-h-[56px]"
            >
              Visiter le centre
            </Link>
          </div>
          <a
            href={site.contact.phoneHref}
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white text-sm"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>
              ou appelez directement —{" "}
              <span className="font-medium">{site.contact.phone}</span>
            </span>
          </a>
        </div>

        {/* Colonne droite — placeholder photo portrait (4/5), prêt pour shooting */}
        <div className="hidden md:block md:col-span-2">
          <figure
            className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-sand-50 ring-1 ring-white/10 shadow-2xl"
            aria-label="Emplacement photo équipe médicale — shooting à venir"
          >
            {/* Gradient subtil sand → primary léger pour donner de la profondeur */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-sand-50 via-sand-100 to-sand-200/60"
              aria-hidden="true"
            />
            {/* Motif rayures concentriques très discret — métaphore purification */}
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.06]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="dots-hero" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary-800" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots-hero)" />
            </svg>
            <figcaption className="absolute inset-0 flex flex-col items-center justify-center text-center gap-3 text-primary-800/60 px-6">
              <ImageIcon className="w-10 h-10" aria-hidden="true" strokeWidth={1.5} />
              <span className="font-display text-base font-semibold tracking-wide text-primary-800/70">
                Équipe médicale
              </span>
              <span className="text-xs text-primary-800/40">
                Shooting photographique à venir
              </span>
            </figcaption>
            {/* Petite pastille discrète en bas-gauche */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-primary-800 ring-1 ring-primary-800/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-600" aria-hidden="true" />
              Sidi Bel Abbès
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
