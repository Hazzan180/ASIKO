/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //font
    fontFamily: {
      "poppins": ['Poppins', 'serif'],
      "playfair": ["Playfair Display", 'serif']
    },

    //color
    colors:{
      mainColor: "#AC231E",
      primary: "#000",
      secondary: "#fff",
      gray: "#7A7A7A",
    },
    extend: {},
  },
  plugins: [],
}

