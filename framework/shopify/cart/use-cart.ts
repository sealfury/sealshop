import useCart from '@common/cart/use-cart'
import { createCheckout, getCheckoutQuery } from '@framework/utils'

export default useCart

export const useCartHandler = {
  fetcherOptions: {
    // get checkout query
    query: getCheckoutQuery,
  },
  async fetcher({ fetch, options, input: { checkoutId } }: any) {
    let checkout

    // get checkout data from id
    if (checkoutId) {
      const { data } = await fetch({
        ...options,
        variables: {
          checkoutId,
        },
      })

      checkout = data.node
    } else {
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
