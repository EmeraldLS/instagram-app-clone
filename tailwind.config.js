/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#C913B9",
        red: "#F9373F",
        yellow: "#FECD00",
      },
    },
  },
  plugins: [],
};
