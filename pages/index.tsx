import { InferGetStaticPropsType } from 'next/types'
import getAllProducts from '@framework/product/get-all-products'
import { getApiConfig } from '@framework/api/config'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Hero, Marquee } from '@components/ui'

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
  return (
    <>
      <Grid>
        {products.slice(0, 3).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        banner='Is For Stinas?'
        description='Cupcake ipsum dolor sit amet biscuit. I love I love pie caramels dessert. Carrot cake jujubes cake cheesecake cupcake soufflé.'
      />
      <Marquee>
        {products.slice(0, 3).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Marquee>
    </>
  )
}

Home.Layout = Layout
