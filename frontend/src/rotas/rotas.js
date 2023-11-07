import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Erro from '../paginas/Erro/Erro';
import Login from '../paginas/Login/Login'
import Home from '../paginas/Home/Home';
import SignupPage from '../paginas/SignupPage/SignupPage';
import Humanas from '../paginas/Discussoes/DiscussaoHumanas';
import Natureza from '../paginas/Discussoes/DiscussaoNatureza';
import Linguagens from '../paginas/Discussoes/DiscussaoLinguagens';
import Matematica from '../paginas/Discussoes/DiscussaoMatematica';
import Perfil from '../paginas/Perfil/Perfil';
import Conta from '../paginas/Conta/Conta';
import Inicial from '../paginas/Inicial/Inicial';



function Rotas(){
    return(
        <>

        <BrowserRouter>
            <Routes>
                <Route index element={<Inicial/>}/>
                {/* <Route path="home" element={<Home news={props.news} setNews={props.setNews}/>}/> */}
                <Route path="home" element={<Home/>}/>
                <Route path="cadastrar" element={<SignupPage/>}/>
                <Route path="entrar" element={<Login/>}/> 
                <Route path="discussaoHumanas" element={<Humanas/>}/> 
                <Route path="discussaoNatureza" element={<Natureza/>}/> 
                <Route path="discussaoLinguagens" element={<Linguagens/>}/> 
                <Route path="discussaoMatematica" element={<Matematica/>}/> 
                <Route path="perfil" element={<Perfil/>}/> 
                <Route path="conta" element={<Conta/>}/> 
                {/* <Route path="*" element={<Erro/>}/> */}
            </Routes>
       </BrowserRouter>
        </>
    )
}

export default Rotas