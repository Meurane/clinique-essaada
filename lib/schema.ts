import { site } from "./site";

const CLINIC_DAYS = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"] as const;

const MEDICAL_CLINIC_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  "@id": `${site.url}/#clinic`,
  name: site.name,
  description: site.description,
  medicalSpecialty: "Nephrology",
  url: site.url,
  image: `${site.url}/opengraph-image`,
  logo: `${site.url}/icon`,
  telephone: site.contact.phoneHref.replace("tel:", ""),
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: "DZ-22",
    postalCode: site.address.postalCode,
    addressCountry: site.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.1928,
    longitude: -0.6306,
  },
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Sidi Bel Abbès" },
    { "@type": "AdministrativeArea", name: "Wilaya de Sidi Bel Abbès" },
    { "@type": "AdministrativeArea", name: "Ouest algérien" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...CLINIC_DAYS],
      opens: "05:00",
      closes: "09:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...CLINIC_DAYS],
      opens: "09:30",
      closes: "13:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...CLINIC_DAYS],
      opens: "14:00",
      closes: "19:00",
    },
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Hémodialyse",
      procedureType: "https://schema.org/TherapeuticProcedure",
    },
    {
      "@type": "MedicalProcedure",
      name: "Consultation Néphrologie",
      procedureType: "https://schema.org/DiagnosticProcedure",
    },
  ],
  sameAs: [],
} as const;

export function medicalClinicSchema() {
  return MEDICAL_CLINIC_SCHEMA;
}

export function medicalProcedureSchema(args: {
  name: string;
  description: string;
  procedureType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: args.name,
    description: args.description,
    procedureType: args.procedureType ?? "https://schema.org/TherapeuticProcedure",
    performedBy: { "@type": "MedicalClinic", name: site.name, url: site.url },
  };
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export function definedTermSchema(args: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: args.name,
    description: args.description,
    inDefinedTermSet: `${site.url}/glossaire`,
    url: `${site.url}/glossaire/${args.slug}`,
  };
}

export function articleSchema(args: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  category?: string;
}) {
  const url = `${site.url}/blog/${args.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    inLanguage: "fr",
    image: `${site.url}/opengraph-image`,
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    author: { "@type": "Organization", name: args.author, url: site.url },
    publisher: {
      "@type": "MedicalClinic",
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/icon` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    articleSection: args.category,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.url}`,
    })),
  };
}
