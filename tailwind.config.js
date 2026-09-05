/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        darkBg: "#0a0a0f",
        darkNavy: "#111827",
        accentPurple: "#a855f7",
        accentCyan: "#06b6d4",
      },
    },
  },

  plugins: [],
};