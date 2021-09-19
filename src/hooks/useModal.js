import React from 'react'

export default function useModal() {
  let [modal, setModal] = React.useState(false)
  let [modalContent, setModalContent] = React.useState("I'm the Modal Content")

  let handleModal = (content = false) => {
      console.log('modal', modal)
    setModal(!modal)
    if (content) {
      setModalContent(content)
    }
  }

  return { modal, handleModal, modalContent }
}
