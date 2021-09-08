const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#06202A',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
