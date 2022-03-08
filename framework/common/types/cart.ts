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
