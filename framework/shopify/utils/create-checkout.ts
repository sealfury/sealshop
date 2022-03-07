import { ApiFetcherType } from '@common/types/api'
import { CheckoutCreatePayload, Checkout, Maybe } from '@framework/schema'
import {
  SHOPIFY_CHECKOUT_ID_COOKIE,
  SHOPIFY_CHECKOUT_URL_COOKIE,
  SHOPIFY_COOKIE_EXPIRY,
} from '@framework/url'
import Cookies from 'js-cookie'
import { checkoutCreateMutation } from './mutations'

const createCheckout = async (
  fetch: ApiFetcherType<{ checkoutCreate: CheckoutCreatePayload }>
): Promise<Maybe<Checkout | undefined>> => {
  const { data } = await fetch({ query: checkoutCreateMutation })

  const { checkout } = data.checkoutCreate
  const checkoutId = checkout?.id

  if (checkoutId) {
    const options = {
      expires: SHOPIFY_COOKIE_EXPIRY,
    }

    Cookies.set(SHOPIFY_CHECKOUT_ID_COOKIE, checkoutId, options)
    Cookies.set(SHOPIFY_CHECKOUT_URL_COOKIE, checkout?.webUrl, options)
  }

  return checkout
}

export default createCheckout
