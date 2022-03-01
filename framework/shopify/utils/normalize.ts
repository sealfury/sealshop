import {
  ImageEdge,
  MoneyV2,
  Product as ShopifyProduct,
  ProductOption,
  ProductVariantConnection,
  SelectedOption,
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

// variants ~= product details for vendor reference
const normalizeVariants = ({ edges }: ProductVariantConnection) => {
  return edges.map(({ node }) => {
    const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 } = node

    // normalize variant options within variant
    const getVariantOptions = selectedOptions.map(
      ({ name, value }: SelectedOption) => {
        const option = normalizeOption({
          id,
          name,
          values: [value],
        })

        return option
      }
    )

    return {
      id,
      name: title,
      sku: sku || id,
      price: +priceV2.amount,
      listPrice: +compareAtPriceV2.amount,
      shippingNeeded: true,
      options: getVariantOptions,
    }
  })
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
    variants,
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
    variants: variants ? normalizeVariants(variants) : [{}],
    ...rest,
  }

  return product
}
