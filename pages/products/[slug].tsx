import { Layout } from '@components/common'
import {
  GetServerSidePropsContext,
  GetStaticPaths,
  InferGetServerSidePropsType,
} from 'next'
import getAllProductPaths from '@framework/product/get-all-product-paths'
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
  return {
    props: {
      product: {
        slug: params?.slug,
      },
    },
  }
}

export default function ProductDetail({
  product,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return <div>{product.slug}</div>
}

ProductDetail.Layout = Layout
