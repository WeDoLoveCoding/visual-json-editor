const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://xx.xx.xx.xx:8000/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}