import { Checkout, Maybe } from '@framework/schema'
import { normalizeCart } from './normalize'

const checkoutCart = (checkout: Maybe<Checkout>) => {
  if (!checkout) {
    throw new Error('Checkout object not found')
  }

  return normalizeCart(checkout)
}

export default checkoutCart
