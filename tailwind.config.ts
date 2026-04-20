import type { Config } from "tailwindcss";

/**
 * Palette Clinique ESSAADA — dérivée du brand workshop (3 experts)
 *
 * Identité : "Soignant éclairé" (Caregiver + Sage)
 * Essence : "Chaque séance, la même attention."
 * Mood visuel : documentaire méditerranéen rigoureux
 *
 * Stratégie chromatique :
 *   — Primary teal profond méditerranéen (eau qui purifie, métaphore dialyse)
 *   — Sand ocre doré (terre qui accueille, lumière d'Oranie)
 *   — Ink indigo (profondeur structurelle, titres)
 *   — Neutrals WARM (Stone) — anti-clinique-froide, doux œil presbyte/diabétique
 *   — Accent emerald, warning amber, danger red : strictement sémantiques
 *
 * Tous les couples texte/fond recommandés passent WCAG 2.1 AA (≥ 4.5 body,
 * ≥ 3 large), la plupart AAA. Contrainte médicale intégrée : pas d'info
 * critique sur distinction bleu/jaune seule (rétinopathie diabétique).
 */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary — Teal profond méditerranéen (purification, confiance, modernité)
        primary: {
          50:  "#EEF6F9",
          100: "#D3E7EE",
          200: "#A3CEDB",
          300: "#6FB0C3",
          400: "#3D91AB",
          500: "#1B7693",
          600: "#0F5E79",  // CTA principal — 7.1:1 sur blanc (AAA)
          700: "#0A475D",  // Hero bg, headers — 9.2:1 sur blanc (AAA)
          800: "#072E3F",  // Contact bar — 13.9:1 sur blanc
          900: "#04202D",
        },

        // Sand — Ocre doré (terre d'Oranie, chaleur méditerranéenne)
        sand: {
          50:  "#FDF8EE",  // Surface alternative warm
          100: "#F6E9C9",  // Cards warm, badges
          200: "#EBD5A0",
          300: "#D9B974",
          400: "#C89F53",
          500: "#B38739",  // Accent décoratif doré (filets sous eyebrow)
          600: "#8E6A2D",
          700: "#6B4E22",  // Texte accent chaud sur sand-50 (6.5:1 AA)
          800: "#493419",
          900: "#2B1F0F",
        },

        // Ink — Indigo profond (harmonie analogue au teal, titres éditoriaux)
        ink: {
          50:  "#EFF0F7",
          100: "#D6D8E8",
          200: "#ACB1D0",
          500: "#3E4573",
          600: "#2E355E",
          700: "#232948",  // Alternative texte titre H2 hors hero (12.6:1 AAA)
          800: "#181C33",
          900: "#0E1123",
        },

        // Accent — Emerald (success sémantique, jamais décoratif)
        accent: {
          50:  "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",  // Texte success sur blanc (5.3:1 AA)
          800: "#065F46",
        },

        // Warning — Amber sémantique
        warning: {
          50:  "#FFFBEB",
          100: "#FEF3C7",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",  // Texte warning sur blanc (5.9:1 AA)
        },

        // Danger — Red sémantique
        danger: {
          50:  "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",  // Texte danger sur blanc (7.0:1 AAA)
          900: "#7F1D1D",
        },

        // Neutrals — Warm Stone (remplace Slate cool — recommandation color psy)
        neutral: {
          50:  "#FAFAF9",  // Surfaces claires warm
          100: "#F5F5F4",
          150: "#EEEEED",  // Midpoint warm custom
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A8A29E",  // Texte sur bg dark (6.6:1 sur neutral-900)
          500: "#78716C",
          600: "#57534E",
          700: "#44403C",  // Body par défaut (10.2:1 sur blanc, AAA)
          800: "#292524",  // Headings (14.3:1 sur blanc)
          900: "#1C1917",  // Deepest (17.5:1 sur blanc)
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      fontSize: {
        xs:    ["0.8125rem", { lineHeight: "1.25rem" }],
        sm:    ["0.9375rem", { lineHeight: "1.5rem" }],
        base:  ["1rem",      { lineHeight: "1.6rem" }],
        lg:    ["1.125rem",  { lineHeight: "1.75rem" }],
        xl:    ["1.25rem",   { lineHeight: "1.875rem" }],
        "2xl": ["1.5rem",    { lineHeight: "2rem" }],
        "3xl": ["1.875rem",  { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem",   { lineHeight: "2.625rem" }],
        "5xl": ["3rem",      { lineHeight: "3.375rem" }],
        "6xl": ["3.75rem",   { lineHeight: "4rem" }],
      },
      animation: {
        "fade-in": "fadeIn 300ms ease-out",
        "slide-up": "slideUp 400ms ease-out",
        "reveal": "reveal 400ms ease-out both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
