const path = require('path')
const merge = require('deepmerge')

function useFrameworkConfig(defaultConfig = {}) {
  const framework = 'shopify' // dynamically incorporate in future

  const fwkNextConfig = require(path.join('../', framework, 'next.config'))

  const config = merge(defaultConfig, fwkNextConfig)

  return config
}

module.exports = { useFrameworkConfig }
