import { Layout } from '@components/common'
import {
  GetServerSidePropsContext,
  GetStaticPaths,
  InferGetServerSidePropsType,
} from 'next'
import { getAllProductPaths, getProduct } from '@framework/product'
import { getApiConfig } from '@framework/api/config'
import { ProductView } from '@components/product'

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
  return <>{product && <ProductView product={product} />}</>
}

ProductDetail.Layout = Layout
