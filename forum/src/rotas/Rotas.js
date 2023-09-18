import {BrowserRouter, Route, Routes} from "react-router-dom";
import PaginaInicial from "../componentes/paginas/Inicial/PaginaInicial";
import Login from "../componentes/paginas/Login/Login";
import Signin from "../componentes/paginas/Signin/Signin"
import Home from "../componentes/paginas/Home/Home";
import Discussao from "../componentes/paginas/Discussao/Discussao";
import Perfil from "../componentes/paginas/Perfil/Perfil";


function Rotas (){
    return (
        <BrowserRouter>
        <Routes>
            {/* <Route path="*" element={<Erro/>}/> */}
            <Route index element={<PaginaInicial/>}/>
            <Route path="login" element={<Login/>}/> 
            <Route path="signin" element={<Signin/>}/> 
            <Route path="home" element={<Home/>}/>
            <Route path="discussao" element={<Discussao/>}/>
            <Route path="perfil" element={<Perfil/>}/>

        </Routes>
        </BrowserRouter>
    )
}
export default Rotas;