import {Menu, MenuButton, MenuList, MenuItem, MenuDivider} from '@chakra-ui/react'
import LogoHeader from '../../../assets/logoMini.png'
import { ContainerHeader, IconeInput, Input, Logo, ContainerBotoes, Botoes, Icone } from "./styledHeader"




function Header(){
    return(
        <>
        <ContainerHeader>
            <Logo src={LogoHeader}/>

            <Input placeholder="Buscar"/>
            <IconeInput> 🔍︎ </IconeInput>

            <ContainerBotoes> 
                <Botoes><Menu> 
                    <MenuButton  aria-label='Options'> <Icone> 🔽 </Icone> <Icone className="Texto">Acoes</Icone></MenuButton>
                            <MenuList>
                                <MenuItem> Acessar forum </MenuItem>
                                <MenuItem> Ver notificacoes </MenuItem>
                                <MenuItem> Ver perfil </MenuItem> <MenuDivider/>

                                <MenuItem> Minha conta </MenuItem>
                                <MenuItem> Sair  </MenuItem>
                            </MenuList>
                 </Menu> </Botoes>  
                <Botoes> <Icone>👤</Icone><Icone className="Texto">Perfil</Icone> </Botoes>                
                <Botoes> <Icone>🔔</Icone><Icone className="Texto">Notificacoes</Icone> </Botoes>
                <Botoes> <Icone>💬</Icone><Icone className="Texto">Forum</Icone> </Botoes>
                
            </ContainerBotoes>
        </ContainerHeader>
        </>
    )
}
export default Header;