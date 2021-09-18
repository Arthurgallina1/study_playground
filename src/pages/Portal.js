import React, { useState } from 'react'
import { Button } from '@chakra-ui/button'
import { Box, Flex, Heading } from '@chakra-ui/layout'
import reactDom from 'react-dom'

export default function Portal() {
  const [isOpen, setIsOpen] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }
  return (
    <Box maxH={360} backgroundColor="black">
        <Box h={200}></Box>
        <Box h={200}></Box>
      <Box
      
        width={720}
        h={200}
        overflow="hidden"
        backgroundColor="tomato"
        position="relative"
      >
        <Tooltip isOpen={tooltipOpen} />
        <Button onClick={() => setTooltipOpen(!tooltipOpen)}>
          Click tooltio
        </Button>
      </Box>

      <Button onClick={() => setIsOpen(!isOpen)}>Open Modal</Button>
      <Modal open={isOpen} onClose={onClose}>
        <Heading as="h1" size="3xl">
          Heading
        </Heading>
      </Modal>
    </Box>
  )
}

const Tooltip = ({ isOpen }) => {
  if (!isOpen) return null

//   return 
//   reactDom.createPortal(
    return <Box
      maxW={240}
      maxH={240}
      backgroundColor="white"
      borderRadius="md"
      shadow="dark-lg"
      position="absolute"
      top="50"
      left="0"
      padding="2"
    >
      <Heading as="h1" size="xl">
        Title
      </Heading>
      <Box>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquid
          quam eius cum et id fugit recusandae maxime, maiores ipsa, voluptas
          deserunt incidunt.
        </span>
      </Box>
    </Box>
    // document.getElementById('portal')
//   )
}

const Modal = ({ open, children, onClose }) => {
  if (!open) return null
  return reactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <Flex direction="column" backgroundColor="blue.500" style={modalSyles}>
        {children}
        <Button onClick={onClose}>Close</Button>
      </Flex>
    </>,
    document.getElementById('portal')
  )
}

const modalSyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#CCC',
  padding: '50px',
  zIndex: 10
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 10
}
