import { checkoutDetailFragment } from '../fragment'

const checkoutCreate = /* javascript */ `
  mutation checkoutCreate($input: CheckoutCreateInput = {}) {
    checkoutCreate(input: $input) {
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

export default checkoutCreate
