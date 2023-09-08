import styled from "styled-components";

export const Cabecalho = styled.header`
    background-color: #ffffff;
    height: fit-content;
    display: flex;
    align-self: right;
    display: flex;  
    padding: 2vh;
`
export const LogoHeader = styled.img`
    background-color: white;
    justify-items: center;
    height: 8vh;
    margin-left: 43vw;
`

export const BotaoHeader = styled.button`
    display: flex; 
    font-size: 20px;
    color: #0B66C2;
    border: 3px solid #0B66C2;
    border-radius: 40px;
    padding: 1vh 2vh 1vh 2vh;
    margin-left: 15vw;
    font-weight: bold;
    height: fit-content;
    align-self: center;

    &:hover{
        background-color: #0B66C2;
        color: white;
    }
`


export const CardGrande = styled.div`
    background-color: white;
    justify-self: center;
    margin: 4vh 20vh 4vh 20vh;
    height: fit-content;
    padding: 2vh;
    border-radius: 50px;
    display: flexbox;
    border: solid 5px #0B66C2;

    h1{
        color: #182779;
        display: flex;
        background-color: #FEFEFE;
        font-size: 60px;
        letter-spacing: 1px;
        font-weight: bold;
        margin-left: 33vw;
        border-radius: 15px;
        width: fit-content;
    }

    input{
        width: 35vw;
        margin-top: 2vh;
        margin: 2vh 5vw 2vw 22vw;
        padding: 1vw;
        font-size: 30px;
        align-content: center;
        background-color: #FDFDFD;
        border-radius: 10px;
        border: solid 2px #0B66C2;
    }

    label{
        display: block;
        margin: 2vh 0vh 0vh 20vw;
        background-color: #FEFEFE;
        font-family: "Mohave", sans-serif;
        color: #182779;
        font-size: 35px;
        font-weight: bold;
        width: fit-content;
    }

    button{
        background-color: white;
        margin: 2vh 0vh 1vh 31vw;
        height: 10vh;
        width: 15vw;
        font-family: "Mohave", sans-serif;
        font-weight: bolder;
        color: #0B66C2;
        border-radius: 50px;
        border: solid 5px #0B66C2;
        font-size: 30px; 
    }

    button:hover{
        background-color: #0B66C2;
        color: white;
    }
`

export const Footer = styled.footer`
    background-color: #0B66C2;
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