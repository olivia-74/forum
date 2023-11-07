import Header from "../../componentes/Header/Header"
import Footer from "../../componentes/Footer/Footer"
import { Container, NovoComentario, Publicacoes } from "./styledDiscussoes";
import Detalhe from "../../assets/fala1.svg"
import perfilTigre from "../../assets/perfilTigre.png"
import perfilUrso from "../../assets/perfilUrso.png"
import perfilArara from "../../assets/perfilArara.png"
import perfilAlien from "../../assets/perfilAlien.png"


function Linguagens(){

    return(
        <>
        <Header/>
        <Publicacoes>
            <img alt="" src={Detalhe}/>
            <div>
                <img alt="" src={perfilAlien}/>
                <h3>Maria Carolina L.</h3>
                <p>Gostaria de compartilhar aqui uma situação que aconteceu na empresa onde trabalho: <br/>
                Nossa empresa, situada na região do Vale dos Sinos, no Rio Grande do Sul, enfrentava um desafio claro: o analfabetismo funcional entre os nossos funcionários. Essa questão vem afetando seriamente a comunicação interna, a segurança e a qualidade do trabalho. A partir disso, precisamos criar soluções eficazes para resolver essa problemática, de forma a fortalecer a cultura organizacional da empresa, pois, assim como disse Arthur Lewis, premiado economista britânico, “a educação nunca foi despesa. Sempre foi investimento com retorno garantido.”<br/>
                No primeiro momento, reconhecemos a necessidade de realizar um levantamento para identificar os funcionários com dificuldades de leitura e escrita, assim nos permitindo visualizar melhor as necessidades individuais de cada um. Também consideramos importante conduzir sessões de conscientização em todo o local de trabalho, destacando a importância da alfabetização plena não só no contexto profissional, mas em todos os aspectos que influenciam na qualidade de vida geral dos nossos empregados. <br/>
                Passamos a fechar parcerias com instituições locais de educação e alfabetização, visando criar programas de ensino flexíveis e adaptados à agenda dos funcionários, pois entendemos que é extremamente importante que todos tenham acesso ao aprendizado, independente de sua renda ou classe social.  Além disso, pensamos também em programas internos de desenvolvimento, em que nossa equipe pode aprimorar suas habilidades de leitura e escrita no ambiente profissional através de workshops interativos, tutoriais online, e palestras visando a aplicação prática das habilidades construídas. <br/>
                Ademais, acreditamos ser indispensável o apoio contínuo a esses funcionários, de forma a mantê-los motivados durante todo o processo de aprendizagem. Para isso, designamos alguns colegas de trabalho como mentores dedicados a prestar suporte individualizado e a incentivar a prática constante das novas habilidades de comunicação desenvolvidas. Da mesma forma, é importante que os esforços dos funcionários sejam reconhecidos formalmente pela empresa, e por isso passamos a oferecer recompensas em forma de prêmios ou promoções àqueles que demonstrarem dedicação e progresso notável. Assim, o apoio e a cooperação no ambiente de trabalho é vital para promover o alcance de conquistas da empresa, e também pessoais.  <br/>
                Os desafios que enfrentamos demonstram a importância da alfabetização e como ela é crucial para a confiança e o desenvolvimento do indivíduo em diversos âmbitos, inclusive dentro do mercado de trabalho. A partir dessas abordagens, esperamos melhorar significativamente a comunicação interna e a capacidade da equipe de seguir e interpretar instruções escritas, assim aumentando a qualidade e segurança laboral, com a maior compreensão das informações fornecidas, de modo a promover um ambiente seguro, informado e consciente. O analfabetismo ainda é um desafio a ser superado no Brasil, contudo estamos determinados a ser parte da solução e a inspirar outras empresas a se juntarem a nós nesse esforço coletivo por um país mais educado e capacitado.
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
                <img src={perfilTigre}/>
                <h2>Leonardo</h2>
                <p>
                Muito bem! É incrível ver a dedicação e ação proativa da sua empresa em enfrentar o desafio do analfabetismo funcional entre os funcionários. A iniciativa de identificar as necessidades individuais, promover conscientização e estabelecer parcerias locais demonstra um compromisso genuíno com o desenvolvimento pessoal e profissional dos colaboradores. A alfabetização é, sem dúvida, um pilar fundamental para o crescimento individual e coletivo. A sua abordagem não apenas melhora a comunicação interna, mas também eleva a qualidade e segurança do trabalho, criando um ambiente mais seguro e colaborativo. Estou impressionado com o programa interno de mentoria e reconhecimento, mostrando como o apoio contínuo é crucial nesse processo de aprendizado. A sua empresa está, de fato, não apenas resolvendo um problema interno, mas também contribuindo para um Brasil mais educado e capacitado. Parabéns pelo compromisso e pelo exemplo inspirador!                </p>
            </div>
            <hr/>
            <div>
                <img src={perfilUrso}/>
                <h2>Daniel</h2>
                <p>
                É maravilhoso ver empresas como a sua investindo na alfabetização de seus funcionários, pois esse esforço vai além do ambiente de trabalho. A alfabetização desempenha um papel fundamental na construção da identidade de uma pessoa e no registro de suas vivências. Ela não apenas proporciona as habilidades necessárias para interpretar e comunicar informações, mas também oferece um meio para que indivíduos expressem suas próprias histórias, pensamentos e emoções. A capacidade de ler e escrever não apenas enriquece a maneira como vemos o mundo, mas também nos permite preservar nossas experiências, sonhos e aspirações de uma forma tangível. Ao promover a alfabetização, sua empresa não está apenas fortalecendo habilidades práticas, mas também empoderando seus funcionários a compartilhar suas vozes, contribuindo assim para uma comunidade mais rica, diversificada e inclusiva. Parabéns por entender não apenas a importância funcional, mas também o valor intrínseco da alfabetização na construção da identidade e no enriquecimento das narrativas humanas. É um passo significativo para criar um ambiente onde cada voz é valorizada e cada história é digna de ser contada.
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
export default Linguagens;