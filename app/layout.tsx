import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ContactBar } from "@/components/layout/ContactBar";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { site } from "@/lib/site";
import { medicalClinicSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "hémodialyse",
    "dialyse",
    "clinique",
    "néphrologie",
    "Sidi Bel Abbès",
    "Algérie",
    "ESSAADA",
    "insuffisance rénale",
    "patients de passage",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: site.url },
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
        <meta name="theme-color" content="#0A475D" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalClinicSchema()),
          }}
        />
      </head>
      <body className="bg-white text-neutral-700 antialiased">
        <a href="#main" className="skip-link">
          Aller au contenu principal
        </a>
        <ContactBar />
        <Navigation />
        <main id="main" className="pb-24 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <WhatsAppButton />
      </body>
    </html>
  );
}
