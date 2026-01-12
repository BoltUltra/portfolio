import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#E6FBFF",
          100: "#C0F3FF",
          200: "#8DE9FF",
          300: "#5CE0FF",
          400: "#2BD6FF",
          500: "#0ABDE3",
          600: "#0896B5",
          700: "#066E84",
          800: "#034753",
          900: "#012226",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        display: ["var(--font-space-grotesk)", ...fontFamily.sans],
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 60%)",
        "noise-texture": "url('/media/placeholders/noise.png')",
      },
      boxShadow: {
        glow: "0 0 40px rgba(43, 214, 255, 0.35)",
        card: "0 10px 60px rgba(4, 10, 45, 0.35)",
      },
    },
  },
  plugins: [typography],
};

export default config;
