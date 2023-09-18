import {Menu, MenuButton, MenuList, MenuItem, MenuDivider} from '@chakra-ui/react'
import LogoHeader from '../../../assets/logoMini.png'
import { ContainerHeader, IconeInput, Input, Logo, ContainerBotoes, Botoes, Icone } from "./styledHeader"
import { useNavigate } from 'react-router'





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

    return(
        <>
        <ContainerHeader>
            <Logo src={LogoHeader}/>

            <Input placeholder="Buscar"/>
            <IconeInput> 🔍︎ </IconeInput>

            <ContainerBotoes> 
                <button onClick={handleLogout}>🚪 <p>Sair</p> </button>  
                <button onClick={goToPerfil}>👤 <p>Perfil</p> </button>  
                <button onClick={goToHome}>🔔 <p>Notificacoes</p> </button>                
                <button onClick={goToHome}>💬 <p>Forum</p> </button>                              
            </ContainerBotoes>
        </ContainerHeader>
        </>
    )
}
export default Header;