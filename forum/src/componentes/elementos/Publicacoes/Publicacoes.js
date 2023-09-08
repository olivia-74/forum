import {ContainerPublicacoes, DetalheEsquerda, ContainerInteracoes } from "./styledPublicacoes";

function Publicacoes(){
    return(
        <>
                <ContainerPublicacoes>
                    <img src="" alt=""/>
                    <a href="http"> Nome do usuario </a>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <hr/>
                    <ContainerInteracoes>
                        <button> ⬆️ <p> Engajar </p> </button>{/* fica em negrito */}
                        <button> 🗣️ <p> Discussao </p> </button>{/* entra na pagina de discussao */}
                        <button> 🔔 <p> Notificar-me </p> </button> {/* alert com mensagem: "voce sera notificado sempre que contrirem para essa discussao" */}
                    </ContainerInteracoes>
                </ContainerPublicacoes>
        </>
    )
}

export default Publicacoes;