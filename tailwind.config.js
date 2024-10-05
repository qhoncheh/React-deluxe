/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#DCDCDC',
      },
     
    },

  },
  
 
  plugins: [ require('daisyui') ],
}

