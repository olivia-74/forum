import styled from "styled-components"

export const NavHeader = styled.div`
    background: none;
    border: none;
    font-size: small;
    display: flex;
    background-color: turquoise;
    height: 5vh;
    width: 5vw;
    justify-content: space-around;
    align-self: center;
    flex: 5px;
    margin-left: 3vw;
    margin-right: 10vw

`
export const BotaoNav = styled.button`
    background: none;
    border: none;
    font-size: small;
`

export const barraPesquisa = styled.div`
    border: none;
    font-size: 10px;
    background-color:gray;

    
`

export const InputStyled = styled.input`
    background-color: blue;
`

/* export const Input = styled.input.attrs(props => ({type: "text", size: props.$size || "1em", }))
<{ $size?: string }>`
    color: #BF4F74;
    font-size: 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
    margin: ${props => props.$size};
    padding: ${props => props.$size};
    display: flex;

    .Icones{
     display: inline-block;
    }
    `; */
