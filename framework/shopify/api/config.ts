import { ApiConfig } from '@common/types/api'
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
  apiUrl: 'http://localhost:4000/graphql',
  fetch: fetchApi,
})

export const getApiConfig = () => {
  return configWrapper.getConfig()
}
