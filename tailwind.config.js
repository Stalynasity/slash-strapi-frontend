/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';

export default {
  darkMode: ['selector', '[class="app-dark"]'],
  content: ['./src/**/*.{html,ts,css,scss}', './index.html'],
  plugins: [PrimeUI],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1920px'
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%':   { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)'   },
        },
      },
      animation: {
        // puedes ajustar la duración o el easing a tu gusto
        fadeIn: 'fadeIn 500ms ease-out forwards',
      },
    },
  }
};
