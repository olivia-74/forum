import Header1 from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Circles from "./components/circles/Circles";
import StyledGlobal, { CorFundo } from './styled.global';

function App() {
  return (
    <div className="App">
      {/* oie! descomentem a página que vocês quiserem ver no navegador */}
      
      <Header1 /> 
      <CorFundo>
      {/* <Cadastro/> */}
      {/* <PaginaInicial/> */}
      <Circles />
      <StyledGlobal />
      {/* <PerfilUsuario/> */}
      {/* <Home/> */}
      {/* <MinhaConta/> */}
      </CorFundo>
      <Footer />

    </div>
  );
}

export default App;
