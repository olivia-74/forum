import Header from "../../componentes/Header/Header"
import Footer from "../../componentes/Footer/Footer"
import { Container, NovoComentario, Publicacoes } from "./styledDiscussoes";
import perfilGato from "../../assets/perfilGato.png"
import Detalhe from "../../assets/fala1.svg"
import perfilDragao from "../../assets/perfilDragao.png"
import perfilCoelho from "../../assets/perfilCoelho.png"
import perfilPolvo from "../../assets/perfilPolvo.png"
import perfilTigre from "../../assets/perfilTigre.png"
import perfilUrso from "../../assets/perfilUrso.png"
import perfilSapo from "../../assets/perfilSapo.png"
import perfilPinguim from "../../assets/perfilPinguim.png"
import perfilArara from "../../assets/perfilArara.png"
import perfilUnicornio from "../../assets/perfilUnicornio.png"


function Matematica(){

    return(
        <>
        <Header/>
        <Publicacoes>
            <img alt="" src={Detalhe}/>
            <div>
                <img alt="" src={perfilUnicornio}/>
                <h3>Little Zé M.</h3>
                <p>Preciso de ajuda! Após sair de uma empresa renomada e conhecida por sua cultura de inovação e criatividade, comecei a trabalhar com consultoria para outras empresas. Desejando atender clientes de diferentes regiões, decidi focar no acompanhamento remoto. Como estou no início dessa empreitada, vou iniciar meu negócio trabalhando de casa. Então, após analisar as possibilidades, escolhi uma peça para estabelecer meu escritório. No entanto, estou com dificuldade para organizar esse espaço, poderia me ajudar? Separei algumas informações que podem ser úteis para a organização do escritório: <br/>
- Preciso de um espaço para realizar tarefas no notebook, como responder e-mails, realizar chamadas com clientes, assistir a vídeos e ouvir áudios que eles mandam… <br/>
-Também preciso de espaço para gravar vídeos, pois muitas vezes envio explicações que meus clientes usam posteriormente. Esses vídeos costumo gravar mais parado, sentado ou em pé. <br/>
-Também tenho várias coisas para guardar, como jogos, livros, amostras de materiais…A maioria é coisa pequena ou média, nada que ocupe muito espaço <br/>
-Quero um lugar aconchegante, mas descontraído, com enfeites que deixem o escritório animado, pois passarei horas trabalhando nele, mas nada muito exagerado para não cansar. <br/>
Conseguem me ajudar? <br/></p>
                <hr/>
                <div>
                    <button>🫀 Curtir</button>
                    <button>🗣️ Discussão</button>
                </div>
            </div>
        </Publicacoes>
        
        <Container>
            <div>
                <img src={perfilDragao}/>
                <h2>Victoria</h2>
                <p>
                Olá, Little Zé! Pensei em algumas dicas para a organização do seu escritório: <br/>
                Espaço para a realização de tarefas no notebook: Sugiro que utilize uma mesa de 115 cm, ocupando o centro da parede de 2,3 m do escritório, o que lhe permite acrescentar outros objetos nos espaços de 57,5 cm entre a mesa e as paredes laterais. O espaço deve ocupar cerca de 1,14 m dos 4 m de profundidade dessa parte do quarto. <br/>
                Espaço para que você possa gravar seus vídeos: Esse espaço pode ser delimitado por um grande tapete que tem 1,40 de largura e 1,55 de comprimento, ficando paralelamente a cerca de 72 cm da janela, pois sabemos que a luz natural é crucial para a qualidade dos vídeos. Quanto a câmera, você pode posicioná-la dentro desse espaço de 72 cm, como está exemplificado na imagem, ou onde preferir. <br/>
                Lugar para guardar várias coisas: Na parede a esquerda da janela, coloque uma cômoda de 100 cm de altura, 70 cm de largura e 70 cm de profundidade, e uma estante de 150 cm de altura, 140 cm de largura e 70 cm de profundidade. Acredito que ambas disponham de espaço o suficiente para guardar suas coisas.
            </p>
            </div>
            <hr/>
            <div>
                <img src={perfilSapo}/>
                <h2>Olivia</h2>
                <p>
                @Victoria: Oie! Adorei suas ideias, mas acho que poderia acrescentar um espaço especial para o descanso:
                Lugar aconchegante: Little Zé especificou que queria um lugar aconchegante com enfeites que deixariam o escritório animado, por isso separei o espaço de 1,2 m de largura e 1,7 m de profundidade, onde poderia ser disposto de um sofá de 1,2 m de largura e 0,80 m de profundidade e um gaveteiro de mesma largura porém com 0,70 cm de profundidade, além de prateleiras de 60 cm de largura e 20 cm de profundidade, nas quais você pode colocar os itens e as decorações que quiser. <br/>
                Espero que tenha gostado, Little Zé!
                </p>
            </div>
            <hr/>


        <NovoComentario>
            <img src={perfilArara}/>
            <input placeholder="Contribuir para a discussao"/>
            <button>Publicar</button>         
        </NovoComentario>

        </Container>


            
       
        <Footer/>
        </>
    )
}
export default Matematica;