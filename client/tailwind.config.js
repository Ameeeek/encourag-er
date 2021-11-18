module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'pacifico' : 'pacifico',
        'hammer': 'Hammersmith One',
        'kutip' : 'Catamaran'
      },
      colors: {
        primary: '#C243A7',
        accent: '#52424D',
        secondary: '#212121',
        ungu: '#DB97FF',
        hijau: '#BBFF97'
      },
      screens:{
        'hp': {'max' : '858px'}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
