import LogoHeader from '../../assets/logoMini.png'
import { ContainerHeader, IconeInput, Input, Logo, ContainerBotoes} from "./styledHeader"
import { useNavigate } from 'react-router'
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext"
import { useContext } from "react"



function Header(){

    const navigate = useNavigate()

    const handleLogout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/')
    }

    const goToHome = () => {
        navigate('/home')
    }
    const goToPerfil = () => {
        navigate('/perfil')
    }

    const {selectedPostId, setSelectedPostId} = useContext(GlobalStateContext)


    return(
        <>
        <ContainerHeader>
            <Logo src={LogoHeader}/>

            <Input type="text" value={selectedPostId} onChange={(e) => setSelectedPostId(e.target.value)}placeholder="Buscar"/>
            <IconeInput> 🔍︎ </IconeInput>

            <ContainerBotoes> 
                <button onClick={handleLogout}>🚪<p>Sair</p> </button>  
                <button onClick={goToPerfil}>👤<p>Perfil</p> </button>  
                <button onClick={goToHome}>💬 <p>Forum</p> </button>                              
            </ContainerBotoes>
        </ContainerHeader>
        </>
    )
}
export default Header;
