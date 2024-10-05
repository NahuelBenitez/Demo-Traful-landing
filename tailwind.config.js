/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      colors: {
      bluefb: '#273c75', // Tu color personalizado
    },
},
  },
  plugins: [],
}

