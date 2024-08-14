/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Commissioner: ['Commissioner', 'sans-serif']
      },

      colors: {
        cya: {
          'moderate': '#3cb4ac',
          'dark': 'hsl(0, 0%, 48%)',
        },

        'Darkgray': '#7a7a7a2d',
      },

      brightness: {
        30: '.30',
      },

      padding: {
        '5.5': '1.4rem',
        '12.5': '3.1rem',
        '37': '9.6rem',
        '15': '3.6rem',
        '31': '9.7rem'
      },

      width: {
        '8.5/12': '66.9%',
      },

      height: {
        '14.5': '3.3rem',
      }
    },
  },
  plugins: [],
}
