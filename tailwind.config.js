/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","index.html"],
  theme: {
    extend: {
      screens:{
        "lg":"1366px",
      }
    },
  },
  plugins: [],
}

