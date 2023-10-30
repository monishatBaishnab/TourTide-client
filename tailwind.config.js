/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': "'Rubik', sans-serif",
        'Playfair-Display': "'Playfair Display', serif",
        'Mulish': "'Mulish', sans-serif"
      }
    },
  },
  plugins: [],
}