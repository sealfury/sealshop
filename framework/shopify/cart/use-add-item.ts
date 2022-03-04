import { useAddItem } from '@common/cart'
import { MutationHook } from '@common/types/hooks'

export default useAddItem

export const hookHandler: MutationHook = {
  fetcher: async ({ fetch, input }) => {
    const res = await fetch({
      url: 'http://localhost:4000/graphql',
      query: `query  { hello }`,
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
