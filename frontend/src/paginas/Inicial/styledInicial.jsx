import styled from "styled-components";
import imagemPaginaInicial from "../../assets/imagemFundoPaginaInicial.png"


export const Cabecalho = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    height: 70px;
    background-color: white;
`
export const Entrar = styled.button`
    color: #182779;
    background-color: white;
    border: none;
    font-family: Patua one, sans-serif;
    font-size: 30px;
    font-weight: bold;

    &:hover{
        text-decoration: underline;
    }
`

export const Img = styled.img`
    height: 65px;
    padding-left: 30px;
    background-color: white;
`


export const StyledPaginaInicial = styled.div`
    background-image: url(${imagemPaginaInicial});
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

export const Rodape = styled.div`
    background-color: #182779;
    height: 300px;
    padding: 4vw;
`
export const Texto = styled.p`
    color: #FBFBFB;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Patua One;
    font-size: 59px;
    position: absolute;
    background-color: #182779
`