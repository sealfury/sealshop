const { useFrameworkConfig } = require('./framework/common/config')

module.exports = useFrameworkConfig({
  framework: {
    name: 'shopify_local',
  },
  i18n: {
    locales: ['en-US', 'sv'],
    defaultLocale: 'en-US',
  },
})

console.log('next.config.js', JSON.stringify(module.exports, null, 2))
