import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez la Clinique ESSAADA à Sidi Bel Abbès : téléphone, WhatsApp, email, adresse, horaires.",
  alternates: { canonical: `${site.url}/contact` },
};

const channels = [
  {
    icon: Phone,
    title: "Téléphone",
    value: site.contact.phone,
    href: site.contact.phoneHref,
    external: false,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Écrivez-nous sur WhatsApp",
    href: site.contact.whatsappUrl,
    external: true,
  },
  {
    icon: Mail,
    title: "Email",
    value: site.contact.email,
    href: site.contact.emailHref,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <PhotoHero
        eyebrow="Contact"
        title="Nous joindre"
        subtitle="Pour nous joindre rapidement : WhatsApp ou téléphone. Notre équipe répond du samedi au jeudi."
        photoIcon={MapPin}
        photoLabel="Façade & accès"
        photoTag="Sidi Bel Abbès"
      />
      <div className="container-custom py-5">
        <Breadcrumb items={[{ name: "Accueil", url: "/" }, { name: "Contact", url: "/contact" }]} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Contact", url: "/contact" },
            ]),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader eyebrow="Coordonnées" title="Plusieurs moyens de nous joindre" />
            <ul className="space-y-3">
              {channels.map((c) => (
                <li key={c.title}>
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-150 bg-white hover:bg-neutral-50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-600 text-white grid place-items-center shrink-0">
                      <c.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-neutral-900">
                        {c.title}
                      </div>
                      <div className="text-primary-700 font-medium break-all">
                        {c.value}
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-sand-50">
              <div className="flex items-start gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary-700 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-display font-semibold text-neutral-900">
                    Adresse
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    {site.address.street}
                    <br />
                    {site.address.postalCode} {site.address.city}, {site.address.country}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-sand-50">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-700 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-display font-semibold text-neutral-900">
                    Horaires
                  </div>
                  <p className="text-neutral-700">{site.hours.opening}</p>
                  <ul className="mt-2 space-y-1 text-base">
                    {site.hours.sessions.map((s) => (
                      <li key={s.label} className="flex justify-between gap-4">
                        <span className="text-neutral-600">{s.label}</span>
                        <span className="text-neutral-900 font-medium">{s.range}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
              <div className="relative aspect-[16/10] bg-sand-50">
                <iframe
                  title={`Emplacement de ${site.name} sur Google Maps`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    `${site.name}, ${site.city}, ${site.country}`,
                  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${site.name}, ${site.city}, ${site.country}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-5 py-4 bg-white border-t border-neutral-150 hover:bg-neutral-50 transition-colors group"
                aria-label={`Ouvrir l'emplacement de ${site.name} dans Google Maps`}
              >
                <span className="flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-primary-700" aria-hidden="true" />
                  <span className="font-medium text-neutral-900">
                    Ouvrir dans Google Maps
                  </span>
                </span>
                <ExternalLink
                  className="w-4 h-4 text-neutral-500 group-hover:text-primary-700 transition-colors"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
