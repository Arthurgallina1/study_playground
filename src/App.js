import Router from './routes/index'
import {
  BrowserRouter,
} from "react-router-dom";
import NavBar from './components/Navbar';
import { ChakraProvider } from "@chakra-ui/react"
import './index.css'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
