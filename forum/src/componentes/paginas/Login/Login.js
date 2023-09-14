import Logo from "../../../assets/logo.png"
import { BotaoEntrar, BotaoHeader, Cabecalho, Card, Footer, InputSenha, LogoHeader, PosBotao, Texto1, Texto2, UsuarioStyle, Label, Container } from './styledLogin';
import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router";


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const credentials = {email, password};
        axios.post('http://localhost:8000/login', credentials, {
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            alert(response.data.message)
            saveUserInfoLocalStorage(response.data.token)
            goToHome()
        })
        .catch (error => console.log(error))
    }

    const saveUserInfoLocalStorage = (token) => {
        localStorage.setItem('token', token)
        localStorage.setItem('email, email')
    }


    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/home')
    }
    const goToSignin = () => {
        navigate('/signin')
    }
    
    return (
        <>
            <Cabecalho>
                <img src={Logo} />
                <button onClick={goToSignin}>Criar nova conta</button>
            </Cabecalho>

        <Container>
            <Card>
                <form onSubmit={handleSubmit}>
                    <h1> Entrar </h1>
                    <label>E-mail</label>
                    <input placeholder="Insira seu e-mail"  type="email" value={email} onChange={(event) => setEmail(event.target.value)} required></input>
                    <label> Senha </label>
                    <input placeholder="Insira sua senha" input type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                    <button type="submit" onClick={handleSubmit}>Entrar</button>
                </form>
            </Card>
        </Container>
            <Footer/>
        </>
    )
}
export default Login;
