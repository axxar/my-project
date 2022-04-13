module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['poppins', 'sans-serif'],
      'IndieFlower': ["Indie Flower", 'sans-serif'], // Ensure fonts with spaces have " " surrounding it.
      'AdventPro': ["Advent Pro", 'sans-serif'], // Ensure fonts with spaces have " " surrounding it.
      'Poppins': ["Poppins", 'sans-serif'], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
