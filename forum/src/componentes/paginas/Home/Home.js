import Header from "../../elementos/Header/Header"
import Footer from "../../elementos/Footer/Footer"
import Publicacoes from "../../elementos/Publicacoes/Publicacoes"
import { BalaoInput, ContainerHome, Foto, DetalheDireita, Input, BotaoPublicar, Linha, NovaPublicacao } from "./styledHome"
import Detalhe from "../../../assets/fala.svg"

function Home(){
    return(
        <>
            <Header/>
            <ContainerHome>
                <NovaPublicacao>
                    <div>
                        <textarea type="text" placeholder="Comece uma discussao..."/>
                        <img src={Detalhe}/>
                    </div>
                    <img/>
                    <button>Publicar</button> 
                </NovaPublicacao>
                
                <Linha/>
               
               
               

            </ContainerHome>


        </>
    )
}

export default Home