import Footer from "../../elementos/Footer/Footer"
import Header from "../../elementos/Header/Header"
import { Card, Container, TextoDefault } from "./styledPerfil"
import { useNavigate } from "react-router"

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
                            <img/>
                            <h2>nome real</h2>
                            <h3>@user</h3>
                        </div>
                        <button onClick={goToConta}>Acessar conta</button>
                    </header>
                    <p>Ultimas publicacoes <hr/></p>
                    <div>
                        <TextoDefault>Voce ainda nao realizou nenhuma publicacao</TextoDefault>
                    </div>
                    

            </Card>  
            </Container>
           
    
            
        <Footer/>
        </>
    )
}

export default Perfil