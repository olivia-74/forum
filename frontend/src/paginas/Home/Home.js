import Card from "../../componentes/Card/Card";
import { useVerifyToken } from "../../hooks/useVerifyToken";
import { ContainerHome, Linha, NovaPublicacao, ContainerFeed, Publicacoes} from "./styledHome"
import Header from "../../componentes/Header/Header"
import Footer from "../../componentes/Footer/Footer"
import Detalhe1 from "../../assets/fala.svg"
import Detalhe from "../../assets/fala1.svg"
import perfilArara from "../../assets/perfilArara.png"
import { useNavigate } from "react-router";
import perfilGato from "../../assets/perfilGato.png"
import perfilMacaco from "../../assets/perfilMacaco.png"
import perfilAlien from "../../assets/perfilAlien.png"
import perfilUnicornio from "../../assets/perfilUnicornio.png"

// import { useState } from "react"
// import { useEffect } from "react"
// import { getPostsAll } from "../../services/request"





function Home(){

  useVerifyToken()

  // const[forumTopics, setForumTopics] = useState([])
  // useEffect(() => {
  //   getPostsAll(setForumTopics)
  //   }, [])

    const navigate = useNavigate(); 
    const goToHumanas = () => {
      navigate('/discussaoHumanas')
    }
    const goToNatureza = () => {
      navigate('/discussaoNatureza')
    }
    const goToLinguagens = () => {
      navigate('/discussaoLinguagens')
    }
    const goToMatematica = () => {
      navigate('/discussaoMatematica')
    }


    return(
      <>
      <Header/>
      <ContainerHome>
        <Card/>
        <NovaPublicacao>
          <div>
              <textarea type="text" placeholder="Comece uma Discussão..."/>
              <img alt="" src={Detalhe1} />
          </div>
          <img alt="" src={perfilArara}/>
          <button>Publicar</button> 
        </NovaPublicacao>
        <Linha/>

        <ContainerFeed>

      {/* humanas */}
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
                    <button onClick={goToHumanas}>🗣️ Discussão</button>
                </div>
            </div>
        </Publicacoes>

        {/* natureza */}
        <Publicacoes>
            <img alt="" src={Detalhe}/>
            <div>
                <img alt="" src={perfilMacaco}/>
                <h3>João N.</h3>
                <p>Olá! Eu sou gerente de projetos em uma empresa de tecnologia altamente competitiva. Sou conhecido por ser dedicado e encaro longas jornadas de trabalho para atender às demandas da empresa. Minha equipe e superiores me estimam bastante devido à minha habilidade em entregar resultados de alta qualidade. No entanto, recentemente, tenho enfrentado sérios problemas de saúde mental, indicando estresse crônico. Estou sofrendo de burnout, uma condição caracterizada por exaustão física e mental devido à sobrecarga de trabalho. Passo noites em claro pensando em minhas responsabilidades, preocupado com o próximo prazo, e muitas vezes acordo no meio da noite com palpitações e ansiedade. Minha concentração no trabalho diminuiu drasticamente, e me sinto constantemente sob pressão. Desesperado, marquei uma consulta com um psiquiatra que prescreveu dois medicamentos: "Clonazepam" para ajudar a controlar minhas crises de ansiedade e "Zolpidem" para auxiliar meu sono. 
Estou bem preocupado com a ação desses medicamentos no meu organismo, por isso, elaborei uma série de questionamentos e agradeceria imensamente se alguém pudesse respondê-los: <br/>
               - Como exatamente os medicamentos afetam o sistema nervoso? <br/>
               - Quais neurotransmissores estão envolvidos e de que maneira esses medicamentos os influenciam? <br/>
               - Qual é a composição química desses medicamentos? O que torna o "Clonazepam” eficaz no tratamento da ansiedade e como o “Zolpidem" age para melhorar o sono? <br/>
               - Além do uso de medicamentos, devo considerar terapias alternativas para gerenciar seu estresse e burnout? Existem abordagens não farmacológicas, como a terapia cognitivo - comportamental ou práticas de relaxamento, que poderiam ser benéficas para ele? <br/>
</p>
                <hr/>
                <div>
                    <button>🫀 Curtir</button>
                    <button onClick={goToNatureza}>🗣️ Discussão</button>
                </div>
            </div>
        </Publicacoes>

          {/* linguagens */}
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
                    <button onClick={goToLinguagens}>🗣️ Discussão</button>
                </div>
            </div>
        </Publicacoes>

           {/* matematica */}
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
                    <button onClick={goToMatematica}>🗣️ Discussão</button>
                </div>
            </div>
        </Publicacoes>


</ContainerFeed>
        
      </ContainerHome>
      <Footer/>
       
       
        
      </>
    )
}

export default Home;