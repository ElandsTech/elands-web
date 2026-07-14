/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: "#0B0B0B",
          DEFAULT: "#141312",
          mid: "#161513",
          light: "#4E63A6",
        },
        volt: {
          DEFAULT: "#EF7D36",
          light: "#F4995F",
          dark: "#D46522",
        },
        ivory: "#F6F2EA",
        slate: {
          text: "#6E6A62",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ["Jost", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.28em",
      },
    },
  },
  plugins: [],
};
