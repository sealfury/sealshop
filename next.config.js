const { useFrameworkConfig } = require('./framework/common/config')

module.exports = useFrameworkConfig({
  framework: {
    name: process.env.NEXT_PUBLIC_FRAMEWORK,
  },
  i18n: {
    locales: ['en-US', 'sv'],
    defaultLocale: 'en-US',
  },
})

console.log('next.config.js', JSON.stringify(module.exports.framework, null, 2))
