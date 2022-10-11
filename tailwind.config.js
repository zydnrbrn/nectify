const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
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
            'main-red': '#BB3853'
          }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
