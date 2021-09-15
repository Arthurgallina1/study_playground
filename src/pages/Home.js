import React, { useEffect } from 'react'
import { Button, Switch } from '@chakra-ui/react'
import { Box, Grid } from '@chakra-ui/layout'
import useQueryParams from '../hooks/useQueryParams'
import { useLocation } from 'react-recipes'

export default function Home() {
  const { parameters, getParams, addParam, setParams } = useQueryParams()
  const { push, replace, pathname, search } = useLocation()

  console.log('search!', search)
  console.log('pathname!!', pathname)

  return (
    <div style={{ background: 'red', padding: '10px', height: '90vh' }}>
      Home 123
      <Button onClick={() => push('/users')}>Id 30</Button>
      <Button onClick={() => replace('/users?id=20&user=bad')}>Id 20</Button>
      <Button variant="solid" onClick={() => push('/users/pop?id=30')}>
        /pop
      </Button>
      <h3>Pathname: {pathname}</h3>
      <h3>Search: {search}</h3>
      <Button
        variant="solid"
        onClick={() => {
          addParam('txt', 321)
        }}
      >
        addParam
      </Button>
      <Button
        variant="link"
        onClick={() => {
          const newParams = [
            { key: 'param1', value: 'v2' },
            { key: 'param2', value: 'v2' }
          ]
          setParams(newParams)
        }}
      >
        setParams
      </Button>
      <Grid>
        <Box color="blue.900">
          {Object.entries(parameters).map((i) => {
            return (
              <div>
                <span>{i[0]} </span>
                <span>{i[1]} </span>
              </div>
            )
          })}
        </Box>
      </Grid>
    </div>
  )
}
