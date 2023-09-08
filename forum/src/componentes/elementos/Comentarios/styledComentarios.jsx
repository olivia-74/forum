import styled from "styled-components";

export const ContainerComentarios = styled.div`
    background-color: #ffffff;
    padding: 2vh;
    height: fit-content;
    display: flex;
    justify-self: center;
    border-radius: 15px 15px 15px 15px;
    flex-wrap: wrap;

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