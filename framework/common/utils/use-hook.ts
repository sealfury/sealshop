import { useApiProvider } from '@common'
import { ApiHooks } from '@common/types/api'

export const useHook = (cb: (apiHooks: ApiHooks) => any) => {
  const { hooks } = useApiProvider()

  return cb(hooks)
}
