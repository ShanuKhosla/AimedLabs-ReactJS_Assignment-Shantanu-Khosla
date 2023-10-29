/** @type {import('tailwindcss').Config} */
module.exports = {
  
  plugins: [
    require('flowbite/plugin')
],
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        customBlue: 'rgb(5, 38, 99)',
        customIndigo: 'rgb(0, 66, 166)',
      },
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif'],
        'firaSans' : ['Fira Sans', 'sans-serif'],
        'spacegrotesk': ['Space Grotesk', 'sans'],
        'poppins': ['Poppins', 'sans'],

      },
      screens: {
        xs: "450px",
      }, 

    },
  },
};
