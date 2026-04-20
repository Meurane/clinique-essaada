import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EEF6F9",
          100: "#D3E7EE",
          200: "#A3CEDB",
          300: "#6FB0C3",
          400: "#3D91AB",
          500: "#1B7693",
          600: "#0F5E79",
          700: "#0A475D",
          800: "#072E3F",
          900: "#04202D",
        },
        sand: {
          50: "#FAF6F0",
          100: "#F1E8D6",
          200: "#E4D2B0",
          300: "#CFB67F",
          400: "#BFA175",
          500: "#B89968",
          600: "#8E7346",
          700: "#6B5332",
          800: "#4A3822",
          900: "#2E2214",
        },
        accent: {
          50: "#E8F5E9",
          100: "#C8E6C9",
          500: "#4CAF50",
          600: "#43A047",
          700: "#388E3C",
        },
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          150: "#ECF1F7",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
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
