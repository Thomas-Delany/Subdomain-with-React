/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        bryndan: ['"Bryndan Write"', 'cursive'],
        dosis: ['Dosis', 'sans-serif'],
      },
      colors: {
        mellowGreen: '#00C699',
        greenAone: '#57b252',
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
