module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: '8080',
    https: true,
    public: 'hmivue.ddns.net'
  }
}