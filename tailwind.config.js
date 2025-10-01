/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  
  theme: {
    extend: {
      colors: {
        primary: "#e85c00",
        secondary: "#f4a261",
        accent: "#2a9d8f",
        background: "#1a1a1a",
        surface: "#333333",
        neutral: "#f5f5f5"
      },
    },
  },
  plugins: [],
}