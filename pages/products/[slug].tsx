import { Layout } from '@components/common'
import {
  GetServerSidePropsContext,
  GetStaticPaths,
  InferGetServerSidePropsType,
} from 'next'
import { getAllProductPaths, getProduct } from '@framework/product'
import { getApiConfig } from '@framework/api/config'

/* fetch product slugs - syntax mandatory w/ nextjs */
export const getStaticPaths: GetStaticPaths = async () => {
  const config = getApiConfig()
  const { products } = await getAllProductPaths(config)

  return {
    paths: products.map(product => ({ params: { slug: product.slug } })),
    fallback: false, // throw error for page that DNE
  }
}

/* provide product-specific data to page (also mandatory) */
export const getStaticProps = async ({
  params,
}: GetServerSidePropsContext<{ slug: string }>) => {
  const config = getApiConfig()

  // input variable to query to return only one matching product
  const { product } = await getProduct({
    config,
    variables: { slug: params?.slug },
  })

  return {
    props: {
      product,
    },
  }
}

export default function ProductDetail({
  product,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <div className='mb-4 px-6 py-2'>
      <p>id: {product?.id}</p>
      <p>name: {product?.name}</p>
      <p>
        price: {product?.price.value} {product?.price.currencyCode}
      </p>
      <p>description: {product?.description}</p>

      <h3 className='mb-2 mt-4 font-bold'>Product Options</h3>
      <div>
        {product?.options.map(option => (
          <div>
            <p>option name: {option.displayName}</p>
            {option.values.map(value => (
              <div>
                <p>label: {value.label}</p>
                <p>hex: {value.hexColor}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <h3 className='mb-2 mt-4 font-bold'>Product Variants</h3>
      <div>
        {product?.variants.map(variant => (
          <div>
            <p>variant name: {variant.name}</p>
            {variant.options.map(varOpt => (
              <div>
                <p>var opt name: {varOpt.displayName}</p>
                {varOpt.values.map(val => (
                  <div>
                    <p>label: {val.label}</p>
                    <p>hex: {val.hexColor}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

ProductDetail.Layout = Layout
