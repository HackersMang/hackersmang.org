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
        // Primary Colors from palette
        'primary-yellow': '#F9FA00',
        'primary-green': '#008B31',
        
        // Secondary Colors from palette
        'secondary-blue': '#2F55D9',
        'secondary-purple': '#7440CE',
        'secondary-orange': '#F26333',
        'secondary-red': '#C20205',
        
        // Neutral Colors from palette
        'neutral-900': '#302f2c',
        'neutral-100': '#dfddd6',
        'neutral-bg': '#dfddd6', // Alias for background usage
        'neutral-navy': '#001A31',
        'neutral-white': '#ffffff',
        'neutral-transparent': 'transparent',
        
        // Legacy colors for backward compatibility (keeping existing usage)
        primary: '#F9FA00',   // Yellow (legacy)
        secondary: '#9b9b9b', // Light Gray (legacy)
        neutral: '#666464',   // Gray (legacy)
        charcoal: '#2b2828',  // Dark Gray (legacy)
      },
      fontFamily: {
        pencil: ['pencil-studio', 'sans-serif'],
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