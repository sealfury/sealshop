import { ProductType } from '@common/types/product'

type AvailableChoices = 'color' | 'size' | string

export type ProductChoices = {
  [P in AvailableChoices]: string
}

export const getVariant = (product: ProductType, choices: ProductChoices) =>
  // check if every variant option included in 'choices'
  product.variants.find(variant => {
    return variant.options.every(variantOpt => {
      const optionName = variantOpt.displayName.toLowerCase()

      return (
        optionName in choices &&
        choices[optionName] === variantOpt.values[0].label
      )
    })
  })
