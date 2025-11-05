/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: "#00BFFF",
        secondary: "#E6F7FF",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        standard: "12px",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 191, 255, 0.1)",
      },
    },
  },
  plugins: [],
}