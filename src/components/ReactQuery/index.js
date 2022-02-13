import React from 'react'
import { useQuery } from 'react-query'

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getAllowedUsers(featureId) {
  if (!featureId) return {}

  //fetch endpoint
  // returns feature and allowance
  const allowedUsers = {
    FEATURE_1: [1, 2, 3],
    FEATURE_2: [1, 2],
  }
  return allowedUsers[featureId] || {}
}

function useFeature(userId, featureId) {
  const allowedUsers = getAllowedUsers(featureId)
  const hasAccess = allowedUsers.find((user) => user === userId)
  return { hasAccess }
}

export default function Container() {
  const { hasAccess } = useFeature(3, 'FEATURE_2')
  return (
    <div>
      <div>{hasAccess ? <h3>oi</h3> : <h3>tchauu</h3>}</div>
      {hasAccess && <span> flag comp </span>}
    </div>
  )
}

// export default function ReactQuery() {
//   const { isLoading, error, data } = useQuery(
//     'repoData',
//     () => {
//       return delay(Math.ceil(400 + Math.random() * 300)).then(() => {
//         console.log('debug dealy 1')
//         return fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
//           res.json(),
//         )
//       })
//     },
//     {
//       refetchInterval: false,
//     },
//   )

//   if (isLoading) return 'Loading...'

//   if (error) return 'An error has occurred: ' + error.message

//   //clamp é bom quando misturando unidades de medida, ex:
//   // font-size: clamp(1.5rem, 3vw, 2rem);
//   // nesse caso não importa tamanho da tela não será nem grande demais nem pequeno

//   //clamp(min, favorito, max)
//   // pode ser usado em qlqr lugar que seria length, frequencia, angle, time %, numero

//   return (
//     <div>

//       <div style={{ width: '100%' }}>
//         <h2 style={{ fontSize: 'clamp(1rem, 3vw, 2rem)' }}>style</h2>
//         <div
//           style={{
//             width: 'clamp(200px, 100%, 800px',
//             border: '2px solid blue',
//             display: 'flex',
//           }}
//         >
//           <div style={{ border: '1px solid black', width: 'clamp(150px, 100%, 250px)'}}>
//             <h2>h3 card</h2>
//           </div>
//           <div  style={{ border: '1px solid black', width: 'clamp(150px, 100%, 250px)'}}>
//             <h2>h3 card</h2>
//           </div>
//           <div  style={{ border: '1px solid black', width: 'clamp(150px, 100%, 250px)'}}>
//             <h2>h3 card</h2>
//           </div>
//           <div  style={{ border: '1px solid black', width: 'clamp(150px, 100%, 250px)'}}>
//             <h2>h3 card</h2>
//           </div>
//         </div>
//       </div>
//       {data?.map(({ id }) => (
//         <p>{id}</p>
//       ))}
//     </div>
//   )
// }
