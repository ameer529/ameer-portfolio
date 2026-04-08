/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e11d48',
        'primary-dark': '#be123c',
        'dark-bg': '#0f0f0f',
        'card-bg': '#1a1a1a',
        'border-color': '#2a2a2a',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
