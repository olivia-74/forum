import styled from "styled-components";

export const Cabecalho = styled.header`
    background-color: #ffffff;
    height: 8vh;
    display: flex;
    justify-content: space-around;
    align-content: center;
    display: flex;  
    padding: 2vh;
`
export const LogoHeader = styled.img`
    background-color: white;
`

export const BotaoHeader = styled.button`
    display: flex; 
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: rgba(24, 39, 121, 1);
    border: 3px solid #0B66C2;
    border-radius: 40px;
    padding: 1vh 5vh 1vh 5vh;

`

export const CardGrande = styled.div`
    background-color: #FFFFFF;
    margin-left: 35vh;
    margin-right: 50vh;
    margin-top: 10vh;
    height: 65vh;
    width: 60vw;
    border-radius: 50px;
`

export const Texto1 = styled.h1`
    color: #182779;
    background-color: #FEFEFE;
    margin-left: 28vw;
    font-family: "Mohave", sans-serif;
    font-size: 40px;
    border-radius: 15px;
`

export const Footer = styled.footer`
    background-color: #182779;
    margin-top: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    margin-top: 9vh;
`

export const UsuarioStyle = styled.h2`
    margin: 0 20vh 0 20vh;
    font-family: "Mohave", sans-serif;
    color: #182779;
    background-color: #FEFEFE;
`

export const InputNome = styled.input`
    width: 35vw;
    height: 4vh;
    margin-top: 2vh;
    margin-left: 10vw;
    padding-left: 3vh;
    background-color: #FDFDFD;
    outline-color: rgba(176, 176, 176, 1);
    border-radius: 10px;
    border: solid 1px;
`
export const Label = styled.label`
    display: block;
    margin-top: 5vh;
    margin-left: 10vw;
    background-color: #FEFEFE;
    font-family: "Mohave", sans-serif;
    color: #182779;
`


export const Texto2 = styled.h2`
    margin-top: 5vh;
    margin-left: 10vw;
    background-color: #FEFEFE;
    font-family: "Mohave", sans-serif;
    color: #182779;
`

export const InputSenha = styled.input`

    width: 35vw;
    height: 4vh;
    margin-top: 2vh;
    margin-left: 10vw;
    padding-left: 3vh;
    background-color: #FDFDFD;
    outline-color: rgba(176, 176, 176, 1);
    border-radius: 10px;
    border: solid 1px;
`

export const BotaoEntrar = styled.button`
    background-color: #0B66C2;
    margin-top: 10vh;
    margin-left: 24vw;
    height: 10vh;
    width: 15vw;
    outline-color: #0B66C2;
    font-family: "Mohave", sans-serif;
    font-weight: bolder;
    color: white;
    font-size: 20px;
`

export const PosBotao = styled.div`
    background-color: #FEFEFE;
`