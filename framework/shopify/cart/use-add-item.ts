import { useAddItem } from '@common/cart'

export default useAddItem

export const hookHandler = {
  useFetcher: () => {
    console.log('Fetching Data')
  },
  useHook: () => {
    return (input: any) => {
      return {
        data: JSON.stringify(input) + 'with data!',
      }
    }
  }
}