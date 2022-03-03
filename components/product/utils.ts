import { ProductType } from '@common/types/product'

type AvailableChoices = 'color' | 'size' | string

export type ProductChoices = {
  [P in AvailableChoices]: string
}

export const getVariant = (product: ProductType, choices: ProductChoices) => {
  const variant = product.variants.find(variant => {
    console.log(variant)
    return false
  })

  return variant
}
