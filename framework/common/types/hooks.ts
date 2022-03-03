export type MutationContext = {
  fetch: (input: any) => any
}

export type MutationHook = {
  fetcher: (input: any) => any
  useHook(context: MutationContext): (input: any) => any
}
