import {ContainerFeed, Publicacoes } from "./styledFeed";
import Detalhe from "../../../assets/fala1.svg"
import { useNavigate } from "react-router";


function Feed(){

    const navigate = useNavigate(); 
    const goToDiscussao = () => {
        navigate('/discussao')
    }
 
    const Notificar = () =>{
        alert("Voce sera notificado sobre as proximas mensagens dessa discussao!")
    }


    return(
        <>
        <ContainerFeed>

            <Publicacoes>
                <img src={Detalhe}/>
                <div>
                    <img/>
                    <h3>Humanas</h3>
                    <p>oieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                    <hr/>
                    <div>
                        <button>⬆️ Engajar</button>
                        <button onClick={goToDiscussao}>🗣️ Discussao</button>
                        <button onClick={Notificar}>🔔 Notificar-me</button>
                    </div>
                </div>
            </Publicacoes>

        </ContainerFeed>
        </>
    )
}

export default Feed;