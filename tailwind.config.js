/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      fontFamily: {
        heading: ["Archivo", "sans-serif"],
      },
      colors: {
        custom1: "#ff4f03",
        custom2: "#03001C",
      },
    },
  },
  plugins: [],
});

// colors:

// #ff4f03, #011102, #f1f1f1, #414045, #f2ad85, #935002 #212026
