import { ApiFetcherType } from '@common/types/api'
import { CheckoutCreatePayload, Checkout, Maybe } from '@framework/schema'
import { checkoutCreateMutation } from './mutations'

const createCheckout = async (
  fetch: ApiFetcherType<{ checkoutCreate: CheckoutCreatePayload }>
): Promise<Maybe<Checkout | undefined>> => {
  const { data } = await fetch({ query: checkoutCreateMutation })

  const { checkout } = data.checkoutCreate
  const checkoutId = checkout?.id

  return checkout
}

export default createCheckout
