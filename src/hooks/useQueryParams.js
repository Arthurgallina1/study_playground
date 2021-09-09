import React, { useEffect, useState } from 'react'

export default function useQueryParams() {
//   const [params, setParams] = useState([])


//   useEffect(() => {
//     getParams()
//   }, [])

  const getParams = () => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())
    // setParams(params)
    return params
  }

  const setParams = (key, value) => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    urlSearchParams.append(key, value)
    // const entries = urlSearchParams.entries()
    // for(let key of entries) {
    //     console.log('key', key[0])
    //     console.log('value', key[1])
    // }
    window.location.search = urlSearchParams
    // return urlSearchParams
  }

  return { getParams, setParams }
}
