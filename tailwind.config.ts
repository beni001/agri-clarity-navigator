
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#F2FCE2", // Soft, natural green background
        foreground: "#2C4A1B", // Deep forest green for text
        primary: {
          DEFAULT: "#4A6741", // Rich olive green
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#8B7355", // Earthy brown
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FEF7CD", // Soft yellow for drought highlights
          foreground: "#6F4E37", // Coffee brown
        },
        muted: {
          DEFAULT: "#E2D1C3", // Soft earth tone
          foreground: "#5C4033", // Deep brown
        },
        destructive: {
          DEFAULT: "#FEC6A1", // Soft orange for drought warnings
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
