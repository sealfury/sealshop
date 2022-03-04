import { ApiFetchOptions, ApiFetchResult } from '@common/types/api'
import { API_URL } from '@framework/url'

const fetchApi = async <T>({
  query,
  variables,
}: ApiFetchOptions): Promise<ApiFetchResult<T>> => {
  const response = await fetch(API_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const { data, errors } = await response.json()

  if (errors) {
    // return errors.message if errors array == null || undefined
    throw new Error(errors[0].message ?? errors.message)
  }

  return { data }
}

export default fetchApi
