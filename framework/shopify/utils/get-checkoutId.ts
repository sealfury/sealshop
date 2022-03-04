import Cookies from 'js-cookie'
import { SHOPIFY_CHECKOUT_ID_COOKIE } from '../url'

const getCheckoutId = () => {
  const cookie = Cookies.get(SHOPIFY_CHECKOUT_ID_COOKIE)
  console.log(cookie)
  return cookie
}

export default getCheckoutId
