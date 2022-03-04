import { createContext, ReactNode, useContext, useMemo } from 'react'
import { ApiConfig, ApiProviderContext } from './types/api'
import { ApiHooks } from './types/hooks'

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
