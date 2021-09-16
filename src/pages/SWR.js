import { Button } from '@chakra-ui/button'
import { Flex, Heading } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import useStaleWhileRevalidate from '../hooks/useStaleWhileRevalidate'

export default function SWR() {
  //   const [users, setUser] = useState([])
  const [page, setPage] = useState(1)

  const { data: users, loading } = useStaleWhileRevalidate(
    `https://reqres.in/api/users?page=${page}`
  )

  //   useEffect(() => {
  //     if(CACHE[page] !== undefined) {
  //         console.log('cache', CACHE[page])
  //         setUser(CACHE[page])
  //         // take this CACHE out to refetch and get newer responses
  //         // return
  //     }
  //     const fetchData = () => {
  //       apiFetch(`https://reqres.in/api/users?page=${page}`)
  //         .then((json) => {
  //           CACHE[page] = json.data
  //           setUser(json.data)
  //           console.log('API CALL')
  //         })
  //     }

  //     fetchData()
  //   }, [page])

  return (
    <div>
      <Button
        onClick={() => {
          setPage((page) => page - 1)
        }}
      >
        Last Page
      </Button>
      <Button
        onClick={() => {
          setPage((page) => page + 1)
        }}
      >
        Next Page
      </Button>
      {loading ? (
        <Flex>
          <Heading as="h1" size="xl">Loading...</Heading>
        </Flex>
      ) : (
        users.map((user) => (
          <p key={user.id}>
            <img
              src={user.avatar}
              alt={user.first_name}
              style={{ height: 24, width: 24 }}
            />
            {user.first_name} {user.last_name}
          </p>
        ))
      )}
    </div>
  )
}
