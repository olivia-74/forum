import "./styledCardUsuario.css"
import {BsPersonLinesFill} from 'react-icons/bs'
import {AiOutlineBorderlessTable} from 'react-icons/ai'
import {GiShare} from 'react-icons/gi'
import FotoPerfil from "../../assets/FotoPessoa.png"


function CardUsuario (){
    return(
        <>
            <div className="cardUsuario">
                <div className="cabecalho">
                    {/* <input type="color"/> */}
                    <img src={FotoPerfil} alt="Foto de perfil" />
                </div>
                <div className="nome">
                    <button><h2>Dwayne Johnson</h2></button>
                </div>
                <div className="blocos">
                    <button> 
                        <BsPersonLinesFill size={30}/>
                        <p>Acessar perfil</p>
                    </button>
                    
                </div>
                <div className="blocos">
                    <button>
                        <AiOutlineBorderlessTable size={30}/>
                        <p>Meus grupos</p>
                    </button> 
                </div>
                <div className="blocos"> 
                    <button> 
                        <GiShare size={30}/>
                        <p>Conexoes</p>
                    </button> 

                </div>
                
                    
                    
                

            </div>
                
            
        </>
    )
}
export default CardUsuario