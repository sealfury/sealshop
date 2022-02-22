import { InferGetStaticPropsType } from 'next'

export const getStaticProprs = async () => {
  const products = [1, 2, 3]

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProprs>) {
  return <div>{products}</div>
}
