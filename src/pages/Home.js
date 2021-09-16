import React, { useEffect, useState } from 'react'
import { Button, Switch } from '@chakra-ui/react'
import { Box, Flex, Grid } from '@chakra-ui/layout'
import { useLocation, useQueryParams } from 'react-recipes'

const mockData = [
  {
    type: 'dog',
    name: 'Foo'
  },
  {
    type: 'dog',
    name: 'Bar'
  },
  {
    type: 'cat',
    name: 'Baz'
  }
]

export default function Home() {
  const { push, replace } = useLocation()
  const { getParams, setParams } = useQueryParams()

  const params = getParams()

  return (
    <div style={{ background: '#CCC', padding: '10px', height: '90vh' }}>
      <Flex direction="column">
        <Button onClick={() => push('/users/pop/teste')}>Push to /users</Button>
        <Button onClick={() => replace('/users?id=20&user=bad')}>
          Replace to /users?id=20\&user=bad
        </Button>
        <Button variant="solid" onClick={() => push('/users/pop?id=30')}>
          push /users/pop?id=30
        </Button>
        <Button variant="solid" onClick={() => setParams({})}>
          clear
        </Button>
        <Button
          variant="solid"
          onClick={() => {
            setParams({ key: 123 })
          }}
        >
          addParam txt=321
        </Button>
        <Button
          onClick={() => {
            const newParams = {
              param1: 'chamax neg',
              param2: 'chama papai'
            }
            setParams({ ...params, ...newParams })
          }}
        >
          setParams
        </Button>
        <Button
          onClick={() => {
            const newParams = {
              param1: 'olar Marile',
              param2: 'chama papai'
            }
            setParams({ ...newParams })
          }}
        >
          setParamsObjet erasing old
        </Button>
      </Flex>
      <Grid>
        <Box color="blue.900">
          <h1>parameters</h1>
          {Object.entries(params).map((i) => {
            return (
              <>
                <span>{i[0]}: </span>
                <span>{i[1]}</span>
                ---------
              </>
            )
          })}
        </Box>
        <Box>
          {/* <h3>Pathname: {pathname}</h3>
          <h3>Search: {search}</h3> */}
        </Box>
      </Grid>
    </div>
  )
}


  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setParams({ page: 1, order: 'ASC' })
  //       }}
  //     >
  //       Set Params
  //     </button>
  //     <button
  //       onClick={() => {
  //         setParams({})
  //       }}
  //     >
  //       Clear params
  //     </button>
  //     {Object.entries(params).map(([paramKey, paramValue]) => (
  //       <p>{paramKey}: {paramValue}</p>
  //     ))}
  //   </div>
  // )

