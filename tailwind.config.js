const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'rubik': "'Rubik', sans-serif",
        'Playfair-Display': "'Playfair Display', serif",
        'Mulish': "'Mulish', sans-serif"
      },
      colors: {
        'melon': '#FF7757'
      }
    },
  },
  plugins: [],
});