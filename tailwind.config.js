const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require("@material-tailwind/react/utils/withMT")

/** @type {import('tailwindcss').Config} */
module.exports = withMT ( {
  darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
      fontFamily: {
        'righteous': ['JetBrainsMono']
    },
        extend: {
          colors: {
            'main-red': '#49be25'
          }
        },
    },

    plugins: [require('@tailwindcss/forms')],
});
