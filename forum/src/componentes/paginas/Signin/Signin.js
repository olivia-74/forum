import Logo from "../../../assets/logo.png"
import { BotaoHeader, Cabecalho, CardGrande, Footer, LogoHeader, Label,} from './styledSignin';
import axios from "axios"
import { useState } from "react"

function Signin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) =>{
        
        const credentials = (email, password)

        axios.post("http://localhost:8000/login", credentials,{
            headers:{
                'Content-Type': 'application/json',
            },
        }).then(response =>{
            alert(response.data.message)
        })
        .catch(error => console.log(error))
    }
    
    return (
        <>
       
            <Cabecalho>
                <LogoHeader src={Logo} />
                <BotaoHeader>Criar nova conta</BotaoHeader>
            </Cabecalho>
            <CardGrande>
                <h1> Entrar </h1>
                <label>E-mail</label>
                <input placeholder="Ex: DanielGameplays321"  type="email" value={email} onChange={(event) => setEmail(event.target.value)} required></input>

                <Label>
                    Senha:
                </Label>
                <input placeholder="********" input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required></input>
                <button type="submit" onSubmit={handleSubmit}>Entrar</button>
            </CardGrande>
         
            <Footer>
            </Footer>
        </>
    )
}
export default Signin;

//href={Logo} alt='logo'