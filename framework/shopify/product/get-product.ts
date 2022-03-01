import { ApiConfig } from '@common/types/api'
import { getProductQuery } from '@framework/utils'

const getProduct = async (config: ApiConfig): Promise<any> => {
  const { data } = await config.fetch({
    query: getProductQuery,
    url: config.apiUrl,
  })

  console.log(JSON.stringify(data, null, 2))

  return {
    product: {
      name: 'Test product',
      slug: 'Test slug',
    },
  }
}

export default getProduct
