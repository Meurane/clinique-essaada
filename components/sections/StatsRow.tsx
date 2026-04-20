import { site } from "@/lib/site";

const stats = [
  { value: `${site.stats.postes}`, label: "Postes de dialyse" },
  { value: site.stats.openDays, label: "Service continu" },
  { value: "24/7", label: "Médecin présent" },
  { value: `${site.stats.equipementsRecents}`, label: "Équipements renouvelés" },
];

export function StatsRow() {
  return (
    <section className="bg-white border-y border-neutral-150">
      <div className="container-custom py-14 md:py-20">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s) => (
            <li key={s.label} className="text-center md:text-left">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-700">
                {s.value}
              </div>
              <div className="mt-1 text-sm md:text-base text-neutral-600">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
