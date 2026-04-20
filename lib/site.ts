export const site = {
  name: "Clinique ESSAADA",
  tagline: "Centre d'hémodialyse — Sidi Bel Abbès",
  description:
    "Centre d'hémodialyse à Sidi Bel Abbès. 37 lits, équipements récents, équipe pluridisciplinaire. Patients résidents et de passage. Conventionnée CNAS et CASNOS.",
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
    urgence: {
      phone: "+213 00 00 00 00 00",
      phoneHref: "tel:+213000000000",
      note: "Numéro d'urgence disponible 24h/24",
    },
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
    ramadanNote:
      "Pendant le Ramadan, les créneaux sont adaptés (après f'tour et avant s'hour) en concertation avec votre néphrologue.",
  },
  rdv: {
    rappelDelai: "sous 24 à 48 h (jours ouvrables)",
    reservationPassageMois: 1,
  },
  legal: {
    agrement: "[À COMPLÉTER : numéro d'agrément DSP Sidi Bel Abbès]",
    rc: "[À COMPLÉTER : numéro RC]",
    nif: "[À COMPLÉTER : NIF]",
    directeurPublication: "[À COMPLÉTER : directeur de la publication]",
    conventions: ["CNAS", "CASNOS"],
    conventionsLong: {
      CNAS: "Caisse Nationale des Assurances Sociales des travailleurs salariés",
      CASNOS: "Caisse Nationale de Sécurité Sociale des Non-Salariés",
    },
  },
  stats: {
    lits: 37,
    ouvertureAnnee: 2023,
    equipementsRecents: 2025,
    openDays: "sam. → jeu.",
  },
} as const;

export type Site = typeof site;
