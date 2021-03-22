module.exports = {
  // publicPath: "dist/",
  filenameHashing: false,
  configureWebpack: {
    watch: false,
    watchOptions: {
      poll: 2000
    }
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}
