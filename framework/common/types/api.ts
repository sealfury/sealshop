export type QueryVariables = { [key: string]: string }

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
  fetch<T>(options: ApiFetchOptions): Promise<ApiFetchResult<T>>
}
