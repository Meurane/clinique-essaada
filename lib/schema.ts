import { site } from "./site";

export function medicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.name,
    description: site.description,
    medicalSpecialty: "Nephrology",
    url: site.url,
    telephone: site.contact.phone.replace(/\s/g, ""),
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.city,
      addressCountry: site.countryCode,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "05:00",
      closes: "19:00",
    },
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
  };
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
