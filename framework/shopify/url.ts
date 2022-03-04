export const API_URL =
  process.env.NEXT_PUBLIC_FRAMEWORK === 'shopify_local'
    ? process.env.NEXT_PUBLIC_LOCAL_API_URL
    : process.env.NEXT_PUBLIC_SHOPIFY_URL

export const SHOPIFY_CHECKOUT_ID_COOKIE =
  process.env.NEXT_PUBLIC_FRAMEWORK === 'shopify_local'
    ? 'shopify_local_checkoutId'
    : 'shopify_checkoutId'
