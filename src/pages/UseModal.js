import React from 'react'
import { ModalContext } from '../context/ModalContext'

export default function UseModalPage() {
  return (
    <div>
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
  let { handleModal } = React.useContext(ModalContext)

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quidem
        asperiores?
      </p>
      <button
        className='mt-6 rounded  bg-purple-700 text-purple-100 px-5 h-12'
        onClick={() => handleModal('I9HSAUIDJAS')}
      >
        open this modal!
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
      open this modal!
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
      open this modal!
    </button>
  )
}
