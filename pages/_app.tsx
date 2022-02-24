import { AppProps } from 'next/app'

const Noop: React.FC = ({ children }) => <>{children}</>

const _App = ({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: React.FC } }) => {
  const Layout = Component.Layout ?? Noop

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default _App
