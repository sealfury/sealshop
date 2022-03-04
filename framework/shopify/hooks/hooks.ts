import { hookHandler as useAddItem } from '../cart/use-add-item'
import { useCartHandler as useCart } from '../cart/use-cart'

export const shopifyHooks = {
  cart: {
    useAddItem,
    useCart,
  },
}
