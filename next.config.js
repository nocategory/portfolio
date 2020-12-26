const path = require('path')

module.exports = {
  target: 'serverless',
  webpack(config) {
    config.resolve.alias.images = path.join(__dirname, 'public/images')
    return config
  },
}
