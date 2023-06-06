/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: ["Roboto", "sans-serif"],
    extend: {
      fontFamily: {
        heading: ["Archivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// colors:

// #ff4f03, #011102, #f1f1f1, #414045, #f2ad85, #935002
