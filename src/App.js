import Router from './routes/index'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import { ModalProvider } from './context/ModalContext'

function App() {
  return (
    <ModalProvider>
      <ChakraProvider>
        <BrowserRouter>
          <NavBar />
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </ModalProvider>
  )
}

export default App
