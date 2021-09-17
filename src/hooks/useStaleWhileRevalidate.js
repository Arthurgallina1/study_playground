import { useEffect, useState } from 'react'
import apiFetch from '../components/utils/fetch'

const CACHE = {}

export default function useStaleWhileRevalidate(url, defaultValue = []) {
  const [data, setData] = useState(defaultValue)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('got from cache')
    const cacheID = url
    setLoading(true)
    if (CACHE[cacheID] !== undefined) {
      setData(CACHE[cacheID])
      setLoading(false)
    }
    apiFetch(url).then((json) => {
      CACHE[cacheID] = json.data
      setData(json.data)
      setLoading(false)
    })
  }, [url])

  return { data, loading }
}
