import { screen } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import usePersistingState from '../hooks/usePersistingState'

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
}

describe('usePersistingState', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock })
  })

  it('should set state with defaultValue and then with passed value', () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      usePersistingState('initialValue', 'testKey'),
    )

    expect(result.current[0]).toBe('initialValue')
    const [, setState] = result.current
    act(() => {
      setState('newInitialValue')
    })
    // await waitForNextUpdate()
    expect(result.current[0]).toBe('newInitialValue')
  })

  it('should set and get items from localStorage', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      usePersistingState('newInitialValue', 'testKey'),
    )
    
    expect(localStorage.getItem).toHaveBeenCalled()
    expect(localStorage.setItem).toHaveBeenCalled()
  })
})
