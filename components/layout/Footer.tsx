import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";

const navGroup = [
  {
    titleKey: "groups.center",
    links: [
      { href: "/la-clinique", labelKey: "links.ourCenter" },
      { href: "/la-clinique/equipement-hygiene", labelKey: "links.equipment" },
      { href: "/la-clinique/composition-corporelle", labelKey: "links.bodyComposition" },
      { href: "/equipe", labelKey: "links.ourTeam" },
      { href: "/informations-pratiques", labelKey: "links.livingWith" },
    ],
  },
  {
    titleKey: "groups.treatment",
    links: [
      { href: "/services/hemodialyse", labelKey: "links.hemodialysis" },
      { href: "/services/consultation-nephrologie", labelKey: "links.consultation" },
      { href: "/services/premiere-seance", labelKey: "links.firstSession" },
      { href: "/patients-de-passage", labelKey: "links.visiting" },
      { href: "/patients-de-passage/depuis-la-france", labelKey: "links.fromFrance" },
      { href: "/ramadan-et-dialyse", labelKey: "links.ramadan" },
    ],
  },
  {
    titleKey: "groups.understand",
    links: [
      { href: "/comprendre-l-insuffisance-renale", labelKey: "links.understanding" },
      { href: "/glossaire", labelKey: "links.glossary" },
      { href: "/faq", labelKey: "links.faq" },
    ],
  },
  {
    titleKey: "groups.help",
    links: [
      { href: "/contact", labelKey: "links.contact" },
      { href: "/rendez-vous", labelKey: "links.appointment" },
    ],
  },
] as const;

export function Footer() {
  const t = useTranslations();
  const tf = useTranslations("footer");
  return (
    <footer className="bg-primary-700 text-primary-100 border-t border-white/5">
      <div className="container-custom pt-10 pb-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6">
          <div className="space-y-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-display font-bold text-lg text-white"
            >
              <span className="w-9 h-9 rounded-lg bg-white grid place-items-center p-1 shrink-0">
                <Image
                  src="/logo.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </span>
              <span>Clinique ESSAADA</span>
            </Link>
            <ul className="space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary-400" aria-hidden="true" />
                <span>
                  {site.address.street}, {site.address.postalCode} {site.address.city}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0 text-primary-400" aria-hidden="true" />
                <span>{t("hours.openDaysLong")}</span>
              </li>
              <li>
                <a
                  href={site.contact.phoneHref}
                  aria-label={t("common.callAria", { phone: site.contact.phone })}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary-400" aria-hidden="true" />
                  <span dir="ltr">{site.contact.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          {navGroup.map((group) => (
            <div key={group.titleKey}>
              <h2 className="font-display font-semibold text-white mb-3 text-sm">
                {tf(group.titleKey)}
              </h2>
              <ul className="space-y-1.5 text-sm">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="underline decoration-white/20 underline-offset-2 hover:text-white hover:decoration-white transition-colors"
                    >
                      {tf(l.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-sm text-primary-100">
          <p>
            © {new Date().getFullYear()} {site.name} · {tf("accreditation")} {site.legal.agrement} ·{" "}
            {site.legal.conventions.join(" · ")}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1 shrink-0">
            <li>
              <Link href="/mentions-legales" className="underline hover:text-white">
                {tf("legalNotice")}
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="underline hover:text-white">
                {tf("privacy")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
