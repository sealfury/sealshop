import { ProductOption, ProductVariant } from './product'

export interface Discount {
  value: number
}

export interface Cart {
  id: string
  createdAt: string
  taxes: boolean
  lineItemSubtotal: number
  totalPrice: number
  currency: { code: string }
  lineItems: any[]
  discounts: Discount[]
}

export interface LineItem {
  id: string
  variantId: string
  productId: string
  name: string
  path: string
  quantity: number
  discounts: Discount[]
  variant: Partial<ProductVariant>
  options?: ProductOption[]
}
