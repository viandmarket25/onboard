/** @type {import('tailwindcss').Config} */
module.exports = {

  purge: [
    './index.html',
     './src/**/*.{vue,js,ts,jsx,tsx}',
      'node_modules/preline/dist/*.js',
    ],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [
    require('preline/plugin'),
   ],
 }