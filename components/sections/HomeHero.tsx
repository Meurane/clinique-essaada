import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

const proofPoints = [
  "Équipements récents · traçabilité qualité",
  "Équipe pluridisciplinaire sur place",
  "Patients résidents et de passage",
];

const miniStats = [
  { value: `${site.stats.postes}`, label: "Postes de dialyse" },
  { value: "3×", label: "Créneaux par jour" },
  { value: site.stats.equipementsRecents, label: "Équipements renouvelés" },
  { value: "24/7", label: "Médecin présent" },
];

export function HomeHero() {
  return (
    <section className="relative bg-primary-700 text-white overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-[520px] h-[520px] rounded-full bg-primary-500/25 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-sand-500/10 blur-3xl pointer-events-none"
      />
      <div className="container-custom relative pt-14 pb-16 md:pt-24 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 bg-primary-600/40 border border-primary-400/40 px-3 py-1.5 rounded-full text-sm text-primary-100">
            <span className="w-2 h-2 rounded-full bg-accent-500" aria-hidden="true" />
            Conventionnée CNAS · CASNOS
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
            Centre d'hémodialyse à
            <br />
            <span className="text-sand-100">Sidi Bel Abbès</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-xl leading-relaxed">
            {site.stats.postes} postes de dialyse, équipe pluridisciplinaire,
            prise en charge personnalisée. Nous accueillons aussi les patients
            de passage.
          </p>
          <ul className="space-y-2.5 text-primary-50">
            {proofPoints.map((p) => (
              <li key={p} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 mt-0.5 text-accent-500 shrink-0" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <Link
              href="/rendez-vous"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 hover:bg-primary-50 px-6 py-4 rounded-full font-semibold transition-colors min-h-[56px]"
            >
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-2 text-primary-100 hover:text-white underline underline-offset-4 decoration-primary-300/60 decoration-2 min-h-[48px] px-2"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span className="font-medium">{site.contact.phone}</span>
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-4">
            {miniStats.map((s) => (
              <div
                key={s.label}
                className="bg-primary-600/40 border border-primary-400/30 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-primary-100 text-base">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
