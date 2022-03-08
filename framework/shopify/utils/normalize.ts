import {
  Checkout,
  CheckoutLineItemEdge,
  ImageEdge,
  MoneyV2,
  Product as ShopifyProduct,
  ProductOption,
  ProductVariantConnection,
  SelectedOption,
} from '../schema'
import { ProductType } from '@common/types/product'
import { Cart, LineItem } from '@common/types/cart'

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
      shipping: true,
      options: getVariantOptions,
    }
  })
}

export function normalizeProduct(productNode: ShopifyProduct): ProductType {
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
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeImages(imageConnection),
    price: normalizePrice(priceRange.minVariantPrice),
    options: options
      ? options.filter(o => o.name !== 'Title').map(o => normalizeOption(o))
      : [],
    variants: variants ? normalizeVariants(variants) : [],
    ...rest,
  }

  return product
}

export const normalizeLineItem = ({
  node: { id, title, variant, ...rest },
}: CheckoutLineItemEdge): LineItem => {
  return {
    id,
    name: title,
    productId: String(variant?.id),
    variantId: String(variant?.id),
    path: variant?.product?.handle ?? '',
    variant: {
      id: String(variant?.id),
      sku: variant?.sku ?? '',
      name: variant?.title,
      shipping: variant?.requiresShipping ?? false,
      price: variant?.priceV2.amount,
      listPrice: variant?.compareAtPriceV2?.amount,
      image: {
        url:
          process.env.NEXT_PUBLIC_FRAMEWORK === 'shopify_local'
            ? `/public/images/${variant?.image?.originalSrc}`
            : variant?.image?.originalSrc ?? '/mr-seal-yo-girl.svg',
      },
    },
    discounts: [],
    options: variant?.selectedOptions.map(({ name, value }: SelectedOption) => {
      const option = normalizeOption({ id, name, values: [value] })

      return option
    }),
    ...rest,
  }
}

export const normalizeCart = (checkout: Checkout): Cart => {
  return {
    id: checkout.id,
    createdAt: checkout.createdAt,
    currency: {
      code: checkout.totalPriceV2.currencyCode,
    },
    taxes: checkout.taxesIncluded,
    lineItemSubtotal: +checkout.subtotalPriceV2.amount,
    lineItems: checkout.lineItems.edges.map(normalizeLineItem),
    totalPrice: checkout.totalPriceV2.amount,
    discounts: [],
  }
}
