import styled from "styled-components";

export const ContainerDiscussao = styled.div`
    background-color: #ffffff;
    margin: 3vh;
    padding: 2.5vh;
    padding-top: 4vh;
    height: fit-content;
    display: flex;
    justify-self: center;
    margin: -4vh 10vw 0vh 10vw;
    border-radius: 15px 15px 15px 15px;
    flex-wrap: wrap;
`

export const NovoComentario = styled.div`
    background-color: transparent;
    display: flex;
    width: 80%;
    align-items: center;
    margin-left: 6.5vw;
    margin-top: 2vh;

    img{
        height: 70px;
        width: 75px;
        border-radius: 50%;
        background-color: blue;
        display: flexbox;
    }

    input{
        border-radius: 20px;
        border: solid 1px #0B66C2;
        height: 5vh;
        width: 100%;
        margin-left: 1%;
        margin-right: 1%;
        background-color: transparent;
        padding: 2vh;
    }
    button{
        border-radius: 20px;
        color: white;
        background-color: #0B66C2;
        padding: 1vh;
        font-size: 20px;
    }

`
