export type QueryVariables = { [key: string]: string | undefined }

export type ApiFetchOptions = {
  url: string
  query: string
  variables?: QueryVariables
}

export type ApiFetchResult<T> = {
  data: T
}

export interface ApiConfig {
  apiUrl: string
  fetch: ApiFetcherType
}

export interface ApiHooks {
  cart: {
    useAddItem: any
  }
}

export type ApiFetcherType<T = any> = (
  options: ApiFetchOptions
) => Promise<ApiFetchResult<T>>

export interface ApiProviderContext {
  hooks: ApiHooks
  fetcher: ApiFetcherType
}
