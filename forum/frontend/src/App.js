
// import Home from "./componentes/paginas/Home/Home";
import Login from "./componentes/paginas/Login/Login"
import Discussao from "./componentes/paginas/Discussao/Discussao";
import GlobalStyle from "./styledGlobal";
import { ChakraProvider } from '@chakra-ui/react'
import Rotas from "./rotas/Rotas";


function App() {
  return (
    <>
      <GlobalStyle />
      <ChakraProvider>
        {/* <Home/> */}
        {/* <Login/> */}
        {/* <Discussao/> */}
        <Rotas/>
      </ChakraProvider>
      
    </>
  );
}

export default App;
