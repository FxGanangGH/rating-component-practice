/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      screens: {
        desktop: '1440px'
      },
      colors: {
        primary: {
          500: '#fb7413'
        },
        neutral: {
          grey: '#959eac',
          'blue-500': '#252d37',
          'blue-600': '#1a1e24',
          'blue-700': '#121417'
        }
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif']
      },
      fontSize: {
        rating: '15px'
      },
      letterSpacing: {
        article: '10px'
      }
    }
  },
  plugins: []
}
