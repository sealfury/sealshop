import { ApiConfig } from '@common/types/api'
import { Product } from '@common/types/product'
import { ProductConnection } from '@framework/schema'
import getAllProductPathsQuery from '@framework/utils/queries/get-all-product-paths'

type ReturnType = {
  products: Pick<Product, 'slug'>[]
}

const getAllProductPaths = async (config: ApiConfig): Promise<ReturnType> => {
  // retrieve slug for path from schema
  const { data } = await config.fetch<{ products: ProductConnection }>({
    query: getAllProductPathsQuery,
    url: config.apiUrl,
  })

  const products = data.products.edges.map(({ node: { handle } }) => {
    return {
      slug: handle,
    }
  })

  console.log(products)
  return { products }
}

export default getAllProductPaths
