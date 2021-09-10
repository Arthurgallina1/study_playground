import React, { useEffect, useState } from 'react'

export default function useQueryParams() {
  const [parameters, setParameters] = useState(
    Object.fromEntries(new URLSearchParams(window.location.search).entries())
  )

  const getParams = () => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())
    setParameters(params)
    return params
  }

  const addParam = (key, value) => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    urlSearchParams.append(key, value)
    setParameters(Object.fromEntries(urlSearchParams.entries()))
    window.history.replaceState(null, null, '?' + urlSearchParams.toString())
  }

  // paramsType = { key: string, value: string } []
  const setParams = (params) => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    for (let i = 0; i < params.length; i++) {
      const { key, value } = params[i]
      urlSearchParams.append(key, value)
    }
    setParameters(Object.fromEntries(urlSearchParams.entries()))
    window.history.replaceState(null, null, '?' + urlSearchParams.toString())
  }

  return { parameters, getParams, addParam, setParams }
}
