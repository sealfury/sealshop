import { AppProps } from 'next/app'
import { Layout } from '@components/common'

const _App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default _App
