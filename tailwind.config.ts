import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(8px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      colors: {
        primary: {
          900: "#0f172a",
          700: "#1e3a8a",
          500: "#2563eb",
          DEFAULT: "#1e3a8a",
          foreground: "#ffffff",
        },
        accent: {
          600: "#059669",
          DEFAULT: "#059669",
          foreground: "#ffffff",
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          500: "#64748b",
          900: "#0f172a",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
