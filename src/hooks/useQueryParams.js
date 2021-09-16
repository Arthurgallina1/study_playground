import React, { useCallback, useEffect, useState } from 'react'
// import { useLocation } from './useLocation'
import { useLocation } from 'react-recipes'

export default function useQueryParams() {
  const { push, replace, pathname, search } = useLocation()
  // console.log('search', search)
  const [parameters, setParameters] = useState(
    Object.fromEntries(new URLSearchParams(search).entries())
  )

  const getParams = () => {
    const urlSearchParams = new URLSearchParams(search)
    const params = Object.fromEntries(urlSearchParams.entries())
    setParameters(params)
    return params
  }

  useEffect(() => {
    getParams()
  }, [search])

  const addParam = (key, value) => {
    const urlSearchParams = new URLSearchParams(search)
    urlSearchParams.append(key, value)
    setParameters(Object.fromEntries(urlSearchParams.entries()))
    // window.history.replaceState(null, null, '?' + urlSearchParams.toString())
    push(`?${urlSearchParams.toString()}`)
  }

  // paramsType = { key: string, value: string } []
  const setParams = (params) => {
    const urlSearchParams = new URLSearchParams(search);
    params.forEach(({ key, value }) => {
      urlSearchParams.append(key, value);
    });
    replace(`?${urlSearchParams.toString()}`);
  };


  return { parameters, getParams, addParam, setParams }
}



// export default function useQueryParams() {
//   const {
//     replace, search,
//   } = useLocation();

//   const getParams = () => {
//     const urlSearchParams = new URLSearchParams(search);
//     const params = Object.fromEntries(urlSearchParams.entries());
//     return params;
//   };

//   const setParams = (params) => {
//     console.log(params);
//     const urlSearchParams = new URLSearchParams(params);
//     replace(`?${urlSearchParams.toString()}`);

//     console.log(urlSearchParams.toString());
//     // urlSearchParams.forEach((item) => console.log(item));
//     // const urlSearchParams = new URLSearchParams();
//     // Object.entries(params).forEach(([key, value]) => {
//     //   console.log(key, value);
//     //   urlSearchParams.append(key, value);
//     // });
//     // replace(`?${urlSearchParams.toString()}`);
//   };

//   useEffect(() => {
//     getParams();
//   }, [search]);

//   return {
//     getParams, setParams,
//   };
// }

