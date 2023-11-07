
import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    padding: 5px;
    width: 80vw;
    margin: 1vh 0vw 0vh 9.5vw;
    border-radius: 10px;

    div{
        background-color: transparent;
        margin: 15px 30px 15px 30px;
        display: flex;
        flex-wrap: wrap;

        img{
            height: 35px;
            width: 35px;
            border-radius: 50%;
            background-color: blue; 
        }

        h2{
            font-size: 18px;
            font-weight: bold; 
            background-color: transparent; 
            margin: 5px 0px 0px 10px;
        }

        p{
            font-size: 15px;
            background-color: transparent;
            margin-top: 3em;
            flex-wrap: wrap;
            overflow: hidden;
            max-width: 60vw;
         
        }
    }
`


export const NovoComentario = styled.div`
    padding: 5vh 0vh 5vh 18vh;


    input{
        border-radius: 20px;
        border: solid 1px #0B66C2;
        height: 5vh;
        width: 50vw;
        margin-left: 1%;
        margin-right: 1%;
        background-color: transparent;
        padding: 2vh;
    }

    button{
        border: none;
        float: right;
        padding: 5px 15px;
        border-radius: 20px;
        color: white;
        font-size: 15px;
        background-color: #0B66C2;
        margin-right: 5vw;

        &:hover{
            background-color: #0b67c279;
        }
    }

`

export const Publicacoes = styled.div`
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
            flex-wrap: wrap;
            background-color: transparent;
            margin: 10px 50px 15px 50px;
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
            margin: -2vh 0px 2vh 24vw;
            height: 10px;
            align-content: center;
            

            button{
                font-size: 18px;
                margin-left: 3vw;
                border-bottom: solid 2px transparent;
                background-color: transparent;
                border: none;
                

                &:hover{
                    border-bottom: solid 2px #0958a8;
                }
            }  
        }
        
   
    }
`


