import { createContext, ReactNode, useContext, useMemo } from 'react'
import { ApiConfig } from './types/api'

export interface ApiProviderProps {
  children: ReactNode | ReactNode[]
  apiConfig: ApiConfig
}

export const ApiContext = createContext({})

export const ApiProvider = ({ children, apiConfig }: ApiProviderProps) => {
  const commonApiConfig = useMemo(() => {
    return {
      fetcher: apiConfig.fetch,
    }
  }, [apiConfig.fetch])

  return (
    <ApiContext.Provider value={commonApiConfig}>
      {children}
    </ApiContext.Provider>
  )
}

export const useApiProvider = () => useContext(ApiContext)
