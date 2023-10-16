import Logo from "../../../assets/logo.png"
import { Cabecalho, Card, Footer, Container } from './styledLogin';
import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router";


function Login() {

    const {form, onChangeForm, handleSubmit} = useUserOperations({nome:'', password:''}, 'user/login')


    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');


    // const navigate = useNavigate(); 
    // const goToSignin = () => {
    //     navigate('/signin')
    // }
    // const goToHome = () => {
    //     navigate('/home')
    // }

    // const saveUserInfoLocalStorage = (token) =>{
    //     localStorage.setItem('token', token)
    //     localStorage.setItem('email', email)
    // }

    // const handleSubmit = (event) =>{

    //     event.preventDefault()

    //     const credentials = {email, password}

    //     axios.post('http://localhost:8000/login', credentials, {
    //         headers:{
    //             'Content-Type': 'application/json',
    //         },
    //     }).then(response => {
    //         alert(response.data.message)
    //         saveUserInfoLocalStorage(response.data.token)
    //         goToHome()
    //     })
    //     .catch(error => console.log(error))
    // }

   
    
    return (
        <>
        <Cabecalho>
            <img src={Logo} alt="logo"/>
            <button onClick={goToSignin}>Criar nova conta</button>
        </Cabecalho>

        <Container>
            <Card>
                <form onSubmit={handleSubmit}>
                    <h1> Entrar </h1>
                    <label>E-mail</label>
                    <input type="text" placeholder="Nome"  name="nome" value={onChangeForm}></input>

                    <label> Senha </label>
                    <input type="password" placeholder="Senha" name='password' value={form.password} onChange={onChangeForm}></input>
                    
                    <button type="submit">Entrar</button>
                </form>
            </Card>
        </Container>
        <Footer/>
        </>
    )
}
export default Login;
