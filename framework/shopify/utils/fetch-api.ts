import { ApiFetchOptions, ApiFetchResult } from '@common/types/api'

const fetchApi = async <T>({
  url,
  query,
}: ApiFetchOptions): Promise<ApiFetchResult<T>> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
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
