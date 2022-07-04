/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'top': "url('./assets/img/bg.jpg')",
      },
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
