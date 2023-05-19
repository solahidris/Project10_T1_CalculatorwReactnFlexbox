/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js", "./src/components/header.js",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
}

