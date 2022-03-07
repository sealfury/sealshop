import { useApiProvider } from '@common'
import { ApiHooks } from '@common/types/hooks'
import { MutationHook } from '@common/types/hooks'

export const useHook = (cb: (apiHooks: ApiHooks) => MutationHook) => {
  const { hooks } = useApiProvider()

  return cb(hooks)
}

export const useMutationHook = (hook: MutationHook) => {
  const { fetcher } = useApiProvider()

  return hook.useHook({
    fetch: (input: any) => {
      return hook.fetcher({
        input,
        fetch: fetcher,
        options: hook.fetcherOptions,
      })
    },
  })
}

// stale while revalidate - see nexjs docs
export const useSWRHook = (hook: any) => {
  return hook.useHook({
    fetch: hook.fetcher,
  })
}
