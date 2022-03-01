import { normalizeProduct, getAllProductsQuery } from '../utils'
import { ProductConnection } from '../schema'
import { ProductType } from '@common/types/product'
import { ApiConfig } from '@common/types/api'

type TempReturnType = {
  products: ProductConnection
}

const getAllProducts = async (config: ApiConfig): Promise<ProductType[]> => {
  const { data } = await config.fetch<TempReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
  })

  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product)
    }) ?? []

  return products
}

export default getAllProducts
