/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["page/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "cus-orange": "#e7882a",
        "cus-blue":"#007fc5",
        "cus-blue-2":"#005591",
        "cus-green":"#0c9849"
      }
    },
  },
  plugins: [],
}

