import Logo from '../../../assets/logo.png'
import { Cabecalho, Img, Rodape, StyledPaginaInicial, Entrar, Texto} from './styledPaginaInicial.jsx'
import { useNavigate } from 'react-router'
import { useEffect } from "react"

function PaginaInicial() {

    const navigate = useNavigate()
    const goToLogIn = () => {
        navigate('login')
    }

    useEffect(() => {
        const token =localStorage.getItem('token')
        if(!token){
            navigate('/')
        }
    }, [navigate])


    return (
        <>

        
            <Cabecalho>

                <Img src={Logo} alt="Logo" />
                <Entrar onClick={goToLogIn}>Junte-se a nós!</Entrar>

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

export default PaginaInicial