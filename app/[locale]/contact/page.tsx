import type { Metadata } from "next";
import { localizedAlternates } from "@/lib/i18n-meta";
import { Phone, Mail, MapPin, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site, waUrl } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contactPage" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: localizedAlternates(locale, "/contact"),
  };
}

export default function ContactPage() {
  const t = useTranslations("contactPage");
  const tc = useTranslations("common");

  const channels = [
    {
      icon: Phone,
      title: t("channels.phone.title"),
      value: site.contact.phone,
      href: site.contact.phoneHref,
      external: false,
    },
    {
      icon: MessageCircle,
      title: t("channels.whatsapp.title"),
      value: t("channels.whatsapp.value"),
      href: waUrl(tc("whatsappInfoMessage")),
      external: true,
    },
    {
      icon: Mail,
      title: t("channels.email.title"),
      value: site.contact.email,
      href: site.contact.emailHref,
      external: false,
    },
  ];

  return (
    <>
      <PhotoHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        photoIcon={MapPin}
        photoSrc="/images/clinique-entree.webp"
        photoAlt={t("hero.photoAlt")}
        photoLabel={t("hero.photoLabel")}
        photoTag="Sidi Bel Abbès"
      />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[
            { name: t("breadcrumb.home"), url: "/" },
            { name: t("breadcrumb.contact"), url: "/contact" },
          ]}
        />
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
            <SectionHeader eyebrow={t("coordinates.eyebrow")} title={t("coordinates.title")} />
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
                    {t("address.title")}
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
                    {t("hours.title")}
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
                  title={t("map.iframeTitle", { name: site.name })}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.6506%2C35.1728%2C-0.6106%2C35.2128&layer=mapnik&marker=35.1928%2C-0.6306"
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
                aria-label={t("map.openAria", { name: site.name })}
              >
                <span className="flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-primary-700" aria-hidden="true" />
                  <span className="font-medium text-neutral-900">
                    {t("map.openLabel")}
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
