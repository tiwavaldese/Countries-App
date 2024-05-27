/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'd-dark': '#1a202c', 
        'c-white': '#ffffff', 
        'light-bg': '#F6F8FF',
        'c-light-gray' : '#486A9B',
        'm-dark' : '#1E2A47'
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      width: {
        '30': '30%',
        '5': '5%',
        '60': '60%',
        '45': '45%',
        '40': '40%',
        '100': '100%',
      },
      height: {
        '60': '60%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

