/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'header-bg':'#222256',
        'footer-bg':'#282828',
        'hover':'#F9ED33',
      }
    },
  },
  plugins: [],
}

