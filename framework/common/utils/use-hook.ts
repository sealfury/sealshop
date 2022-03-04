import { useApiProvider } from '@common'
import { ApiHooks } from '@common/types/api'
import { MutationHook } from '@common/types/hooks'

export const useHook = (cb: (apiHooks: ApiHooks) => MutationHook) => {
  const { hooks } = useApiProvider()

  return cb(hooks)
}

export const useMutationHook = (hook: MutationHook) => {
  return hook.useHook({
    fetch: (input: any) => {
      return hook.fetcher({
        input,
        fetch: (input: any) => {
          return JSON.stringify(input) + ' with data!'
        },
      })
    },
  })
}
