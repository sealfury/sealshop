const path = require('path')
const fs = require('fs')

const merge = require('deepmerge')
const prettier = require('prettier')

function useFrameworkConfig(defaultConfig = {}) {
  const framework = defaultConfig?.framework.name

  // project-specific config
  const fwkNextConfig = require(path.join('../', framework, 'next.config'))
  const config = merge(defaultConfig, fwkNextConfig)

  // TS routing config
  const tsPath = path.join(process.cwd(), 'tsconfig.json')
  const tsConfig = require(tsPath)

  tsConfig.compilerOptions.paths['@framework'] = [`framework/${framework}`]
  tsConfig.compilerOptions.paths['@framework/*'] = [`framework/${framework}/*`]

  fs.writeFileSync(
    tsPath,
    prettier.format(JSON.stringify(tsConfig), { parser: 'json' })
  )

  return config
}

module.exports = { useFrameworkConfig }
