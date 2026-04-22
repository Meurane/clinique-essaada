import { BedDouble, CalendarDays, Stethoscope, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

const stats = [
  { icon: BedDouble, value: `${site.stats.lits}`, label: "Lits d'hémodialyse" },
  { icon: CalendarDays, value: "Sam–Jeu", label: "Service continu" },
  { icon: Stethoscope, value: "05h–19h", label: "Médecin présent" },
  {
    icon: Sparkles,
    value: `${site.stats.equipementsRecents}`,
    label: "Équipements renouvelés",
  },
];

export function StatsRow() {
  return (
    <section className="bg-white border-y border-neutral-150">
      <div className="container-custom py-14 md:py-20">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 lg:divide-x lg:divide-sand-200/70">
          {stats.map((s) => (
            <li
              key={s.label}
              className="flex flex-col items-center text-center lg:px-6 group"
            >
              <span
                aria-hidden="true"
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-sand-50/70 text-primary-700 ring-1 ring-primary-100/60 shadow-sm mb-5 transition-transform duration-200 group-hover:-translate-y-0.5"
              >
                <s.icon className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <span className="font-display text-4xl md:text-5xl font-bold text-primary-700 leading-none tabular-nums whitespace-nowrap">
                {s.value}
              </span>
              <span
                aria-hidden="true"
                className="mt-4 block w-8 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent"
              />
              <span className="mt-3 text-sm md:text-base text-neutral-700 font-medium">
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
