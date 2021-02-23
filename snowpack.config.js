module.exports = {
  mount: {
    public: '/',
    src: '/_dist_'
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    // [
    //   'snowpack-plugin-import-map',
    //   {
    //     imports: {
    //       '*': true
    //     },
    //     dev: false
    //   }
    // ],
    '@snowpack/plugin-postcss'
  ],
  devOptions: {
    port: 3000
  }
}

console.log('Fcuk')
