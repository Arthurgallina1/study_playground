import React, { useContext, useEffect, useState } from 'react'
import reactDom from 'react-dom'
import { Button } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'
import { ModalContext } from '../../context/ModalContext'

export const Modal = () => {
  const { modalContent, closeModal, modal, options } =
    useContext(ModalContext)

  if (!modal) return null

  if(options?.shouldCloseAfter) {
      setTimeout(() => {
        closeModal()
      }, options.shouldCloseAfter)
  }

  return reactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <Flex direction='column' backgroundColor='blue.500' style={modalSyles}>
        {modalContent}
        {options.closeButton && <Button onClick={closeModal}>Close</Button>}
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
