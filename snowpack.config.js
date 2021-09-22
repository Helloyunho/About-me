module.exports = {
  mount: {
    public: '/',
    src: '/_dist_'
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-postcss'],
  devOptions: {
    port: 3000
  }
}
