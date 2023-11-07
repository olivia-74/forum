import Logo from "../../assets/logo.png"
import { ContainerFooter } from "./styledFooter";

function Footer(){
    return(
        <>
        <ContainerFooter>
            <img src={Logo} alt="logo"/>
        </ContainerFooter>

        </>
    )
}
export default Footer;