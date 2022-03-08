import { checkoutDetailFragment } from '../fragment'

const checkoutLineItemsAdd = /* javascript */ `
  mutation(
    $checkoutId: ID!,
    $lineItems: [CheckoutLineItemInput!]! ) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      checkoutUserErrors {
        field
        message
      }
      checkout {
        ${checkoutDetailFragment}
      }
    }
  }
`

export default checkoutLineItemsAdd
