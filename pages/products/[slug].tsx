import { Layout } from '@components/common'
import {
  GetServerSidePropsContext,
  GetStaticPaths,
  InferGetServerSidePropsType,
} from 'next'

/* fetch product slugs - syntax mandatory w/ nextjs */
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'cool-hat' } },
      { params: { slug: 't-shirt' } },
      { params: { slug: 'lightweight-jacket' } },
    ],
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
