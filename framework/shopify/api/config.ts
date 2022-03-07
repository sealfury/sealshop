import { ApiConfig } from '@common/types/api'
import { SHOPIFY_CHECKOUT_ID_COOKIE } from '@framework/url'
import { fetchApi } from '../utils'

class Config {
  constructor(private config: ApiConfig) {
    this.config = config
  }

  getConfig(): ApiConfig {
    return this.config
  }
}

const configWrapper = new Config({
  fetch: fetchApi,
  checkoutCookie: SHOPIFY_CHECKOUT_ID_COOKIE
})

export const getApiConfig = () => {
  return configWrapper.getConfig()
}
