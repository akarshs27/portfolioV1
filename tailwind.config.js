module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        'background' : '#111827',
        'background2' : '#1A202C',
        'lightBlue' : '#6BC5F8',
        'lightPurple' : 'rgb(207, 89, 230)',
        'purple' : '#8000ff',
        'nearme1' : '#4F60C3',
        'nearme2' : '#3C46A2',

      },

      // animation : {
      //   gradient: 'gradient 3s ease infinite'
      // },

      // keyframes : {
      //   gradient : {
      //     '0%' : {
      //       'background-position': '0% 50%'
      //     },
      //     '50%' : {
      //       'background-position': '100% 50%'
      //     },
      //     '100%' : {
      //       'background-position': '0% 50%'
      //     },
      //   }
      // }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
