/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'umd': '#E21833',
        'bg': '#F3F6F9',
      },
      fontFamily: {
        crimson: ['Crimson', '"Times New Roman"'],
      },
    },
  },
  plugins: [],
}
