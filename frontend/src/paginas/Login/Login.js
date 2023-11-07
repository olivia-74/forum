// import useForm from "../../hooks/useForm";
import { useData } from "../../hooks/useData";
import { useNavigate } from "react-router";
import { useTokenNotNull } from "../../hooks/useTokenNotNull";
import { Cabecalho, Card, Footer, Container } from './styledLogin';
import Logo from "../../assets/logo.png"



function Login() {

    const {form, onChangeForm, handleSubmit, message} = useData({nome:'', password:''}, '/user/login')

    useTokenNotNull()

    const navigate = useNavigate(); 
    const goToSignin = () => {
        navigate('/cadastrar')
    }
    
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
                        <label>E-mail:</label>
                        <input type="text" placeholder="Nome" name='nome' value={form.name} onChange={onChangeForm}/>
                        <label>Senha:</label>
                        <input type="password" placeholder="Senha" name='password' value={form.password} onChange={onChangeForm}/>
                        {message && <p>{message}</p>}
                        <button type="submit">Entrar</button>
                    </form>
                </Card>
            </Container>
            <Footer/>

        </>
    )
}
export default Login;


