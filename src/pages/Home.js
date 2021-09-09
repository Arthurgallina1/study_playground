import { Button } from '@chakra-ui/button'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import useQueryParams from '../hooks/useQueryParams'

export default function Home() {
  const { getParams, setParams } = useQueryParams()
  const history = useHistory()

  useEffect(() => {
    const params = getParams()
    console.log(params)
  }, [])

  return (
    <div style={{ background: 'red', padding: '10px', height: '90vh' }}>
      Home 123
      <Button onClick={() => history.push('/users?id=30&user=art')}>
        Id 30
      </Button>
      <Button onClick={() => history.replace('/users?id=20&user=bad')}>Id 20</Button>
      <Button variant="solid" onClick={() => history.push('/users?id=25')}>
        Id 25
      </Button>
      <Button variant="solid" onClick={() => {
          setParams('teste', 123)
      }}>
        setParams
      </Button>
    </div>
  )
}
