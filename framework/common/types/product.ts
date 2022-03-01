export type CurrencyCode = 'USD' | 'EUR' | string

export interface ProductPrice {
  value: number
  currencyCode: CurrencyCode
}

export interface ProductImage {
  url: string
  alt?: string
}

export interface ProductOption {
  id: string
  displayName: string
  values: ProductOptionValue[]
}

export interface ProductOptionValue {
  label: string
  hexColor?: string
}

export interface ProductVariant {
  id: string
  name: string
  options: ProductOption[]
}

/*
 ** Got really sick of this competing with the
 ** 'Product' type from the schema on imports
 */
export interface ProductType {
  id: string
  name: string
  description: string
  slug: string
  path: string
  images: ProductImage[]
  price: ProductPrice
  options: ProductOption[]
  variants: ProductVariant[]
}
