// tailwind.config.js

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Corrected syntax
  theme: {
    extend: {},
    container: {
      padding: "10rem",
    }
  },
  plugins: [], // Corrected property name
};

export default config;
