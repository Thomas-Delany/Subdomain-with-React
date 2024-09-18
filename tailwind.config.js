/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        mellowGreen: '#00C699',
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
