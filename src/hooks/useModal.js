import { useState } from 'react'

const INITIAL_OPTIONS = {
  closeButton: true,
}

export default function useModal() {
    // this way  setOptions has to be passed every time.
  const [options, setOptions] = useState(INITIAL_OPTIONS)
  const [modal, setModal] = useState(false)
  const [modalContent, setModalContent] = useState("I'm the Modal Content")


  const closeModal = () => {
    setModal(false)
  }

  const changeModalContent = (content) => {
    setModalContent(content)
  }

  const handleModal = (content = false) => {
    setModal(!modal)
    if (content) {
      setModalContent(content)
    }
  }

  return {
    modal,
    handleModal,
    modalContent,
    closeModal,
    changeModalContent,
    options,
    setOptions,
  }
}
