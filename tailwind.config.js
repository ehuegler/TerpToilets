module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          lighter: '#000',
          medium: '#e21833',
          darker: '#A71529',
        },
      },
      fontFamily: {
        crimson: ['Crimson Pro', 'serif'],
      },
    },
  },
  plugins: [],
}
