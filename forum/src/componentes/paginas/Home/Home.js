import Header from "../../elementos/Header/Header"
import Footer from "../../elementos/Footer/Footer"
import Publicacoes from "../../elementos/Publicacoes/Publicacoes"
import { BalaoInput, ContainerHome, Foto, Postar, DetalheDireita, Input, BotaoPublicar, Linha } from "./styledHome"

function Home(){
    return(
        <>
            <Header/>
            <ContainerHome>
                <Postar>
                    <BalaoInput><Input type="text" placeholder="Comece uma discussao..."></Input> </BalaoInput> <DetalheDireita/>
                    <Foto src=""/>
                </Postar>
                <BotaoPublicar>Publicar</BotaoPublicar> 
                <Linha/>
                <Publicacoes/>
                <Publicacoes/>
                <Publicacoes/>
                <Footer/>
               

            </ContainerHome>


        </>
    )
}

export default Home