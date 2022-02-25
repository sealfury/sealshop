import { InferGetStaticPropsType } from 'next/types'
import getAllProducts from '@framework/product/get-all-products'
import { getApiConfig } from '@framework/api/config'
import { Layout } from '@components/common'

export const getStaticProps = async () => {
  const apiConfig = getApiConfig()

  const products = await getAllProducts(apiConfig)

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{JSON.stringify(products)}</div>
}

Home.Layout = Layout
