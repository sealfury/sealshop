const path = require('path')
const fs = require('fs')

const merge = require('deepmerge')
const prettier = require('prettier')

const PERMITTED_FRAMEWORKS = ['shopify', 'big-commerce', 'shopify_local']
const FALLBACK_FRAMEWORK = 'shopify'

function useFrameworkConfig(defaultConfig = {}) {
  let framework = defaultConfig?.framework?.name

  // ANSI escape sequence -> kind of a pinkish colour
  const coloredMissingError =
    '\033[38;2;219;55;107mAPI Framework Is Missing. Please Add A Valid Provider!'

  // Kind of a burnt orange colour
  const coloredInvalidError =
    '\033[38;2;250;176;17mThe provided framework "' +
    framework +
    '\033[38;2;250;176;17m" cannot be found. Try using one of these instead: ' +
    PERMITTED_FRAMEWORKS.join(', ')

  if (!framework) {
    throw new Error(coloredMissingError)
  }

  if (!PERMITTED_FRAMEWORKS.includes(framework)) {
    throw new Error(coloredInvalidError)
  }

  if (framework === 'shopify_local') {
    framework = FALLBACK_FRAMEWORK
  }

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
