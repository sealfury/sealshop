export type QueryVariables = { [key: string]: string | any | undefined }

export type ApiFetchOptions = {
  query: string
  variables?: QueryVariables
}

export type ApiFetchResult<T> = {
  data: T
}

export interface ApiConfig {
  fetch<T>(options: ApiFetchOptions): Promise<ApiFetchResult<T>>
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
