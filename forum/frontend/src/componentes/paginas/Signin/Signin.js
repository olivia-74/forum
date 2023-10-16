import Logo from "../../../assets/logo.png"
import { Cabecalho, Card, Footer, Container } from './styledSignin';
import { useNavigate } from "react-router";


function Login() {

    const {form, onChangeForm, handleSubmit} = useUserOperations({nome:'', email:'', password:''}, 'user/signup')
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
                <form onSubmit={handleSubmit}>
                    <h1> Criar nova conta </h1>

                    <label>Nome completo</label>
                    <input placeholder="Insira seu nome e sobrenome"  type="text" required />

                    <label>Usuario</label>
                    <input placeholder="Defina um nome de usuário" name="username" type="text" value={form.username} onChange={onChangeForm}/>

                    <label>E-mail</label>
                    <input placeholder="Insira seu e-mail" name="email" type="email" value={form.email} onChange={onChangeForm}/>
                    
                    <label>Senha</label>
                    <input placeholder="Defina uma senha" name="password" type="password" value={form.password} onChange={onChangeForm}/>
                    
                    <button onClick={goToHome}>Entrar</button>
                </form>
            </Card>
        </Container>
            <Footer/>
        </>
    )
}
export default Login;
