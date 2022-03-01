import { ApiConfig, QueryVariables } from '@common/types/api'
import { getProductQuery } from '@framework/utils'
import { Product as ShopifyProduct } from '@framework/schema'

type FetchType = { productByHandle: ShopifyProduct }

const getProduct = async (options: {
  config: ApiConfig
  variables: QueryVariables
}): Promise<any> => {
  const { config, variables } = options

  const { data } = await config.fetch<FetchType>({
    query: getProductQuery,
    url: config.apiUrl,
    variables,
  })

  console.log(JSON.stringify(data.productByHandle, null, 2))

  return {
    product: {
      name: 'Test product',
      slug: 'Test slug',
    },
  }
}

export default getProduct
