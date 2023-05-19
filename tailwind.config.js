/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js", "./src/components/header.js", "./src/components/ButtonHandler.js"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}

