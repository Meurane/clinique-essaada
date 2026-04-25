import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";

const navGroup = [
  {
    title: "Le centre",
    links: [
      { href: "/la-clinique", label: "Notre centre" },
      { href: "/la-clinique/equipement-hygiene", label: "Équipement & hygiène" },
      { href: "/equipe", label: "Notre équipe" },
      { href: "/informations-pratiques", label: "Vivre avec la dialyse" },
    ],
  },
  {
    title: "Votre traitement",
    links: [
      { href: "/services/hemodialyse", label: "Hémodialyse" },
      { href: "/services/consultation-nephrologie", label: "Consultation néphrologie" },
      { href: "/services/premiere-seance", label: "Votre 1ʳᵉ séance" },
      { href: "/patients-de-passage", label: "Patients de passage" },
      { href: "/patients-de-passage/depuis-la-france", label: "Je viens de France (CPAM)" },
      { href: "/ramadan-et-dialyse", label: "Ramadan & dialyse" },
    ],
  },
  {
    title: "Comprendre",
    links: [
      { href: "/comprendre-l-insuffisance-renale", label: "L'insuffisance rénale" },
      { href: "/glossaire", label: "Glossaire" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Aide & Contact",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/rendez-vous", label: "Prendre rendez-vous" },
    ],
  },
];

export function Footer() {
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
                <span>{site.hours.opening}</span>
              </li>
              <li>
                <a
                  href={site.contact.phoneHref}
                  aria-label={`Appeler la clinique au ${site.contact.phone}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary-400" aria-hidden="true" />
                  <span>{site.contact.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          {navGroup.map((group) => (
            <div key={group.title}>
              <h2 className="font-display font-semibold text-white mb-3 text-sm">
                {group.title}
              </h2>
              <ul className="space-y-1.5 text-sm">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="underline decoration-white/20 underline-offset-2 hover:text-white hover:decoration-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-sm text-primary-100">
          <p>
            © {new Date().getFullYear()} {site.name} · Agrément Ministère de la Santé {site.legal.agrement} ·{" "}
            {site.legal.conventions.join(" · ")}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1 shrink-0">
            <li>
              <Link href="/mentions-legales" className="underline hover:text-white">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="underline hover:text-white">
                Confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
