import { useState } from 'react'
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

export const useData = (hook: any, fetcher: ApiFetcherType) => {
  const [data, setData] = useState(null)

  const hookFetcher = async () => {
    try {
      return await hook.fetcher({
        fetch: fetcher,
        options: hook.fetcherOptions,
        input: {},
      })
    } catch (err) {
      throw err
    }
  }

  if (!data) {
    hookFetcher().then(data => {
      setData(data)
    })
  }

  return data
}

// stale while revalidate - see nexjs docs
// attempt to preserve and retrieve data from cache
export const useSWRHook = (hook: any) => {
  const { fetcher } = useApiProvider()

  return hook.useHook({
    useData() {
      const data = useData(hook, fetcher)
      return data
    },
  })
}
