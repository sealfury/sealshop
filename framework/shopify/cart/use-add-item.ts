import { useAddItem } from '@common/cart'
import { MutationHook } from '@common/types/hooks'
import { getCheckoutId } from '@framework/utils'

export default useAddItem

export const hookHandler: MutationHook = {
  fetcherOptions: {
    query: `query { hello }`,
  },
  fetcher: async ({ fetch, input, options }) => {
    const variables = {
      checkoutId: getCheckoutId(),
      lineItems: [
        {
          variantId: input.variantId,
          quantity: 1,
        },
      ],
    }

    debugger

    const res = await fetch({
      ...options,
      variables,
    })
    return res
  },
  useHook: ({ fetch }: any) => {
    return async (input: any) => {
      const response = await fetch(input)
      return {
        data: response,
      }
    }
  },
}
