import Logo from '../../assets/logo.png'
import { Cabecalho, Img, Rodape, StyledPaginaInicial, Entrar, Texto} from './styledInicial.jsx'
import { useNavigate } from 'react-router'


function Inicial() {

    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/entrar')
    }


    return (
        <>

        
            <Cabecalho>

                <Img src={Logo} alt="Logo" />
                <Entrar onClick={goToLogin}>Junte-se a nós!</Entrar>

            </Cabecalho>


            <StyledPaginaInicial/>



            <Rodape>
                <Texto>
                    “Transforme seus sonhos em realidade. Construa sua carreira. Seja a inspiração que o mundo precisa.”
                </Texto>
            </Rodape>



        </>
    )
}

export default Inicial