import useCart from '@common/cart/use-cart'

export default useCart

export const useCartHandler = {
  fetcherOptions: {
    // get checkout query
    query: 'query { hello }',
  },
  async fetcher({ fetch, options, input: { checkoutId } }: any) {
    const data = await fetch({ ...options })
    // get checkout id
    console.log(checkoutId)
    // get checkout from id

    // if no checkout, create it

    return { data }
  },
  useHook: ({ useData }: any) => {
    const data = useData()
    return {
      data,
    }
  },
}
