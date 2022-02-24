export type ApiFetchOptions = {
  url: string
  query: string
}

export type ApiFetchResult<T> = {
  data: T
}

export interface ApiConfig {
  apiUrl: string
  fetch<T>(options: ApiFetchOptions): Promise<ApiFetchResult<T>>
}
