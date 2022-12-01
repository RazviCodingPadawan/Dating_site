/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/red_cat.jpg')",
        'top': "url('../public/images/461649.jpg')",
      },
    },
  },
  plugins: [],
}
