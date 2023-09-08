
// import Home from "./componentes/paginas/Home/Home";
import Discussao from "./componentes/paginas/Discussao/Discussao";
import GlobalStyle from "./styledGlobal";
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <>
      <GlobalStyle />
      <ChakraProvider>
        {/* <Home/> */}
        <Discussao/>
      </ChakraProvider>
      
    </>
  );
}

export default App;
