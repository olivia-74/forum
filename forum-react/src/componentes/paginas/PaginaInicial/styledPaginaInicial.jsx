import styled from "styled-components";
import imagemPaginaInicial from "../../assets/imagemFundoPaginaInicial.png"

export const Cabecalho = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    font-family: Patua one, sans-serif;
    color: #182779;
    height: 80px;

`

export const Img = styled.img`
    height: 80px;
    padding-left: 30px;
`


export const StyledPaginaInicial = styled.div`
    background-image: url(${imagemPaginaInicial});
    height: 500px;
    background-position: center, right;
    position: relative;
`


export const TextoPagina = styled.div`
    color: #FBFBFB;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Patua One;
    font-size: 59px;
    padding-right: 398px;
    position: absolute;
    top: 85vh;
`

export const RodapePaginaInicial = styled.div`
    background-color: #182779;
    height: 300px
`
