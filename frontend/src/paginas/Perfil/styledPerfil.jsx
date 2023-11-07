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
    width: 80vw;
    height: 70vh;
    padding: 2vh;
    margin-top: 10vh;
    

    header{
        display: flex;
        justify-content: space-between;
        background-color: transparent; 
        height: fit-content;
        
    
        div{
            text-align: center;
            padding: 10px;
            background-color: transparent;
           
            
         img{
            height: 100px;
            width: 100px;
            background-color: blue;
            border-radius: 50%;
            }   

            h2{
                font-size: 35px;
                font-weight: bold;
                margin: -12vh 0vw 0vh 8vw;
                background-color: transparent;
            }

            h3{
                font-size: 25px;
                margin: -1vh 4vw 0vh 5vw;
                background-color: transparent;

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
