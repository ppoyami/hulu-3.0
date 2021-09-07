const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#06202A',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
