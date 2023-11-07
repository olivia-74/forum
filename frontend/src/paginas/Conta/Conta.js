import Footer from "../../componentes/Footer/Footer"
import Header from "../../componentes/Header/Header"
import { Card, Container,  } from "./styledConta"
import { Input } from "@chakra-ui/react"
import perfilArara from "../../assets/perfilArara.png"

function Conta () {
    return(
        <>
        <Header/>
            <Container>
               <Card>
                    <header>
                            <h2>Minha Conta</h2>
                    </header>

                    <div className="Esquerda"> 
                    <p>Foto de perfil</p>
                    <img alt="foto de perfil" src={perfilArara}/>
                    <label>Alterar foto de perfil:</label>
                    <input type="file"></input>
                    </div>

                    <div className="Direita">
                        <p>Usuario</p> <Input variant="flushed" placeholder="3a" />
                        <p>E-mail</p> <Input variant="flushed" placeholder="3a" />
                        <div>                        
                            <p>Senha</p> <input type="password" placeholder="*****"/> <button type="submit"> alterar </button>
                        </div>

                        


                    
                    </div>


                    
                    
                    

            </Card>  
            </Container>
           
    
            
        <Footer/>
        </>
    )
}

export default Conta