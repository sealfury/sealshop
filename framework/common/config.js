const path = require('path')
const fs = require('fs')

const merge = require('deepmerge')
const prettier = require('prettier')

const PERMITTED_FRAMEWORKS = ['shopify', 'big-commerce', 'shopify_local']
const FALLBACK_FRAMEWORK = 'shopify'

const errorColors = {
  PINKISH: '\033[38;2;219;55;107m',
  BURNT_ORANGE: '\033[38;2;250;176;17m'
}

function useFrameworkConfig(defaultConfig = {}) {
  let framework = defaultConfig?.framework?.name
   // color is provided in ANSI escape sequence
    const generateMessage = (options) => options.map(option => option.color + option.message).join(" ")

  if (!framework) {
    throw new Error(generateMessage([{
      color: errorColors.PINKISH,
      message: 'API Framework Is Missing. Please Add A Valid Provider!'
    }]))
  }

  if (!PERMITTED_FRAMEWORKS.includes(framework)) {
    throw new Error(generateMessage([{
      color: errorColors.BURNT_ORANGE,
      message: `The provided framework "${framework}"`
    },{
      color: errorColors.BURNT_ORANGE,
      message: `cannot be found. Try using one of these instead: ${PERMITTED_FRAMEWORKS.join(', ')}`
    }]))
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
