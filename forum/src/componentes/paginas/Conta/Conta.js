import Footer from "../../elementos/Footer/Footer"
import Header from "../../elementos/Header/Header"
import { Card, Container,  } from "./styledConta"
import { Input } from "@chakra-ui/react"

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
                    <img href=""/>
                    <label>Alterar foto de perfil:</label>
                    <input type="file"></input>
                    </div>

                    <div className="Direita">
                        <p>Nome</p> <Input variant="flushed" placeholder="nome" />
                        <p>Usuario</p> <Input variant="flushed" placeholder="user" />
                        <p>E-mail</p> <Input variant="flushed" placeholder="email" />
                        <div>                        
                            <p>Senha</p> <input type="password" placeholder="***********"/> <button type="submit"> alterar </button>
                        </div>

                        


                    
                    </div>


                    
                    
                    

            </Card>  
            </Container>
           
    
            
        <Footer/>
        </>
    )
}

export default Conta