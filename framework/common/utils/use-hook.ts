import { useApiProvider } from '@common'
import { ApiHooks } from '@common/types/api'
import { MutationHook } from '@common/types/hooks'

export const useHook = (cb: (apiHooks: ApiHooks) => MutationHook) => {
  const { hooks } = useApiProvider()

  return cb(hooks)
}
