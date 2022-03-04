import { useAddItem } from '@common/cart'
import { MutationHook } from '@common/types/hooks'

export default useAddItem

export const hookHandler: MutationHook = {
  fetcher: ({ fetch, input }) => {
    const res = fetch(input)
    return res
  },
  useHook: ({ fetch }: any) => {
    return (input: any) => {
      const response = fetch(input)
      return {
        data: response,
      }
    }
  },
}
