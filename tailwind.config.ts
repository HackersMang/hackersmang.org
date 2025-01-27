/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fontFamily: {
          pencil: ['pencil-studio', 'sans-serif'],
        },
        primary: '#d4e20b',   // Yellow
        secondary: '#9b9b9b', // Light Gray
        neutral: '#666464',   // Gray
        charcoal: '#2b2828',  // Dark Gray
      },
      backgroundImage: {
        'grainy' : "url('/ai-techverse/noise.svg')",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 10s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
      }
    },
  },
  plugins: [],
};