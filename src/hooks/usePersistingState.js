import React, { useState, useEffect } from 'react'

export default function usePersistingState(defaultValue, key) {
  const [state, setState] = useState(() => {
    const persistedValue = window.localStorage.getItem(key)
    return persistedValue !== null ? JSON.parse(persistedValue) : defaultValue
  })

  //   const setPersistedState = (value) => {
  //     window.localStorage.setItem(key, value)
  //     setState(value)
  //   }

  // way more reactive than this ^
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}


// Usage

// const SomeComponent() {
//     const [color, setColor] = useStickyState('blue', 'persisted-color');
//   }
