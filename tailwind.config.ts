import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#E2725B", // Terracotta
          light: "#E9A495",
          dark: "#BA4E3A"
      },
      secondary: {
          DEFAULT: "#CC7722", // Ochre Yellow
           light: "#E0A368",
           dark: "#A35B1A"
      },
      accent:{
          DEFAULT: "#F5F5DC", // Creamy White
          light: "#FBFBD3",
          dark: "#E0E0C8"
      }
      },
    },
  },
  plugins: [],
} satisfies Config;
