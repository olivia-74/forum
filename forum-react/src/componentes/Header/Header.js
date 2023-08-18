import { ContainerHeader, LogoHeader } from "./styledHeader";
import logo from "../../assets/logo.png"
import Nav from "./Nav/Nav";


function Header (){

    return(
        <>
            <ContainerHeader> 
                <LogoHeader src={logo} alt="Logo EmpreGO"/>
                <Nav/>
            </ContainerHeader>

        </>
    )
}

export default Header