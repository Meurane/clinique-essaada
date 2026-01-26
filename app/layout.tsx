import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cliniquessaada.fr"),
  title: {
    default: "Clinique ESSAADA | Centre d'Hémodialyse - Sidi Bel Abbès",
    template: "%s | Clinique ESSAADA",
  },
  description:
    "Clinique ESSAADA - Centre d'hémodialyse moderne à Sidi Bel Abbès. Équipements de nouvelle génération, équipe médicale qualifiée. Prise en charge personnalisée de l'insuffisance rénale.",
  keywords: [
    "hémodialyse",
    "clinique",
    "Sidi Bel Abbès",
    "insuffisance rénale",
    "néphrologie",
    "dialyse",
    "ESSAADA",
    "Algérie",
    "centre dialyse",
  ],
  authors: [{ name: "Clinique ESSAADA" }],
  creator: "Clinique ESSAADA",
  publisher: "Clinique ESSAADA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    url: "https://cliniquessaada.fr",
    siteName: "Clinique ESSAADA",
    title: "Clinique ESSAADA | Centre d'Hémodialyse",
    description:
      "Centre d'hémodialyse moderne à Sidi Bel Abbès. Soins de qualité et accompagnement personnalisé pour les patients atteints d'insuffisance rénale.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clinique ESSAADA - Centre d'Hémodialyse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinique ESSAADA | Centre d'Hémodialyse",
    description:
      "Centre d'hémodialyse moderne à Sidi Bel Abbès. Soins de qualité et accompagnement personnalisé.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cliniquessaada.fr",
  },
  category: "health",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0078A5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Clinique ESSAADA",
              description:
                "Centre d'hémodialyse moderne à Sidi Bel Abbès, Algérie",
              medicalSpecialty: "Nephrology",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sidi Bel Abbès",
                addressCountry: "DZ",
              },
              telephone: "+213000000000",
              url: "https://cliniquessaada.fr",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "06:00",
                closes: "23:00",
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
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
