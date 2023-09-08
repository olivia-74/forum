
// import Home from "./componentes/paginas/Home/Home";
import Login from "./componentes/paginas/Login/Login"
import Discussao from "./componentes/paginas/Discussao/Discussao";
import GlobalStyle from "./styledGlobal";
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <>
      <GlobalStyle />
      <ChakraProvider>
        {/* <Home/> */}
        <Login/>
        <Discussao/>
      </ChakraProvider>
      
    </>
  );
}

export default App;
