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

  //clamp é bom quando misturando unidades de medida, ex:
  // font-size: clamp(1.5rem, 3vw, 2rem);
  // nesse caso não importa tamanho da tela não será nem grande demais nem pequeno

  //clamp(min, favorito, max)
  // pode ser usado em qlqr lugar que seria length, frequencia, angle, time %, numero

  return (
    <div>
  

      <div style={{ width: '100%' }}>
        <h2 style={{ fontSize: 'clamp(1rem, 3vw, 2rem)' }}>style</h2>
        <div
          style={{
            width: 'clamp(200px, 100%, 800px',
            border: '2px solid blue',
            display: 'flex',
          }}
        >
          <div style={{ border: '1px solid black', width: 'clamp(150px, 100%, 250px)'}}>
            <h2>h3 card</h2>
          </div>
          <div  style={{ border: '1px solid black', width: 'clamp(150px, 100%, 250px)'}}>
            <h2>h3 card</h2>
          </div>
          <div  style={{ border: '1px solid black', width: 'clamp(150px, 100%, 250px)'}}>
            <h2>h3 card</h2>
          </div>
          <div  style={{ border: '1px solid black', width: 'clamp(150px, 100%, 250px)'}}>
            <h2>h3 card</h2>
          </div>
        </div>
      </div>
      {data?.map(({ id }) => (
        <p>{id}</p>
      ))}
    </div>
  )
}
