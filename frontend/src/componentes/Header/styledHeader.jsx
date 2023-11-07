import styled from 'styled-components';


export const ContainerHeader = styled.header`
    height: fit-content;
    background: #ffffff;
    display: flex;
    padding: 5px;
    align-items: center;
`
export const Logo = styled.img`
    height: 7vh;
    margin-left: 10vh;
    background-color: white;
    margin-right: 1vw;
`

export const Input = styled.input`
    background-color: #EEF3F7;
    border: none;
    border-radius: 4px;
    height: 4vh;
    align-items: center;
    padding: 5px 10px 5px 40px;

`
export const IconeInput = styled.button`
    color: black;
    height: fit-content;
    font-size: 20px;
    align-items: center;
    left: 21vh;
    position: absolute;
    border: none;
    padding: none;
    background-color: transparent;
`

export const ContainerBotoes = styled.div`
    margin-left: 52vw;
    background-color: white;

    button{
        display: inline-flexbox;
        color: black;
        justify-content: center;
        background-color: white;
        float: right;
        margin-left: 1vw; 
        font-size: 2vw;
        border: none;

        p{
            background-color: white;
            font-weight: bold;
            font-size: 0.7vw;
            margin-top: 0.2vh;
            font-weight: bolder;
                
            &:hover{
                text-decoration: underline;
                color: #0B66C2;
        }
        }
    }
`

