/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Background layers */
        bg: {
          main: "#0E0F12",     // deep ink
          soft: "#14161B",     // elevated surface
          subtle: "#1A1D24",   // cards / sections
        },

        /* Text tones */
        text: {
          primary: "#E6E7EB",   // soft white
          secondary: "#A1A6B3", // muted steel
          muted: "#6B7280",     // metadata
        },

        /* Accent (used VERY sparingly) */
        accent: {
          primary: "#6EE7B7",   // soft mint
          muted: "#34D399",
        },

        /* Borders / separators */
        line: {
          subtle: "rgba(255,255,255,0.06)",
        },
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
