import { ApiConfig } from '@common/types/api'
import { ProductType } from '@common/types/product'
import { ProductConnection } from '@framework/schema'
import getAllProductPathsQuery from '@framework/utils/queries/get-all-product-paths'

type ReturnType = {
  products: Pick<ProductType, 'slug'>[]
}

const getAllProductPaths = async (config: ApiConfig): Promise<ReturnType> => {
  // retrieve slug for path from schema
  const { data } = await config.fetch<{ products: ProductConnection }>({
    query: getAllProductPathsQuery,
  })

  const products = data.products.edges.map(({ node: { handle } }) => {
    return {
      slug: handle,
    }
  })

  return { products }
}

export default getAllProductPaths
