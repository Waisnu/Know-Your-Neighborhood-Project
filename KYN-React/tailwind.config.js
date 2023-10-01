/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        poppins: ["Poppins"],
      },
      colors: {
        primary: "", // Your primary color hex code
        white: "",   // White color hex code
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
    ],
  },
};


//Daisyui.com make developers life easy !!!!!!!!!!!!!!!!