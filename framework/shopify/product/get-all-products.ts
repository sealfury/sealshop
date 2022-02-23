import fetchApi from '../utils/fetch-api'
import getAllProductsQuery from '../utils/queries/get-all-products'
import { ProductConnection } from '../schema'
import { normalizeProduct } from '../utils/normalize'

type TempReturnType = {
  products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<TempReturnType>({
    query: getAllProductsQuery,
  })

  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product)
    }) ?? []

  return products
}

export default getAllProducts
