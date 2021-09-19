import React, { useState } from 'react'
import { Button } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'
import reactDom from 'react-dom'

export const Modal = ({ open, children, onClose }) => {
  const [isOpen, setIsOpen] = useState(false)
  if (!open) return null
  return reactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <Button onClick={() => setIsOpen(!isOpen)}>Open Modal</Button>
      <Flex direction='column' backgroundColor='blue.500' style={modalSyles}>
        {children}
        <Button onClick={onClose}>Close</Button>
      </Flex>
    </>,
    document.getElementById('portal'),
  )
}

const modalSyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#CCC',
  padding: '50px',
  zIndex: 10,
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 10,
}

const useModal = (initialMode = false) => {
  const [modalOpen, setModalOpen] = useState(initialMode)
  const toggle = () => setModalOpen(!modalOpen)
  return [modalOpen, setModalOpen, toggle]
}

export default useModal
