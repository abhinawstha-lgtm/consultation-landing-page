import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00308C",
          dark: "#00246B",
          tint: "#E8EEFB",
        },
        secondary: "#2F5BD3",
        background: "#FFFFFF",
        soft: "#F6F8FC",
        heading: "#0A0A0A",
        body: "#475569",
        border: "#E2E8F0",
        error: "#DC2626",
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)",
        cta: "0 12px 30px rgba(0, 48, 140, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
