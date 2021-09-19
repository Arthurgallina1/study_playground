import React, { createContext } from 'react'
import { Modal } from '../components/Modal'
import useModal from '../hooks/useModal'

const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const {
    modal,
    handleModal,
    modalContent,
    closeModal,
    changeModalContent,
    options,
    setOptions,
  } = useModal()

  return (
    <ModalContext.Provider
      value={{
        modal,
        handleModal,
        modalContent,
        closeModal,
        changeModalContent,
        options,
        setOptions,
      }}
    >
      <Modal />
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }
