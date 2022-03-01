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

  // input variable to query to return only one matching product | null
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
    <div>
      {product.name}
      {product.slug}
    </div>
  )
}

ProductDetail.Layout = Layout
