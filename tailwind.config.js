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
        keyframes: {
          wave: {
            to: {
              "margin-left": "-51%"
            }
          }
        },
        animation: {
          wave: "wave 1.5s ease-in-out infinite"
        },
    },

    plugins: [require('@tailwindcss/forms')],
});
