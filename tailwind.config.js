/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'tanker': ['Tanker-Regular', 'Montserrat', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'menuxp': {
          yellow: '#FEBA0C',
          red: '#E53036',
          blue: '#0097E0',
          black: '#000000',
          white: '#FFFFFF',
        }
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      boxShadow: {
        'brutal': '4px 6px 0px #000000',
        'brutal-sm': '2px 3px 0px #000000',
        'brutal-lg': '6px 8px 0px #000000',
        'brutal-xl': '8px 12px 0px #000000',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.btn-tanker': {
          'font-family': 'Tanker-Regular, Montserrat, sans-serif !important',
        },
        '.btn-tanker-primary': {
          'font-family': 'Tanker-Regular, Montserrat, sans-serif !important',
          
        },
        '.btn-tanker-secondary': {
          'font-family': 'Tanker-Regular, Montserrat, sans-serif !important',
         
        },
      }
      addUtilities(newUtilities)
    }
  ],
};