const path = require('path')
const fs = require('fs')
const merge = require('deepmerge')

function useFrameworkConfig(defaultConfig = {}) {
  const framework = 'shopify' // dynamically incorporate hardcoded val in future

  // project-specific config
  const fwkNextConfig = require(path.join('../', framework, 'next.config'))
  const config = merge(defaultConfig, fwkNextConfig)

  // TS routing config
  const tsPath = path.join(process.cwd(), 'tsconfig.json')
  const tsConfig = require(tsPath)

  tsConfig.compilerOptions.paths['@framework'] = [`framework/${framework}`]
  tsConfig.compilerOptions.paths['@framework/*'] = [`framework/${framework}/*`]

  fs.writeFileSync(tsPath, JSON.stringify(tsConfig, null, 2))

  return config
}

module.exports = { useFrameworkConfig }
