import styled from "styled-components";

export const ContainerComentarios = styled.div`
    background-color: #F5F1F0;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    background-color: #F5F1F0;
    justify-items: center;
    display: box;
    justify-content: center;

    img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: gray;
        margin: 1vh 1vh 1vh 1vh;
   }

   a{
        font-size: 25px;
        color: #0B66C2;
        background-color: transparent;
        margin: 1.5vh 0vh 1vh 1vh;
   }

   a:hover{
        text-decoration: underline;
    }

    p{
        margin: 2vh 4vh 6vh 4vh;
        font-size: 18px;
        flex-wrap: wrap;
        max-width: 100%;
        text-align: justify;
        background-color: transparent;
    }

    hr{
        padding: 0.5px;
        background-color: #0000001a;
        width: 100%; 
    }
`