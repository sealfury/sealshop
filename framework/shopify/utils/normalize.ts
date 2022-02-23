import { ImageEdge, Product as ShopifyProduct } from '../schema'

const normalizeProductImages = ({ edges }: { edges: ImageEdge[] }) =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    }
  })

export const normalizeProduct = (productNode: ShopifyProduct): any => {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    ...rest
  } = productNode

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`, // slugified title
    slug: handle.replace(/^\/+|\/+$/g, ''), // remove /'s from beginning and end
    images: normalizeProductImages(imageConnection),
    ...rest,
  }

  return product
}
