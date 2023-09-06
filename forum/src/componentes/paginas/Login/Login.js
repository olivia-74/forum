import Logo from "../../../assets/logo.png"
import { Cabecalho, LogoHeader } from './styledLogin';

function Login(){
    return(
        <>
            <Cabecalho>
                <LogoHeader href={Logo} alt='logo'/>
            </Cabecalho>
        </>
    )
}
export default Login;