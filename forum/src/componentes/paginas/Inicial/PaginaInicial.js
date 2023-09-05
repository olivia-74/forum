import Logo from '../../../assets/logo.png'
import { Cabecalho, Img, Rodape, StyledPaginaInicial, Entrar, Texto} from './styledPaginaInicial.jsx'

function PaginaInicial() {
    return (
        <>
            <Cabecalho>

                <Img src={Logo} alt="Logo" />
                <Entrar>Junte-se a nós!</Entrar>

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