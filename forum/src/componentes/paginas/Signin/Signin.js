import Logo from "../../../assets/logo.png"
import { Cabecalho, Card, Footer, Container } from './styledSignin';
import { useNavigate } from "react-router";


function Login() {


    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/home')
    }
    
    return (
        <>
            <Cabecalho>
                <img src={Logo} />
            </Cabecalho>

        <Container>
            <Card>
                <form>
                    <h1> Criar nova conta </h1>
                    <label>Nome completo</label>
                    <input placeholder="Insira seu nome e sobrenome"  type="text" required />
                    <label>Usuario</label>
                    <input placeholder="Defina um nome de usuario"  type="text" required />
                    <label>E-mail</label>
                    <input placeholder="Insira seu e-mail"  type="email" required />
                    <label>Senha</label>
                    <input placeholder="Defina uma senha" type="password" />
                    <button onClick={goToHome}>Entrar</button>
                </form>
            </Card>
        </Container>
            <Footer/>
        </>
    )
}
export default Login;
