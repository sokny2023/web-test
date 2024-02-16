/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'aa': '#2566FF',
        'bb': 'rgb(91 33 182);',
         'primary-color' : '#0EA5E9',
         'secondary-color' : '#F43F5E',
      },
      margin: {
        'custom-1': '1.2rem', 
        'custom-2': '2rem',
        'custom-3': '3rem',
        'custom-4': '40rem',
      },
      container: {
        center: true,
        /*padding: {
          DEFAULT: '0rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        margin: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '6rem',
        }*/
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),require('@tailwindcss/forms'),],
}

