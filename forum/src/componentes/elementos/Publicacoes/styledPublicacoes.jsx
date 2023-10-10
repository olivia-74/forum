import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: fit-content;
    margin: 5vh 0 0 -3vw;

    img{
        background-color: transparent;
        height: 3vh;
        float: left;
        margin: -4px -15px 0px 10px;
    }
    
    div{
        flex-direction: column;
        width: 80vw;
        background-color: white;
        padding: 5vh 3vh 2vh 3vh;
        border-radius: 10px;
      
            
        h3{
            font-size: 20px;
            font-weight: bold;  
            width: fit-content;
            background-color: transparent;
            margin: 0px 0px 10px 25px;
            display: inline-flex;
        }

        p{
            display: flexbox;
            flex-wrap: wrap;
            background-color: transparent;
            margin: 0px 50px 15px 50px;
            font-size: 15px;

        }

        img{
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background-color: blue;
        } 

        div{
            background-color: transparent;
            width: 40vw;
            margin: -2vh 0px 2vh 18vw;
            height: 10px;
            align-content: center;

            button{
                font-size: 18px;
                margin-left: 3vw;
                border-bottom: solid 2px transparent;
                

                &:hover{
                    border-bottom: solid 2px #0958a8;
                }
            }  
        }
        
   
    }
`

export const Conteudo = styled.div`
    flex-direction: column;
    width: 80vw;
    background-color: white;
    padding: 5vh 3vh 2vh 3vh;
    border-radius: 10px;

    h3{
            font-size: 20px;
            font-weight: bold;  
            width: fit-content;
            background-color: transparent;
            margin: 0px 0px 10px 25px;
            display: inline-flex;
        }

        p{
            display: flexbox;
            flex-wrap: wrap;
            background-color: transparent;
            margin: 0px 50px 15px 50px;
            font-size: 15px;

        }

        img{
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background-color: blue;
        } 


`
