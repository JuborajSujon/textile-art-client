/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        chakraPetch: ["Chakra Petch", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
