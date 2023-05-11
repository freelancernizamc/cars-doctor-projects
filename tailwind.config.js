/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    'btn-primary': {
      'btn-primary': '#FF3811'
    },


  },
  plugins: [require("daisyui")],
}

