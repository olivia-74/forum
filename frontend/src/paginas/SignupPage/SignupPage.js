import { useData } from "../../hooks/useData";
import { useTokenNotNull } from "../../hooks/useTokenNotNull";
import Logo from "../../assets/logo.png"
import { Cabecalho, Card, Footer, Container } from './styledSignupPage';


const SignupPage = () => {
    
    const {form, onChangeForm,handleSubmit, message} = useData({username:'', password:'', email:''}, '/user/signup')

    useTokenNotNull()

    return(
        <>
         <Cabecalho>
                <img src={Logo} alt="logo"/>
        </Cabecalho>

        <Container>
            <Card>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Nome" name="username" type="text" value={form.username} onChange={onChangeForm}/>
                    <input placeholder="E-mail" name="email" type="email" value={form.email} onChange={onChangeForm}/>
                    <input placeholder="Senha" name="password" type="password" value={form.password} onChange={onChangeForm}/>
                    {message && <p>{message}</p>}
                    <button type="submit">Cadastrar</button>
                </form>
            </Card>
        </Container>
        <Footer/>
  
        </>
    )
}

export default SignupPage