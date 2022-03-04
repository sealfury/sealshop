import useCart from '@common/cart/use-cart'

export default useCart

export const useCartHandler = {
  fetchOptions: {
    query: '',
  },
  fetcher() {
    return {
      data: 'Cart Preparation',
    }
  },
  useHook: ({ fetch }: any) => {
    const data = fetch()
    return data
  },
}
