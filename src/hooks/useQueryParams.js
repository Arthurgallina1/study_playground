import React, { useEffect, useState } from 'react'
import { useLocation } from './useLocation'


export default function useQueryParams() {
  const { push, replace, pathname, search } = useLocation()
  const [parameters, setParameters] = useState(
    Object.fromEntries(new URLSearchParams(search).entries())
  )

  useEffect(() => {
    getParams()
  }, [search])

  const getParams = () => {
    const urlSearchParams = new URLSearchParams(search)
    const params = Object.fromEntries(urlSearchParams.entries())
    setParameters(params)
    return params
  }

  const addParam = (key, value) => {
    const urlSearchParams = new URLSearchParams(search)
    urlSearchParams.append(key, value)
    setParameters(Object.fromEntries(urlSearchParams.entries()))
    // window.history.replaceState(null, null, '?' + urlSearchParams.toString())
    push(`?${urlSearchParams.toString()}`)
  }

  // paramsType = { key: string, value: string } []
  const setParams = (params) => {
    const urlSearchParams = new URLSearchParams(search)
    for (let i = 0; i < params.length; i++) {
      const { key, value } = params[i]
      urlSearchParams.append(key, value)
    }
    setParameters(Object.fromEntries(urlSearchParams.entries()))
    replace(`?${urlSearchParams.toString()}`)
  }

  return { parameters, getParams, addParam, setParams }
}
