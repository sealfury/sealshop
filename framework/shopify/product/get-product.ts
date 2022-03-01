import { ApiConfig } from '@common/types/api'

const getProduct = async (config: ApiConfig): Promise<any> => {
  return {
    product: {
      name: 'Test product',
      slug: 'Test slug',
    },
  }
}

export default getProduct
