import Link from "next/link";
import { Heart, Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { site } from "@/lib/site";

const navGroup = [
  {
    title: "La clinique",
    links: [
      { href: "/la-clinique", label: "Notre clinique" },
      { href: "/equipe", label: "Notre équipe" },
      { href: "/informations-pratiques", label: "Infos pratiques" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services/hemodialyse", label: "Hémodialyse" },
      { href: "/services/consultation-nephrologie", label: "Consultation néphrologie" },
      { href: "/services/premiere-seance", label: "Votre 1ʳᵉ séance" },
    ],
  },
  {
    title: "Aide & Contact",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
      { href: "/rendez-vous", label: "Prendre rendez-vous" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-custom pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-display font-bold text-xl text-white"
            >
              <span className="w-10 h-10 rounded-lg bg-primary-600 grid place-items-center">
                <Heart className="w-5 h-5" aria-hidden="true" />
              </span>
              <span>Clinique ESSAADA</span>
            </Link>
            <p className="text-sm leading-relaxed">{site.description}</p>
            <div className="space-y-2 pt-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-primary-400" aria-hidden="true" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}, {site.address.country}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0 text-primary-400" aria-hidden="true" />
                <span>{site.hours.opening}</span>
              </div>
            </div>
          </div>

          {navGroup.map((group) => (
            <div key={group.title}>
              <h2 className="font-display font-semibold text-white mb-4">{group.title}</h2>
              <ul className="space-y-2 text-sm">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 grid md:grid-cols-2 gap-6">
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={site.contact.phoneHref}
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Phone className="w-4 h-4 text-primary-400" aria-hidden="true" />
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={site.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={site.contact.emailHref}
                className="inline-flex items-center gap-2 hover:text-white break-all"
              >
                <Mail className="w-4 h-4 text-primary-400" aria-hidden="true" />
                {site.contact.email}
              </a>
            </li>
          </ul>
          <div className="text-xs leading-relaxed text-neutral-400">
            <p>
              Agrément Ministère de la Santé : {site.legal.agrement}
              <br />
              Conventionnements : {site.legal.conventions.join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li>
              <Link href="/mentions-legales" className="hover:text-neutral-300">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="hover:text-neutral-300">
                Confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
