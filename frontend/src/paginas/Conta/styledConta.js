

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 85vh;
    margin: 0;
`

export const Card = styled.div`
    background-color: white;
    border-radius: 20px;
    width: 65vw;
    height: 70vh;
    padding: 5vh;
    margin-top: 10vh;
    

    header{
        display: flex;
        justify-content: space-between;
        background-color: transparent; 
        height: fit-content;

        h2{
            font-size: 35px;
            font-weight: bold;
            background-color: transparent;
        }
    }

    p{
        font-weight: bold;
        font-size: 20px;
  
    }

    div{
        display: flex;
        background-color: transparent;
        flex-direction: column;

        &.Esquerda{
            background-color: transparent;
            width: 30%;
            margin-top: 1vh;
            display: flex;
            justify-items: center;
            margin-left: 5vw;
            

            img{
                height: 200px;
                width: 200px;
                margin: 1vw;
                background-color: transparent;
                
            }
            label{
                width: 10vw;
                background-color: transparent;
            }
            input{
                background-color: transparent;
                width: 9vw;
            }
        }

        &.Direita{
            justify-self: right;
            float: right;
            margin-top: -53vh;
            background-color: transparent;
            width: 50%;
            margin-right: 3vw;

            div{
              input{
                background-color: transparent;
                margin-bottom: solid 2px black;
                width: 10vw;
                flex-direction: row;
            }

                button{
                    flex-direction: row;
                    margin-top: -4vh;
                    margin-left: 15vw;
                    border: solid 2px black;
                    height: fit-content;
                    width: 5vw;

                    &:hover{
                        text-decoration: none;
                        border: solid 2px #0B66C2;
                        color: #0B66C2;
                    }
                }  
            }
            
            

        }
    }

        button{
            align-items: center;
            margin: 2vh;
            width: 10vw;
            height: 2vh;
            font-weight: bold;
            border-bottom: 2px solid transparent;
            font-size: 18px;
           
            &:hover{
                text-decoration: underline #0B66C2;
            }
        }

    p{
        margin-top: 5vh;
        background-color: transparent;

        hr{
            margin: -1.5vh 0vw 5vh 10vw;
        }
    }
        
`

export const TextoDefault = styled.div`
    height: 10vh;
    font-size: 20px;
    padding-left: 22vw;
    font-weight: bold;
    background-color: white;
    letter-spacing: 1px;
`
