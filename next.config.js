const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const path = require('path')

module.exports = withPlugins([
  [
    optimizedImages,
    {
      target: 'serverless',
      webpack(config) {
        config.resolve.alias.images = path.join(__dirname, 'images')
        return config
      },
      images: {
        // for example
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
      },
      optimize: true,
      limit: 1,
    },
  ],
])
