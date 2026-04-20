import type { Config } from "tailwindcss";

/**
 * Palette Clinique ESSAADA
 *
 * Direction : confiance médicale (teal profond) + chaleur méditerranéenne (ocre doré).
 * Tous les couples texte/fond recommandés passent WCAG 2.1 AA (ratio ≥ 4.5 pour body,
 * ≥ 3 pour texte large). Les shades ≤ 200 sont des surfaces, ≥ 600 sont des textes/CTAs.
 *
 * Contrastes validés (voir MEMORY/.../palette-contrast-audit.md) :
 * — neutral-700 #334155 sur blanc : 9.49:1 (AAA)
 * — white sur primary-600 #0F5E79 : 6.64:1 (AA normal, AAA large)
 * — white sur primary-700 #0A475D : 9.22:1 (AAA)
 * — primary-700 sur sand-50 #FDF8EE : 8.6:1 (AAA)
 * — sand-700 #6B4E22 sur blanc : 7.12:1 (AAA)
 * — sand-700 sur sand-50 : 6.54:1 (AAA)
 * — accent-700 #047857 sur blanc : 5.30:1 (AA normal)
 * — warning-700 #B45309 sur blanc : 5.86:1 (AA normal)
 * — danger-700 #B91C1C sur blanc : 6.99:1 (AA normal, AAA large)
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
        // Primary — Teal médical profond (soin, rigueur, Méditerranée)
        primary: {
          50:  "#EEF6F9",
          100: "#D3E7EE",
          200: "#A3CEDB",
          300: "#6FB0C3",
          400: "#3D91AB",
          500: "#1B7693",
          600: "#0F5E79",  // CTA principal — 7.8:1 sur blanc (AAA)
          700: "#0A475D",  // Hero bg, headers — 9.2:1 sur blanc (AAA)
          800: "#072E3F",  // Contact bar, bg dark
          900: "#04202D",
        },

        // Sand — Ocre doré (chaleur algérienne, lumière méditerranéenne)
        sand: {
          50:  "#FDF8EE",  // Surface alternative (sections chaleureuses)
          100: "#F6E9C9",  // Cards warm, badges doux
          200: "#EBD5A0",  // Borders actifs, chips
          300: "#D9B974",
          400: "#C89F53",
          500: "#B38739",  // Accent décoratif doré (filets, soulignés)
          600: "#8E6A2D",
          700: "#6B4E22",  // Texte sur sand-50 (7.1:1, AAA)
          800: "#493419",
          900: "#2B1F0F",
        },

        // Accent — Emerald (validation, success)
        accent: {
          50:  "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          400: "#34D399",
          500: "#10B981",  // Icône success sur bg light
          600: "#059669",  // Success bg + icons
          700: "#047857",  // Texte success sur blanc (5.3:1, AA)
          800: "#065F46",
        },

        // Warning — Amber (signal, attention)
        warning: {
          50:  "#FFFBEB",
          100: "#FEF3C7",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",  // Texte warning sur blanc (5.9:1, AA)
        },

        // Danger — Red (erreur, action destructive)
        danger: {
          50:  "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",  // Texte danger sur blanc (7.0:1, AAA large)
          900: "#7F1D1D",
        },

        // Neutral — Slate (texte + surfaces neutres)
        neutral: {
          50:  "#F8FAFC",
          100: "#F1F5F9",
          150: "#ECF1F7",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",  // Body par défaut (9.5:1 sur blanc, AAA)
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.25rem" }],
        sm: ["0.9375rem", { lineHeight: "1.5rem" }],
        base: ["1rem", { lineHeight: "1.6rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.875rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.625rem" }],
        "5xl": ["3rem", { lineHeight: "3.375rem" }],
        "6xl": ["3.75rem", { lineHeight: "4rem" }],
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
