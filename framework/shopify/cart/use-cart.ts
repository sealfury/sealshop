import useCart from '@common/cart/use-cart'
import { createCheckout } from '@framework/utils'

export default useCart

export const useCartHandler = {
  fetcherOptions: {
    // get checkout query
    query: 'query { hello }',
  },
  async fetcher({ fetch, options, input: { checkoutId } }: any) {
    let checkout

    debugger
    // get checkout from id
    if (checkoutId) {
      const { data } = await fetch({ ...options })

      checkout = data.node
    } else {
      // if no checkout, create it
      checkout = await createCheckout(fetch)
    }

    return checkout
  },
  useHook: ({ useData }: any) => {
    const data = useData()
    return {
      data,
    }
  },
}
