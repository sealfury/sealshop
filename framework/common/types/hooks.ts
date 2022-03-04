import { ApiFetcherType, ApiFetchOptions } from './api'

export interface ApiHooks {
  cart: {
    useAddItem: any
    useCart: any
  }
}

export type MutationContext = {
  fetch: (input: any) => any
}

export type FetcherContext = {
  input?: any
  options: ApiFetchOptions
  fetch: ApiFetcherType
}

export type MutationHook = {
  fetcher: (context: FetcherContext) => any
  fetcherOptions: ApiFetchOptions
  useHook(context: MutationContext): (input: any) => any
}
