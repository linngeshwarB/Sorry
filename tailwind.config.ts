import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "rubik-mono": ["var(--font-rubik-mono)"],
        "dancing-script": ["var(--font-dancing-script)"],
      },
      colors: {
        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
            filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.05)",
            filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.8))",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
