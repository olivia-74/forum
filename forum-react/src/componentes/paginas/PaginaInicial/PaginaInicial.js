import Logo from '../../assets/logo.png'
import { Cabecalho, Img, RodapePaginaInicial, StyledPaginaInicial, TextoPagina} from './styledPaginaInicial'

function PaginaInicial() {
    return (
        <>
            <Cabecalho>

                <Img src={Logo} alt="Logo" />
                <h1>Junte-se a nós!</h1>

            </Cabecalho>


            <StyledPaginaInicial>

            </StyledPaginaInicial>

            <TextoPagina>
                “Transforme seus sonhos em realidade. Construa sua carreira. Seja a inspiração que o mundo precisa.”
            </TextoPagina>

            <RodapePaginaInicial>

            </RodapePaginaInicial>

            <footer>

            </footer>
        </>
    )
}

export default PaginaInicial