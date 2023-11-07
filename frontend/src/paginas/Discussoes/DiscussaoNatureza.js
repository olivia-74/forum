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
import perfilMacaco from "../../assets/perfilMacaco.png"



function Natureza(){

    return(
        <>
        <Header/>
        <Publicacoes>
            <img alt="" src={Detalhe}/>
            <div>
                <img alt="" src={perfilMacaco}/>
                <h3>João N.</h3>
                <p>Olá, pessoal! Eu sou gerente de projetos em uma empresa de tecnologia altamente competitiva. Sou conhecido por ser dedicado e encaro longas jornadas de trabalho para atender às demandas da empresa. Minha equipe e superiores me estimam bastante devido à minha habilidade em entregar resultados de alta qualidade. No entanto, recentemente, tenho enfrentado sérios problemas de saúde mental, indicando estresse crônico. Estou sofrendo de burnout, uma condição caracterizada por exaustão física e mental devido à sobrecarga de trabalho. Passo noites em claro pensando em minhas responsabilidades, preocupado com o próximo prazo, e muitas vezes acordo no meio da noite com palpitações e ansiedade. Minha concentração no trabalho diminuiu drasticamente, e me sinto constantemente sob pressão. Desesperado, marquei uma consulta com um psiquiatra que prescreveu dois medicamentos: "Clonazepam" para ajudar a controlar minhas crises de ansiedade e "Zolpidem" para auxiliar meu sono. 
Estou bem preocupado com a ação desses medicamentos no meu organismo, por isso, elaborei uma série de questionamentos e agradeceria imensamente se alguém pudesse respondê-los: <br/>
               1. Como exatamente os medicamentos afetam o sistema nervoso? <br/>
               2. Quais neurotransmissores estão envolvidos e de que maneira esses medicamentos os influenciam? <br/>
               3. Qual é a composição química desses medicamentos? O que torna o "Clonazepam” eficaz no tratamento da ansiedade e como o “Zolpidem" age para melhorar o sono? <br/>
               4. Além do uso de medicamentos, devo considerar terapias alternativas para gerenciar seu estresse e burnout? Existem abordagens não farmacológicas, como a terapia cognitivo - comportamental ou práticas de relaxamento, que poderiam ser benéficas para ele? <br/>
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
                Oie! Sobre a sua primeira pergunta: o Clonazepam é um benzodiazepínico que atua como um potente modulador do receptor de GABA-A, um neurotransmissor inibitório no sistema nervoso central. Ele aumenta a atividade do GABA, o que reduz a excitabilidade neuronal. O GABA é o principal neurotransmissor inibitório no cérebro, e sua ativação tranquiliza o sistema nervoso, ajudando a reduzir a ansiedade. Já o Zolpidem é um medicamento indutor do sono que pertence à classe das imidazopiridinas. Ele age seletivamente sobre os receptores de GABA-A que contém a subunidade alfa-1, encontrada predominantemente no cérebro. Isso leva a uma diminuição na atividade neuronal e promove o sono. Ele não apenas ajuda a adormecer, mas também melhora a qualidade do sono, ajudando você a ter um descanso mais profundo.
                </p>
            </div>
            <hr/>
            <div>
                <img src={perfilDragao}/>
                <h2>Victoria</h2>
                <p>
                Respondendo ao segundo questionamento, o Clonazepam age aumentando a atividade do GABA, como Clara mencionou. O GABA é um neurotransmissor inibitório que reduz a atividade neuronal. Em pessoas com ansiedade, há uma superexcitação neuronal, e o Clonazepam ajuda a restaurar o equilíbrio, diminuindo essa hiperexcitabilidade. O Zolpidem age de forma semelhante, potencializando a ação do GABA. O sono é regulado por diferentes neurotransmissores, incluindo o GABA. Ao aumentar a atividade do GABA nos neurônios, o Zolpidem reduz a atividade cerebral, ajudando você a adormecer mais facilmente e a manter um sono contínuo.
                </p>
            </div>
            <hr/>
            <div>
                <img src={perfilTigre}/>
                <h2>Leonardo</h2>
                <p>
                Sobre o terceiro questionamento, o Clonazepam, um benzodiazepínico, tem fórmula C15H10ClN3O3 e atua no sistema nervoso central, interagindo e intensificando as ações do neurotransmissor GABA de efeito calmante e diminuição dos impulsos nervosos. Agora, o Zolpidem, um hipnótico não benzodiazepínico, tem fórmula C19H21N3O e atua de forma similar ao clonazepam, intensificando a atividade do GABA mas com foco nas sinapses cerebrais que resultam no estado de sonolência  e indução do sono. 
                </p>
            </div>
            <hr/>
            <div>
                <img src={perfilCoelho}/>
                <h2>Sophia</h2>
                <p>
                Oi, João! É importante entender que esses medicamentos não são soluções permanentes, mas sim ferramentas temporárias para ajudar a restaurar o equilíbrio do seu sistema nervoso. Eles não resolvem a causa subjacente do seu burnout, então é fundamental que você também trabalhe em estratégias de gerenciamento de estresse e busque apoio psicológico para abordar as questões emocionais subjacentes. Para prevenir o burnout, você pode se reunir com seus superiores para discutir a distribuição de tarefas, definir seus limites claramente, aprender a gerenciar seu tempo, seus afazeres e suas prioridades. Também é possível manter a saúde mental através de exercícios físicos e de um estilo de vida saudável. 
                </p>
            </div>
            <hr/>
            <div>
                <img src={perfilUrso}/>
                <h2>Daniel</h2>
                <p>
                Como tratamento alternativo, você pode buscar a terapia e acompanhamento psicológico, que podem lhe ajudar a desenvolver habilidades para lidar com o estresse e a pressão. Compartilhar seus sentimentos com amigos e pessoas próximas também pode ser uma boa ideia para obter apoio emocional. É importante lembrar que a redução da ansiedade e o relaxamento também podem ser promovidos através de atividades como yoga, respiração profunda e meditação.
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
export default Natureza;