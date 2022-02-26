export interface ProductImage {
  url: string
  alt?: string
}

export type CurrencyCode = 'USD' | 'EUR' | string

export interface ProductPrice {
  value: number
  currencyCode: CurrencyCode
}

export interface Product {
  id: string
  name: string
  description: string
  slug: string
  path: string
  images: ProductImage[]
  price: ProductPrice
}
