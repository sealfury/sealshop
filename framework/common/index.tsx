import { createContext, ReactNode, useContext } from 'react'
import { getApiConfig } from '@framework/api/config'

const config = getApiConfig()

export interface ApiProviderProps {
  children: ReactNode | ReactNode[]
}

export const ApiContext = createContext({})

export const ApiProvider = ({ children }: ApiProviderProps) => {
  return (
    <ApiContext.Provider value={{ ...config, testKey: 'test value' }}>
      {children}
    </ApiContext.Provider>
  )
}

export const useApiProvider = () => useContext(ApiContext)
