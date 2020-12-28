module.exports = {
  target: 'serverless',
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  async headers() {
    return [
      {
        source: '/oss',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=86400',
          },
        ],
      },
    ]
  },
}
