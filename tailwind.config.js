/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      colors:{
        'Neutral': {
          50 : '#F9F9F9',
          100: '#F4F4F4',
          200: '#E4E4E4',
          300: '#D3D3D3',
          400: '#A2A2A2',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
          1000: '#000000',
        },
        'Twitterblue': '#1D9BF0',
        'Twitterblue-hover': '#1871CA',
        'Twitterblue-disabled': '#1E5D87',
        'Bluewash': 'rgba(255, 255, 255, 0.12)',
        'Buttonstroke': '#546A7A',
        'Searchbarfill': '#212327',
        'Cardfill': '#16181C',
        'Success': '#00BE74',
        'Error': '#8B141A',
        'Stroke': 'rgba(255, 255, 255, 0.24)', 
      },
      fontSize: {
        '3.5xl': '1.93rem',
        '2.5xl': '1.625rem',
        '0.5xl': '1.1875rem',
        '0.5lg': '1.0625rem',
        '0.5base': '0.9375rem',
        '0.5sm': '0.8125rem',
        '0.5xs': '0.625rem',

      },
      width: {
        '334': '20.875rem',
        '442': '27.625rem',
        '434': '27.125rem',
        '426': '26.625rem',
        '85': '5.3125rem',
        '98': '6.125rem',
        '222': '13.875rem', 
      },
      height: {
        '36': '2.25rem',
      },
      borderRadius: {
        '65': '65px',
        '30': '30px',
        '9999':'9999px'
      },
      boxShadow: {
        'button': '0 8px 16px 0px rgba(0, 0, 0, 0.25)',
      },
      spacing: {
        '15px': '15px',
        '93px': '93px',
      }
    },
  },
  plugins: [],
}

