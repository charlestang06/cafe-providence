import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        noto: ["Noto Serif", "sans-serif"],
      },
      animation: {
        "fly-animation": "fly 6s linear infinite",
      },
      keyframes: {
        fly: {
          "0%": {
            bottom: "0%",
            left: "0%",
          },
          "25%": {
            bottom: "50%",
            left: "50%",
          },
          "50%": {
            bottom: "100%",
            left: "100%",
          },
          "51%": {
            rotate: "-90deg",
            bottom: "0%",
            left: "100%",
          },
          "75%": {
            bottom: "50%",
            left: "50%",
          },
          "100%": {
            rotate: "-45deg",
            bottom: "100%",
            left: "0%",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
