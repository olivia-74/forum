import {BrowserRouter, Route, Routes} from "react-router-dom";
import PaginaInicial from "../paginas/Inicial/PaginaInicial";
import SignIn from "../paginas/SignIn/Signin";
import LogIn from "../paginas/Login/Login";
import Home from "../paginas/Home/Home";
import Discussao from "../paginas/Discussao/Discussao";


function Rotas (){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="*" element={<Erro/>}/>
            <Route index element={<PaginaInicial/>}/>
            <Route path="Login" element={<LogIn/>}/> 
            <Route path="Signin" element={<SignIn/>}/>
            <Route path="Home" element={<Home/>}/>
            <Route path="Discussao" element={<Discussao/>}/>



        </Routes>
        </BrowserRouter>
    )
}
export default Rotas;