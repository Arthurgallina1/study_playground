import React from 'react'
import useModal, { Modal } from '../hooks/useModal'

export default function UseModal() {
  const [modalOpen, setModalOpen, toggleModal] = useModal()

  //   console.log(Modal, onClose, oi)
  return (
    <div>
      <button onClick={toggleModal}>Show</button>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <h3>this is a test item bla bla</h3>
      </Modal>
    </div>
  )
}
