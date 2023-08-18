import { ContainerFooter, Logo } from "./styledFooter";
import logo from "../../assets/logo.png";

function Footer(){
    return(
        <ContainerFooter>
            <Logo src={logo}/>
        </ContainerFooter>
    )
}

export default Footer