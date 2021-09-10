import { Button } from '@chakra-ui/button'
import { Box, Grid } from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import { useLocation } from '../hooks/useLocation'
import useQueryParams from '../hooks/useQueryParams'

export default function Home() {
  const { parameters, getParams, addParam, setParams } = useQueryParams()
  const { push, replace } = useLocation()

  return (
    <div style={{ background: 'red', padding: '10px', height: '90vh' }}>
      Home 123
      <Button onClick={() => push('/users')}>Id 30</Button>
      <Button onClick={() => replace('/users?id=20&user=bad')}>Id 20</Button>
      <Button variant="solid" onClick={() => push('/users/pop?id=30')}>
        /pop
      </Button>
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
        <Box color="blue.900">{Object.entries(parameters).map(i => {
          return <div>
            <span>{i[0]} </span>
            <span>{i[1]} </span>
          </div>
        })}</Box>
      </Grid>
    </div>
  )
}
