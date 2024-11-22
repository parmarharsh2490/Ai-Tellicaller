/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '54': '54px',
      },
      fontFamily: {
          sans: ['DM Sans', 'sans-serif'], // Replace default or add as new
        helvetica: [
          "Helvetica Neue",
          "Helvetica",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
        bageta: ["Bageta", "sans-serif"],
      },
    },
  },
  plugins: [],
};
