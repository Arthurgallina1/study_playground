import Router from './routes/index'
import SpringAnimation from './components/SpringAnimation'
import {
  BrowserRouter,
} from "react-router-dom";
import NavBar from './components/Navbar';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      {/* <h3>oi</h3> */}
      {/* <SpringAnimation />  */}
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
