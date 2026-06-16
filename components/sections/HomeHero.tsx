import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function HomeHero() {
  const t = useTranslations("home");
  const tc = useTranslations("common");
  const proofPoints = [
    t("hero.proof.0"),
    t("hero.proof.1"),
    t("hero.proof.2"),
  ];
  return (
    <section className="relative bg-primary-700 text-white overflow-hidden">
      <div className="container-custom relative pt-16 pb-16 md:pt-24 md:pb-24 grid md:grid-cols-5 gap-10 md:gap-14 items-center">
        {/* Colonne gauche — contenu prioritaire (3/5) */}
        <div className="md:col-span-3 space-y-7">
          <div className="inline-flex items-center gap-2 bg-primary-600/40 border border-primary-400/40 px-3 py-1.5 rounded-full text-sm text-primary-100">
            <span className="w-2 h-2 rounded-full bg-accent-500" aria-hidden="true" />
            {t("hero.badge")}
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
            <span className="block">{t("hero.titleLine1")}</span>
            <span className="block text-sand-100">{t("hero.titleLine2")}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-xl leading-relaxed">
            {t("hero.intro", { lits: site.stats.lits })}
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
            <Button href="/rendez-vous" variant="light">
              {tc("bookAppointment")}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
            <Button href="/la-clinique#visite-decouverte" variant="outline">
              {t("hero.visitCenter")}
            </Button>
          </div>
          <a
            href={site.contact.phoneHref}
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white text-sm"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>
              {t("hero.callDirectly")}{" "}
              <span className="font-medium">{site.contact.phone}</span>
            </span>
          </a>
        </div>

        {/* Colonne droite — photo hall d'accueil portrait (4/5) */}
        <div className="hidden md:block md:col-span-2">
          <figure className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-sand-50 ring-1 ring-white/10 shadow-2xl">
            <Image
              src="/images/clinique-hall-accueil.webp"
              alt={t("hero.imageAlt")}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/85 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-primary-800 ring-1 ring-primary-800/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-600" aria-hidden="true" />
              Sidi Bel Abbès
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
