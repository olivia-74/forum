import Logo from "../../../assets/logo.png"
import { BotaoEntrar, BotaoHeader, Cabecalho, CardGrande, Footer, InputNome, InputSenha, LogoHeader, PosBotao, Texto1, Texto2, UsuarioStyle } from './styledLogin';

function Login() {
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
                <UsuarioStyle>E-mail ou Usuário:</UsuarioStyle>
                <InputNome placeholder="Ex: DanielGameplays321"></InputNome>

                <Texto2>
                    Senha:
                </Texto2>
                <InputSenha placeholder="********"></InputSenha>
                <PosBotao>
                    <BotaoEntrar>Entrar</BotaoEntrar>
                </PosBotao>
            </CardGrande>

            <Footer>
            </Footer>
        </>
    )
}
export default Login;

//href={Logo} alt='logo'