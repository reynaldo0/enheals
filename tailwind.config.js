/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",

    },
    extend: {
      colors:{
        purple: '#AB67B1',
        yellow: '#F7C04A',
      },
      backgroundAttachment: {
        fixed: 'fixed',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}