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


function Humanas(){

    return(
        <>
        <Header/>
        <Publicacoes>
            <img alt="" src={Detalhe}/>
            <div>
                <img alt="" src={perfilGato}/>
                <h3>Juliana H.</h3>
                <p>Oi, pessoal! Recentemente, percebi que vários dos meus alunos, que são moradores de um grande terreno ocupado na região metropolitana, estavam faltando às aulas. O motivo: um poderoso empresário está querendo retomar o “seu” terreno e estava usando táticas intimidatórias, como ameaças de despejo e violência. Organizei uma reunião entre pais, professores, representantes do MTST e autoridades locais e propus uma ação conjunta para mobilizar a comunidade escolar em defesa dos direitos dos alunos e suas famílias. Não é apenas o direito fundamental à moradia que está em jogo, mas também o direito à educação das crianças e jovens daquela comunidade. O desafio está sendo imenso: precisamos resistir às pressões do empresário, garantir a segurança das famílias e, ao mesmo tempo, buscar uma solução legal e definitiva para a questão habitacional da nossa comunidade.
</p>
                <hr/>
                <div>
                    <button>🫀 Curtir</button>
                    <button>🗣️ Discussao</button>
                </div>
            </div>
        </Publicacoes>
        
        <Container>
            <div>
                <img src={perfilSapo}/>
                <h2>Olivia</h2>
                <p>
                Oi, Juliana! Muito impactante esse seu relato. Nessa situação, a sociedade tem um papel fundamental. Nós, como membros da comunidade, devemos nos unir e apoiar iniciativas como a da Juliana. É crucial levantar a voz contra a injustiça e pressionar as autoridades para que protejam os direitos dessas famílias. Além disso, podemos contribuir doando para organizações que lutam por habitação digna e participando de eventos de conscientização. Juntos, podemos fazer a diferença e garantir que todos tenham um lar seguro e o direito à educação seja preservado.
                </p>
            </div>
            <hr/>
            <div>
                <img src={perfilDragao}/>
                <h2>Victoria</h2>
                <p>
                Na minha opinião, a sociedade tem deveres claros nessa situação. Devemos estar informados e conscientes sobre questões como essa, pressionar nossos representantes políticos para criar políticas públicas que protejam as pessoas em situações de vulnerabilidade habitacional, e principalmente votar em candidatos que defendam os direitos dos desabrigados e a igualdade no acesso à moradia e à educação
                </p>
            </div>
            <hr/>
            <div>
                <img src={perfilTigre}/>
                <h2>Leonardo</h2>
                <p>
                @Victoria: É uma pena que muitos desses deveres não estejam sendo cumpridos como deveriam. Ainda que existam iniciativas fazendo um trabalho incrível, a falta do exercício da cidadania por parte de alguns indivíduos é preocupante. Muitos ainda permanecem passivos diante de situações como essa, o desinteresse político e em questões sociais, por exemplo, são grandes obstáculos para a mobilização efetiva da sociedade nesse contexto.
                </p>
            </div>
            <hr/>
            <div>
                <img src={perfilCoelho}/>
                <h2>Sophia</h2>
                <p>
                O governo tem a responsabilidade de investir em políticas públicas justas e eficazes para lidar com as consequências das questões habitacionais no nosso país, evitando que a rápida urbanização e a especulação imobiliária resulte no deslocamento e vulnerabilidade dessas comunidades. é papel do governo agir como mediador e garantir a segurança das famílias e os direitos básicos dos cidadãos, como o direito à condições de moradia dignas e à educação de qualidade                </p>
            </div>
            <hr/>
            <div>
                <img src={perfilUrso}/>
                <h2>Daniel</h2>
                <p>
                @Sophia: O problema é que deveres do Estado não estão sendo cumpridos da forma que deveriam, sendo evidente pelo relato da Juliana. O fato de um empresário poder usar táticas intimidadoras, ameaçando famílias vulneráveis, é um exemplo claro de como o governo não anda garantindo a segurança das comunidades de forma eficaz. A falta de regulamentação permite que empresários ajam impunemente, desconsiderando os impactos sociais de suas ações.             
                </p>
            </div>
            <hr/>
            <div>
                <img src={perfilPolvo}/>
                <h2>Tales</h2>
                <p>
                Oi! Desde 1948 o direito à moradia se tornou um direito humano universal e fundamental pela Declaração Universal dos Direitos Humanos. Como um membro da ONU, o Brasil assinou na Declaração dos Direitos Humanos a seguinte frase:  “Toda pessoa tem direito a um padrão de vida capaz de assegurar a si e a sua família saúde e bem-estar, inclusive alimentação, vestuário, habitação, cuidados médicos e os serviços sociais indispensáveis”.                
                </p>
            </div>
            <hr/>
            <div>
                <img src={perfilPinguim}/>
                <h2>Clovis</h2>
                <p>
                Existem várias regulamentações da Constituição Federal Brasileira que se relacionam às questões envolvidas no seu relato, Juliana, mas que parecem estar sendo ignoradas. Entre elas estão o direito à moradia, artigo 6 da Constituição, que garante o direito à moradia como parte dos direitos sociais. O despejo forçado é proibido, especialmente quando se trata de crianças e famílias vulneráveis. O direito à educação, artigo 205-214, em que nenhuma criança pode ser impedida de frequentar a escola devido a questões de moradia, também assegurado pela Lei nº 9.394/1996 de Diretrizes e Bases da Educação sobre o acesso e permanência dos na escola, ou mesmo pelo Estatuto da Criança e do Adolescente, protegendo os direitos das crianças e adolescentes, incluindo o direito à convivência familiar e comunitária, além do acesso à educação de qualidade. Há leis estaduais/municipais de regularização fundiária que também podemos levar em consideração, além de outros princípios estabelecidos na constituição, como o artigo 186 sobre a função social da terra                
                </p>
            </div>



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
export default Humanas;