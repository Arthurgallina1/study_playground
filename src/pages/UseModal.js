import React from 'react'
import { ModalContext } from '../context/ModalContext'
import usePersistingState from '../hooks/usePersistingState'

export default function UseModalPage() {
  const [tk, setTk] = usePersistingState('9000', 'tk')

  const [chess, setChess] = usePersistingState('rafael', 'chess')

  console.log('tk', tk)

  return (
    <div>
      <p>
        {tk}
        <button onClick={() => setTk(tk + 100)}>change tk</button>
      </p>
      <p>
        {chess}
        <button onClick={() => setChess('123')}>change tk</button>
      </p>
      <div style={{ marginTop: 30 }}>
        <Component />
      </div>
      <div style={{ marginTop: 30 }}>
        <Component2 />
      </div>
      <div style={{ marginTop: 30 }}>
        <Component3 />
      </div>
    </div>
  )
}

const Component = () => {
  let { handleModal, setOptions } = React.useContext(ModalContext)

  return (
    <>
      <button
        className='mt-6 rounded  bg-purple-700 text-purple-100 px-5 h-12'
        onClick={() => {
          handleModal('I9HSAUIDJAS')
          setOptions({ closeButton: true })
        }}
      >
        Open modal with close
      </button>
    </>
  )
}

const Component2 = () => {
  let { changeModalContent, handleModal, setHasClose, closeModal, setOptions } =
    React.useContext(ModalContext)

  const handleClick = () => {
    // setHasClose(false)
    setOptions({ closeButton: false })
    handleModal('loading')

    setTimeout(() => {
      changeModalContent('Downloading...')
    }, 1500)

    setTimeout(() => {
      closeModal()
    }, 4500)
  }

  return (
    <button
      className='mt-6 rounded  bg-purple-700 text-purple-100 px-5 h-12'
      onClick={handleClick}
    >
      Open modal with Manual timeout
    </button>
  )
}

const Component3 = () => {
  let { changeModalContent, handleModal, setHasClose, closeModal, setOptions } =
    React.useContext(ModalContext)

  const handleClick = () => {
    // setHasClose(false)
    setOptions({ closeButton: false, shouldCloseAfter: 2000 })
    handleModal('will close in 2000ms')
  }

  return (
    <button
      className='mt-6 rounded  bg-purple-700 text-purple-100 px-5 h-12'
      onClick={handleClick}
    >
      Open modal with auto timeout
    </button>
  )
}
