import { useAddItem } from '@common/cart'
import { MutationHook } from '@common/types/hooks'

export default useAddItem

export const hookHandler: MutationHook = {
  fetcherOptions: {
    query: `query { hello }`,
  },
  fetcher: async ({ fetch, options }) => {
    const res = await fetch({
      ...options,
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
