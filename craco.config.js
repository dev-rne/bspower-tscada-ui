const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@pages': './src/pages',
          '@style': './src/style',
        },
      },
    },
  ],
}