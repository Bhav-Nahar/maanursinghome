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
  plugins: [],
};

export default config;
