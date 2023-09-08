import Logo from "../../../assets/logo.png"
import { BotaoEntrar, BotaoHeader, Cabecalho, CardGrande, Footer, InputNome, InputSenha, LogoHeader, PosBotao, Texto1, Texto2, UsuarioStyle, Label } from './styledLogin';
import axios from "axios"
import { useState } from "react"

function Login() {

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
                <Texto1>
                    Entrar
                </Texto1>
                
                <Label>E-mail</Label>
                <InputNome placeholder="Ex: DanielGameplays321"  type="email" value={email} onChange={(event) => setEmail(event.target.value)}></InputNome>

                <Label>
                    Senha:
                </Label>
                <InputSenha placeholder="********" input type="password" value={password} onChange={(event) => setPassword(event.target.value)}></InputSenha>
                <PosBotao>
                    <BotaoEntrar type="submit">Entrar</BotaoEntrar>
                </PosBotao>
            </CardGrande>

            <Footer>
            </Footer>
        </>
    )
}
export default Login;

//href={Logo} alt='logo'