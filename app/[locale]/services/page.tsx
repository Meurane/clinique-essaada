import type { Metadata } from "next";
import { HeartPulse } from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ConversionFooterCTA } from "@/components/sections/ConversionFooterCTA";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services · Hémodialyse & néphrologie",
  description:
    "Hémodialyse, consultation néphrologie, préparation à la 1ʳᵉ séance. Découvrez l'offre de soins de la Clinique ESSAADA.",
  alternates: { canonical: `${site.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <PhotoHero
        eyebrow="Services"
        title="Nos services de néphrologie et de dialyse"
        subtitle="Une offre complète pour les patients insuffisants rénaux, à tous les stades de leur parcours."
        photoIcon={HeartPulse}
        photoSrc="/images/clinique-hall-accueil.webp"
        photoAlt="Hall d'accueil de la Clinique d'Hémodialyse ESSAADA à Sidi Bel Abbès — piliers en marbre, comptoir de réception et escalier monumental"
        photoLabel="Parcours de soins"
        photoTag="Consultation & dialyse"
      />
      <div className="container-custom py-5">
        <Breadcrumb items={[{ name: "Accueil", url: "/" }, { name: "Services", url: "/services" }]} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Services", url: "/services" },
            ]),
          ),
        }}
      />
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Un parcours clair, du premier rendez-vous au suivi long terme"
            subtitle="Chaque service est conçu autour du patient : rigueur médicale, information accessible, respect du temps."
          />
          <ServicesGrid />
        </div>
      </section>

      <ConversionFooterCTA
        variant="sand"
        title="Un parcours adapté à votre situation ?"
        subtitle="Consultation, première dialyse, séjour de passage — notre équipe vous oriente vers le bon service."
        waMessage="Bonjour, je cherche à comprendre quel service de la Clinique ESSAADA correspond à ma situation."
      />
    </>
  );
}
