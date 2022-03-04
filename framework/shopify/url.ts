export const API_URL =
  process.env.NEXT_PUBLIC_FRAMEWORK === 'shopify_local'
    ? process.env.NEXT_PUBLIC_LOCAL_API_URL
    : process.env.NEXT_PUBLIC_SHOPIFY_URL
