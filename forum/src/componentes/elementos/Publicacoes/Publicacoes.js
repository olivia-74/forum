import { Container, Conteudo } from "./styledPublicacoes"
import Detalhe from "../../../assets/fala1.svg"


function Publicacoes(imagem, usuario, texto){
    return(
        <>
        <Container>
                <img src={Detalhe}/>

                <div>
                    <Conteudo>
                        <img src={imagem}/>
                        <h3>{usuario}</h3>
                        <p>{texto}</p>
                    </Conteudo>
                  
                    <hr/>
                    <div>
                        <button>⬆️ Engajar</button>
                        <button onClick={goToDiscussao}>🗣️ Discussao</button>
                        <button onClick={Notificar}>🔔 Notificar-me</button>
                    </div>
                </div>

        </Container>
        </>
    )
}

export default Publicacoes




