import { Button } from '@chakra-ui/button'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import useQueryParams from '../hooks/useQueryParams'

export default function Home() {
  const { parameters, getParams, addParam, setParams } = useQueryParams()
  const history = useHistory()

  console.log('parameters', parameters)
  // useEffect(() => {
  //   console.log('parameters', parameters)
  // }, [parameters])
  // useEffect(() => {
  //   const params = getParams()
  //   console.log(params)
  // }, [])

  return (
    <div style={{ background: 'red', padding: '10px', height: '90vh' }}>
      Home 123
      <Button onClick={() => history.push('/users')}>Id 30</Button>
      <Button onClick={() => history.replace('/users?id=20&user=bad')}>
        Id 20
      </Button>
      <Button variant="solid" onClick={() => history.push('/users?id=25')}>
        Id 25
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
    </div>
  )
}
