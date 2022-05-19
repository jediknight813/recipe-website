module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ph': { 'raw': '(min-width: 413px)' },
        'tb': { 'raw': '(min-width: 760px)' },
        'dt': { 'raw': '(min-width: 1025px)' },
      }
    }
  },
  plugins: [],
}
