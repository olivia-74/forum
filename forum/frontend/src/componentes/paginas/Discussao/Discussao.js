import Feed from "../../elementos/Feed/Feed";
import Header from "../../elementos/Header/Header"
import Comentarios from "../../elementos/Comentarios/Comentarios";
import Footer from "../../elementos/Footer/Footer"
import { Container, NovoComentario, Publicacoes } from "./styledDiscussao";

function Discussao(){

    return(
        <>
        <Header/>
        <Feed/> {/* publicacao tem q estar em "hover" */}
        
        <Container>
            <div>
                <img/>
                <h2>Usuario</h2>
                <p>oieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
            </div>
            <hr/>
            <div>
                <img/>
                <h2>Usuario</h2>
                <p>oieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
            </div>
            <hr/>
            <div>
                <img/>
                <h2>Usuario</h2>
                <p>oieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
            </div>
            <hr/>


        <NovoComentario>
            <img src=""/>
            <input placeholder="Contribuir para a discussao"/>
            <button>Publicar</button>         
        </NovoComentario>

        </Container>


            
       
        <Footer/>
        </>
    )
}
export default Discussao;