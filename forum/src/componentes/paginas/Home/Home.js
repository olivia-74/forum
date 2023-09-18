import Header from "../../elementos/Header/Header"
import Footer from "../../elementos/Footer/Footer"
import Feed from "../../elementos/Feed/Feed"
import { ContainerHome, Linha, NovaPublicacao} from "./styledHome"
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

                <Feed/>
                <Feed/>
                <Feed/>

            </ContainerHome>

            <Footer/>


        </>
    )
}

export default Home