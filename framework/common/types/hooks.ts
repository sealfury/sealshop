import { ApiFetcherType } from "./api"

export type MutationContext = {
  fetch: (input: any) => any
}

export type FetcherContext = {
  input: any
  fetch: ApiFetcherType
}

export type MutationHook = {
  fetcher: (context: FetcherContext) => any
  useHook(context: MutationContext): (input: any) => any
}
