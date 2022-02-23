import getAllProductsQuery from '../utils/queries/get-all-products'
import fetchApi from '../utils/fetch-api'
import { ProductConnection } from '../schema'

type TempReturnType = {
  products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<TempReturnType>({
    query: getAllProductsQuery,
  })
  return data.products
}

export default getAllProducts
