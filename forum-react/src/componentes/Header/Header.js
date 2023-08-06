import { ContainerHeader, LogoHeader } from "./styledHeader";
import logo from "../../assets/logo.png"


function Header (){

    return(
        <>
            <ContainerHeader> 
                <LogoHeader src={logo} alt="Logo EmpreGO"/>
            </ContainerHeader>

        </>
    )
}

export default Header