import Cookies from 'js-cookie'
import { SHOPIFY_CHECKOUT_COOKIE } from '@framework/url'

const getCheckoutId = () => Cookies.get(SHOPIFY_CHECKOUT_COOKIE)

export default getCheckoutId
