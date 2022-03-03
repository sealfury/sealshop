import { useAddItem } from '@common/cart'
import { MutationHook } from '@common/types/hooks'

export default useAddItem

export const hookHandler: MutationHook = {
  fetcher: (input: any) => {
    return JSON.stringify(input) + ' with data!'
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
