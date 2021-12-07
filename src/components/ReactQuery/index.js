import React from 'react'
import { useQuery } from 'react-query'

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default function ReactQuery() {
  const { isLoading, error, data } = useQuery(
    'repoData',
    () => {
      return delay(Math.ceil(400 + Math.random() * 300)).then(() => {
          console.log('debug dealy 1')
        return fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
          res.json(),
        )
      })
    },
    {
      refetchInterval: false,
    },
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      {data?.map(({ id }) => (
        <p>{id}</p>
      ))}
    </div>
  )
}
