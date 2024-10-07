/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      bluefb: '#273c75', // Tu color personalizado
    },
    boxShadow: {
      'text-blue': '2px 2px 4px rgba(0, 0, 255, 0.7)', // Añade sombra de texto azul
    },
},
  },
  plugins: [],
}

