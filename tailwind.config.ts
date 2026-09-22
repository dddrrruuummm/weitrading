import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101820",
        navy: "#17324d",
        cobalt: "#0057b8",
        cyan: "#18a6c5",
        signal: "#f4d43b",
        valve: "#e4473b",
        paper: "#f5f5f0",
        fog: "#e4e8e8",
        steel: "#70848f",
        ppr: "#58a674",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica Neue", "sans-serif"],
        display: ["Arial Black", "Arial", "sans-serif"],
        mono: ["SFMono-Regular", "Consolas", "Liberation Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
