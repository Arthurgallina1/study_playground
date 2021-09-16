import React from 'react'
import { screen, cleanup, fireEvent, render } from '@testing-library/react'
import useStaleWhileRevalidate from '../hooks/useStaleWhileRevalidate'
import { renderHook } from '@testing-library/react-hooks'

function fetchMock(url, suffix = '') {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        json: () =>
          Promise.resolve({
            data: url + suffix
          })
      })
    }, 200 + Math.random() * 300)
  )
}

function TestComponent({ url }) {
  const [data, isLoading] = useStaleWhileRevalidate(url, { data: '' })
  if (isLoading) {
    return <div>loading</div>
  }
  return <div>{data.data}</div>
}

describe('useStaleWhileRevalidate', () => {
  beforeAll(() => {
    jest.spyOn(global, 'fetch').mockImplementation(fetchMock)
  })
  afterAll(() => {
    global.fetch.mockClear()
  })

  it('should', () => {
    const defaultValue = { data: '' }
    const { result } = renderHook(
      ({ url }) => useStaleWhileRevalidate(url, defaultValue),
      { initialProps: { url: 'url1 ' } }
    )
    console.log(result.current)
  })
})
