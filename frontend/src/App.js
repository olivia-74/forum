import Rotas from './rotas/rotas';
import { GlobalState } from './GlobalState/GlobalState';
import GlobalStyle from "./styledGlobal";
import { ChakraProvider } from '@chakra-ui/react'



function App() {

  return (
      <>
      <GlobalStyle/>
      <ChakraProvider>
      <GlobalState>
        <Rotas/>
      </GlobalState>
      </ChakraProvider>
      </>
  );
}

export default App;
