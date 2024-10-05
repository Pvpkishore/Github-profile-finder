/**  @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
        'ferdoka': ["Fredoka", "sans-serif"], 
        'Azarina': ["Arizonia", "cursive"] 
      },
      screens: {
        'sm': '320px',
      },
    },
  },
  plugins: [],
}

