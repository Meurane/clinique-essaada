export const site = {
  name: "Clinique ESSAADA",
  tagline: "Centre d'hémodialyse — Sidi Bel Abbès",
  description:
    "Centre d'hémodialyse à Sidi Bel Abbès. 40 postes, équipements récents, équipe pluridisciplinaire. Patients résidents et de passage.",
  url: "https://cliniquessaada.fr",
  locale: "fr_DZ",
  city: "Sidi Bel Abbès",
  country: "Algérie",
  countryCode: "DZ",
  address: {
    street: "[À COMPLÉTER : adresse complète]",
    postalCode: "22000",
    city: "Sidi Bel Abbès",
    country: "Algérie",
  },
  contact: {
    phone: "+213 00 00 00 00 00",
    phoneHref: "tel:+213000000000",
    whatsapp: "213000000000",
    whatsappUrl: "https://wa.me/213000000000",
    email: "cliniqueessaada22@gmail.com",
    emailHref: "mailto:cliniqueessaada22@gmail.com",
  },
  hours: {
    opening: "Du samedi au jeudi",
    sessions: [
      { label: "1ère séance", range: "05h00 — 09h00" },
      { label: "2ème séance", range: "09h30 — 13h30" },
      { label: "Soir", range: "14h00 — 19h00" },
    ],
    note: "Les horaires peuvent être ajustés pour optimiser la prise en charge.",
  },
  legal: {
    agrement: "[À COMPLÉTER : numéro d'agrément Ministère de la Santé]",
    rc: "[À COMPLÉTER : numéro RC]",
    nif: "[À COMPLÉTER : NIF]",
    directeurPublication: "[À COMPLÉTER : directeur de la publication]",
    conventions: ["CNAS", "CASNOS"],
  },
  stats: {
    postes: 40,
    ouvertureAnnee: 2008,
    equipementsRecents: 2025,
    openDays: "7j/7",
  },
} as const;

export type Site = typeof site;
