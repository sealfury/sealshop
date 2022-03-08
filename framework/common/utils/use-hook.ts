import useSWR from 'swr'
import { useApiProvider } from '@common'
import { ApiHooks } from '@common/types/hooks'
import { MutationHook } from '@common/types/hooks'
import { ApiFetcherType } from '@common/types/api'

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

export const useData = (hook: any, fetcher: ApiFetcherType, context: any) => {
  const hookFetcher = async (query: string) => {
    try {
      return await hook.fetcher({
        fetch: fetcher,
        options: { query },
        input: {},
      })
    } catch (err) {
      throw err
    }
  }

  const res = useSWR(hook.fetcherOptions.query, hookFetcher, context.swrOptions)

  return res
}

// stale while revalidate - see nexjs docs
// attempt to preserve and retrieve data from cache
export const useSWRHook = (hook: any) => {
  const { fetcher } = useApiProvider()

  return hook.useHook({
    useData(context: any) {
      const data = useData(hook, fetcher, context)
      return data
    },
  })
}
