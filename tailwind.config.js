module.exports = {
  purge: {
    enabled: true,
    content: ['src/**/*.jsx', 'src/**/*.js'],
    options: {
      safelist: ['text-6xl', 'text-5xl', 'text-4xl', 'md:text-6xl']
    }
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
