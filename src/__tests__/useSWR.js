import React from 'react'
import { screen, cleanup, fireEvent, render } from '@testing-library/react'
import useStaleWhileRevalidate from '../hooks/useStaleWhileRevalidate'
import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'

function fetchMock(url, suffix = '') {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        json: () =>
          Promise.resolve({
            data: url + suffix,
          }),
      })
    }, 200 + Math.random() * 300),
  )
}

beforeAll(() => {
  global.fetch = jest.fn().mockImplementation((url) => fetchMock(url))
})

afterAll(() => {
  global.fetch.mockClear()
  delete global.fetch
})

describe('useStaleWhileRevalidate', () => {
  it('should s', async () => {
    // const res = await fetchMock('url1')
    // console.log('test -> ', res) // { json: [Function: json] }
    // console.log('test -> res.json() ->', await res.json())

    const defaultValue = { data: '' }
    const initialProps = { url: 'url1' }
    const { result, waitForNextUpdate, rerender } = renderHook(
      ({ url }) => useStaleWhileRevalidate(url, defaultValue),
      { initialProps: { url: 'url1' } },
    )

    expect(result.current.loading).toEqual(true)
    expect(result.current.data).toEqual(defaultValue)

    await waitForNextUpdate()
    expect(result.current.loading).toEqual(false)
    expect(result.current.data).toEqual(initialProps.url)
    
    rerender({ url: 'url2' })
    
    expect(result.current.loading).toEqual(true)
    
    
    
    
  })
})
