type FetchParams = {
  query: string
}

type FetchResult<T> = {
  data: T
}

const fetchApi = async <T>({ query }: FetchParams): Promise<FetchResult<T>> => {
  const url = 'http://localhost:4000/graphql'

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
