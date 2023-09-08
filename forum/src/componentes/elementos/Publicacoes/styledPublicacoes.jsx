import styled from 'styled-components';
// import detalheE from '../../../assets/fala1.svg';


export const ContainerPublicacoes = styled.div`
    background-color: #ffffff;
    margin: 3vh;
    padding: 2vh;
    height: fit-content;
    display: flex;
    justify-self: center;
    margin: 5vh 10vw 5vh 10vw;
    border-radius: 0px 15px 15px 15px;
    flex-wrap: wrap;

    
    img{
        background-color: pink;
        border-radius: 50%;
        height: 60px;
        width: 60px;
        margin: 2vh 1vh 1vh 1vh;
    }

    a{
        font-size: 25px;
        color: #000000;
        background-color: transparent;
        margin: 3vh 0vh 2vh 1vh;
    }
    a:hover{
            text-decoration: underline;
        }
    p{
        font-size: 20px;
        text-align: justify;
        margin: 10vh 0vh 3vh -20vh;
        flex-wrap: wrap;
        max-width: 90%;
        background-color: transparent;
    }
    hr{
        padding: 0.5px;
        background-color: #0000001a;
        width: 100%; 
    }
`

export const ContainerInteracoes = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 3vh;
    height: 5vh;
    background-color: white;
    margin: 3vh 0vh 0vh 0vh;

    button{
        border: none;
        background-color: rgba(255, 255, 255, 0);
        display: flex;
        font-size: 35px;
        align-items: center;
        margin-left: 1vw;
    }
    button:hover{
        color: #0958a8;
        font-weight: bold;
        border-bottom: solid 2px;
    }
    p{
        font-size: 25px;
        margin: 1vh;

    }
`
