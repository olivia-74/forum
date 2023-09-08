import Publicacoes from "../../elementos/Publicacoes/Publicacoes";
import Header from "../../elementos/Header/Header"
import Comentarios from "../../elementos/Comentarios/Comentarios";
import Footer from "../../elementos/Footer/Footer"
import { ContainerDiscussao, NovoComentario } from "./styledDiscussao";

function Discussao(){
    return(
        <>
        <Header/>
        <Publicacoes/> {/* publicacao tem q estar em "hover" */}
        <ContainerDiscussao>

            <Comentarios/>
            <Comentarios/>
            <Comentarios/>


            <NovoComentario>
                <img src=""/>
                <input placeholder="Contribuir para a discussao"/>
                <button>Publicar</button>
            </NovoComentario>
        </ContainerDiscussao>
        <Footer/>
        </>
    )
}
export default Discussao;