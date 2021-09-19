import React, { useEffect, useState } from 'react'

const INITIAL_OPTIONS = {
  closeButton: true,
}

export default function useModal() {
  const [options, setOptions] = useState()
  const [modal, setModal] = useState(false)
  const [modalContent, setModalContent] = useState("I'm the Modal Content")

//   useEffect(() => {
//       if (!options) {
//         setOptions(INITIAL_OPTIONS)
//           console.log('oiiii')
//     }
//   }, [modal, setModalContent])

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
