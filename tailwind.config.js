/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f3efe6',
        'paper-alt': '#ece7da',
        card: '#faf8f2',
        ink: '#1a160f',
        muted: '#7c7468',
        body: '#3a342b',
        accent: '#d8452a',
        'accent-dark': '#b23a22',
        success: '#2e7d50',
        line: 'rgba(26,22,15,0.12)',
        'line-strong': 'rgba(26,22,15,0.18)',
        'line-dark': 'rgba(243,239,230,0.14)',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        card: '18px',
      },
      maxWidth: {
        editorial: '1200px',
      },
      boxShadow: {
        lift: '0 18px 40px -22px rgba(26,22,15,0.45)',
      },
    },
  },
  plugins: [],
}
