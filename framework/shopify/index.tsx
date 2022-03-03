import { ReactNode } from 'react'
import { getApiConfig } from './api/config'
import { ApiProvider as CommonApiProvider, useApiProvider } from '@common'

const apiConfig = getApiConfig()

interface ShopifyApiProviderProps {
  children: ReactNode | ReactNode[]
}

export const ApiProvider = ({ children }: ShopifyApiProviderProps) => {
  return (
    <CommonApiProvider
      apiConfig={{ ...apiConfig }}
    >
      {children}
    </CommonApiProvider>
  )
}

export const useShopifyApiProvider = () => {
  return useApiProvider()
}
