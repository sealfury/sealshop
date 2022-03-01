import { ApiConfig, QueryVariables } from '@common/types/api'
import { getProductQuery, normalizeProduct } from '@framework/utils'
import { Product as ShopifyProduct } from '@framework/schema'
import { ProductType } from '@common/types/product'

type FetchType = { productByHandle: ShopifyProduct }
type ReturnType = { product: ProductType | null }

const getProduct = async (options: {
  config: ApiConfig
  variables: QueryVariables
}): Promise<ReturnType> => {
  const { config, variables } = options

  const { data } = await config.fetch<FetchType>({
    query: getProductQuery,
    url: config.apiUrl,
    variables,
  })

  const { productByHandle } = data

  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null,
  }
}

export default getProduct
