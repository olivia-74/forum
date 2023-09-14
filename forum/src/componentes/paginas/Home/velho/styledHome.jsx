import styled from 'styled-components';
import detalheD from '../../../assets/fala.svg'

export const ContainerHome = styled.div`
    background-color: #F5F1F0;
    font-family: Arial, Helvetica, sans-serif;
`
export const Postar = styled.div`
    margin: 3vh;
    padding: 5vh;
    height: fit-content;
    display: flex;
`

export const Foto = styled.img`
    border-radius: 50%;
    background-color: blue;
    right: 0;
    float: right;
    height: 90px;
    width: 90px;
`

export const BalaoInput = styled.div`
    width: 88%;
    margin: 5vh 3vh;
    min-height: fit-content;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    margin-top: 2vh;
`

export const DetalheDireita = styled.div`
    background-image: svg(${detalheD});
`

export const Input = styled.textarea`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    resize: none;
`
export const BotaoPublicar = styled.button`
   border: none;
   float: right;
   margin: -10vh 15vw 4px 4px;
   padding: 5px 15px;
   border-radius: 10px;
   color: white;
   font-size: 25px;
   background-color: #0B66C2;

   &:hover{
    background-color: #0b67c279;
   }
`

export const Linha = styled.div`
    padding: 0.5px;
    background-color: #000000e1;
    width: 100%;
`
