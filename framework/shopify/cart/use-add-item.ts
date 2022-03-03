import { useAddItem } from '@common/cart'

export default useAddItem

export const hookHandler = {
  useFetcher: (input: any) => {
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
