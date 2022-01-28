module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': '#C2C4C3',
        'custom-gray' : '#686868',
        'custom-darkGray' : '#151515',
      },
      fontFamily: {
        'thunder': ['Thunder'],
        'aquire': ['Aquire'],
      },
    },
  },
  plugins: [],
}
