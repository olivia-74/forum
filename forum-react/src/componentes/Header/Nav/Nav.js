import "./styledNav";
import { InputStyled, NavHeader, barraPesquisa } from "./styledNav";

function Nav (){
    return(
        <NavHeader>
            <InputStyled placeholder=""/> 
        </NavHeader>
    )
}

export default Nav;









// import "./styledNav";
// import {SlBubbles} from 'react-icons/sl'; 
// import {ImBubbles2} from 'react-icons/im'; 

// const Nav = ({BotaoNav, aoSelecionar }) => {
//     function selecionar(){
//         aoSelecionar(BotaoNav.id);
//     }
//     const BotaoSelecionado = {
//         size: 25,
//         onClick: selecionar,
//     }
// }

//     return(
//         <NavHeader>
//         {BotaoNav.selecionado
//             ? <ImBubbles2{...BotaoSelecionado} color= '#0B66C2'/>
//             : <SlBubbles{...BotaoSelecionado}/>
//         }
//          {BotaoNav.selecionado
//             ? <ImBubbles2{...BotaoSelecionado} color= '#0B66C2'/>
//             : <SlBubbles{...BotaoSelecionado}/>
//         }

//     </NavHeader>
//     )

// export default Nav;