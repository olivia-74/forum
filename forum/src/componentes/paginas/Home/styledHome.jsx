import styled from 'styled-components';
import detalheD from '../../../assets/fala.svg'

export const ContainerHome = styled.div`
    background-color: #F5F1F0;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    background-color: #F5F1F0;
    justify-items: center;
    display: flex;
    justify-content: center;
`

export const NovaPublicacao = styled.div`
    display: block;
    width: 80vw;
    padding: 5vh;
    height: fit-content;
    margin-top: 3vh;

    div{
        width: 88%;
        height: fit-content;
        background-color: #ffffff;
        padding: 10px;
        border-radius: 10px;
        margin-top: 1vh;  
        display: flex;
        
        textarea{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            background-color: white;
            resize: none;  
        }

        img{ 
            background-color: transparent;
            height: 3vh;
            margin-right: -4vw;
            margin-top: -1.5vh;


            }

    }

    img{
        border-radius: 50%;
        background-color: blue;
        right: 0;
        float: right;
        height: 90px;
        width: 90px;  
        margin-top: -12vh;
        
    }

        
    button{
        border: none;
        float: right;
        padding: 5px 15px;
        border-radius: 10px;
        color: white;
        font-size: 20px;
        background-color: #0B66C2;
        margin-top: 2vh;
        margin-right: 5vw;;

        &:hover{
            background-color: #0b67c279;
        }
    }

`

export const Linha = styled.hr`
    padding: 0.5px;
    background-color: #000000e1;
    display: block;
`
