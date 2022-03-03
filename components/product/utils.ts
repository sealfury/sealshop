import { ProductType } from '@common/types/product'

type AvailableChoices = 'color' | 'size' | string

export type ProductChoices = {
  [P in AvailableChoices]: string
}

export const getVariant = (product: ProductType, choices: ProductChoices) => {
  const variant = product.variants.find(variant => {
    // check if every variant option included in 'choices'
    const matchesChoice = variant.options.every(variantOpt => {
      const optionName = variantOpt.displayName.toLowerCase()

      if (optionName in choices) {
        if (choices[optionName] === variantOpt.values[0].label) {
          return true
        }
      }
      return false
    })
    return matchesChoice
  })

  return variant
}
