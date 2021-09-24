import { act, renderHook } from '@testing-library/react-hooks'
import useCounter from '../hooks/useCounter'

describe('useCounter', () => {
  it('should init counter with 0 and have a function', () => {
    //passing props
    const { result } = renderHook(() => useCounter(9000))

    expect(result.current.count).toBe(9000)

    // if its gonna cause updates wrap around act
    act(() => {
      result.current.increment()
    })
    //renderHook mutates the value of current when updates happen.
    expect(result.current.count).toBe(9001)
  })

  it('should reset counter to initial value', () => {
    let initialValue = 0
    const { result, rerender } = renderHook(() => useCounter(initialValue))
    expect(result.current.count).toBe(0)

    // to handle change in the input props 
    // -> update value in a variable and render the hook // recreates the hook but not update imediatily
    initialValue = 10
    rerender()

    // expect(result.current.count).toBe(10)

    act(() => {
      result.current.reset()
    })

    expect(result.current.count).toBe(10)
  })
})
