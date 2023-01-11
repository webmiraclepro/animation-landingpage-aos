module.exports = {
  content: ['./src/**/*.{js, jsx, ts, tsx}'],
  theme: {
    fontFamily: {
      primary: 'Open Sans',
      secondary: 'Lato',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0'
      }
    },
    screens: {
      sm: '648px',
      md: '768px',
      lg: '1024px',
      xl: '1170px'
    },
    extend: {
      colors: {
        primary: '',
        secondary: ''
      }
    },
  },
  plugins: [],
}
