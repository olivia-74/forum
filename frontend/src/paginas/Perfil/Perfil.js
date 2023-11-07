import Footer from "../../componentes/Footer/Footer"
import Header from "../../componentes/Header/Header"
import { Card, Container, TextoDefault } from "./styledPerfil"
import { useNavigate } from "react-router"
import perfilArara from "../../assets/perfilArara.png"


function Perfil(){

    const navigate = useNavigate()
    const goToConta = () => {
        navigate('/conta')
    }

    return( 
        <>
        <Header/>
            <Container>
               <Card>
                    <header>
                        <div>
                            <img src={perfilArara} alt=""/>
                            <h2> 3a (Você)</h2>
                        </div>
                        <button onClick={goToConta}>Acessar conta</button>
                    </header>
                    <p>Últimas publicações<hr/></p>
                    <div>
                        <TextoDefault>Você ainda não realizou nenhuma publicação</TextoDefault>
                    </div>
                    

            </Card>  
            </Container>
           
    
            
        <Footer/>
        </>
    )
}

export default Perfil