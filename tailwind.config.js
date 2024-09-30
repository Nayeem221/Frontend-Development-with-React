/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'brandColor':'#C51605',

        
      }
    },
    container:{
      center:true,
      padding:{
        xl:'130px'
      }
    },
    fontFamily:{
      inter:["Inter", "sans-serif"]
    }
  },
  plugins: [],
}