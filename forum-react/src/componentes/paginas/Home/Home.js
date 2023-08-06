// import { ContainerHome } from "./styledHome"
import "../Home/styledHome.css";
import Header from "../../Header/Header";
import CardUsuario from "../../CardPerfil/CardUsuario";
import {BsBell, BsArrowUpCircle} from 'react-icons/bs';
import {GoCommentDiscussion} from 'react-icons/go';
import Footer from "../../Footer/Footer";

function Home (){
    return(
        <>
        <div className="ContainerHome">
            <Header/>
                
                <div className="Grid"> 
                    <CardUsuario className="user"/>
                    <div className="discussao">
                        <div className="publicar">
                            <input placeholder="Escreva aqui o que voce procura e comece uma discussao"></input>
                            <button>PUBLICAR</button>
                        </div>
                        <hr/>
                        <div className="publicacao">
                            <img/>
                            <h5>Leonardo Brentano</h5>
                            <div className="containerTags">
                                <a href=""><p>LGBTQI+</p></a>
                                <a href=""><p>E.F incompleto</p></a>
                            </div>
                            <p className="texto">Fala pessoal! Alguem sabe alguma vaga para nao-binaries no interior de Anta Gorda? #naoBinarie #emprego #AntaGordaRS</p>
                            <hr/>
                            <div className="containerInteracoes"> 
                                <button>
                                    <BsArrowUpCircle size={30}/> {/* <BsArrowUpCircleFill/> */}
                                    <p>Engajar</p>
                                </button>
                                <button>
                                    <GoCommentDiscussion size={30}/>
                                    <p>Discussao</p>
                                </button>
                                <button>
                                    <BsBell size={25}/> {/* <BsBellFill/> */}
                                    <p>Notificar-me</p>
                                </button>
                            </div>
                        </div>

                        <div className="publicacao">
                            <img/>
                            <h5>Sophia Moretto</h5>
                            <div className="containerTags">
                                <a href=""><p>Pret@</p></a>
                                <a href=""><p> Dislexia</p></a>
                                <a href=""><p> LGBTQI+</p></a>
                            </div>
                            <p className="texto">Estou em busca de novas oportunidades profissionais e meu perfil está disponível para empresas que valorizam a excelência.</p>
                            <hr/>
                            <div className="containerInteracoes"> 
                                <button>
                                    <BsArrowUpCircle size={30}/> {/* <BsArrowUpCircleFill/> */}
                                    <p>Engajar</p>
                                </button>
                                <button>
                                    <GoCommentDiscussion size={30}/>
                                    <p>Discussao</p>
                                </button>
                                <button>
                                    <BsBell size={25}/> {/* <BsBellFill/> */}
                                    <p>Notificar-me</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
        </>
    )
}
export default Home