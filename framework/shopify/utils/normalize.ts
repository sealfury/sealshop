import { ImageEdge, MoneyV2, Product as ShopifyProduct } from '../schema'
import { Product } from '@common/types/product'

const normalizeImages = ({ edges }: { edges: ImageEdge[] }) =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    }
  })

const normalizePrice = ({ currencyCode, amount }: MoneyV2) => ({
  // value is string by default -> convert to number
  value: +amount,
  currencyCode,
})

export const normalizeProduct = (productNode: ShopifyProduct): Product => {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    ...rest
  } = productNode

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`, // slugified title
    slug: handle.replace(/^\/+|\/+$/g, ''), // remove /'s from beginning and end
    images: normalizeImages(imageConnection),
    price: normalizePrice(priceRange.minVariantPrice),
    ...rest,
  }

  return product
}
