/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MPlus: ["'M Plus 1'", "sans-serif"],
      },
      colors: {
        primary: "#1A1E1C",
        statsColor: "#3D544D",
        testColor: "#27322F",
        secondary: "#2BB32A",
      },
    },
  },
  plugins: [],
};
