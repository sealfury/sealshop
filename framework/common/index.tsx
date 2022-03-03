import { createContext, ReactNode, useContext, useMemo } from 'react'
import { ApiConfig, ApiHooks, ApiProviderContext } from './types/api'

export interface ApiProviderProps {
  children: ReactNode | ReactNode[]
  apiConfig: ApiConfig
  hooks: ApiHooks
}

export const ApiContext = createContext<Partial<ApiProviderContext>>({})

export const ApiProvider = ({
  children,
  apiConfig,
  hooks,
}: ApiProviderProps) => {
  const commonApiConfig = useMemo(() => {
    return {
      fetcher: apiConfig.fetch,
      hooks,
    }
  }, [apiConfig.fetch, hooks])

  return (
    <ApiContext.Provider value={commonApiConfig}>
      {children}
    </ApiContext.Provider>
  )
}

export const useApiProvider = () => useContext(ApiContext) as ApiProviderContext
