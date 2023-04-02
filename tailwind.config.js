/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'default':'#682CBB',
        'light':'#B5A8C8'
      }
    }
  },
  plugins: [],
}
