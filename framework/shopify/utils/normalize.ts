import {
  ImageEdge,
  MoneyV2,
  Product as ShopifyProduct,
  ProductOption,
} from '../schema'
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

/*
 ** product options = array of objs
 ** displayName = type of option (e.g. size, color)
 ** values = array of objs with 'label' key which is sizes 'm', 's' etc
 ** color/colour options are defined by color name & hex code
 */
const normalizeOption = ({ id, values, name: displayName }: ProductOption) => {
  const normalized = {
    id,
    displayName,
    values: values.map(value => {
      let output: any = {
        label: value,
      }

      if (displayName.match(/colou?r/gi)) {
        output = {
          ...output,
          hexColor: value,
        }
      }

      return output
    }),
  }

  return normalized
}

export const normalizeProduct = (productNode: ShopifyProduct): Product => {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    options,
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
    options: options
      ? options
          .filter(option => option.name !== 'Title')
          .map(opt => normalizeOption(opt))
      : [],
    ...rest,
  }

  return product
}
