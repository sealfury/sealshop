import { checkoutDetailFragment } from '../fragment'

const getCheckout = /* javascript */ `
  query($checkoutId: ID!){
    node(id: $checkoutId) {
      ... on Checkout {
        ${checkoutDetailFragment}
      }
    }
  }
`

export default getCheckout
