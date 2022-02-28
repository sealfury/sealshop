import '@assets/main.css'
import { UIContextProvider } from '@components/ui/context'
import { AppProps } from 'next/app'

const Noop: React.FC = ({ children }) => <>{children}</>

const _App = ({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: React.FC } }) => {
  const Layout = Component.Layout ?? Noop

  return (
    <UIContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIContextProvider>
  )
}

export default _App
