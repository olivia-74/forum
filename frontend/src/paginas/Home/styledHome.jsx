import styled from 'styled-components';

export const ContainerHome = styled.div`
    background-color: #F5F1F0;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    background-color: #F5F1F0;
    justify-items: center;
    display: box;
    justify-content: center;
`

export const NovaPublicacao = styled.div`
    display: block;
    width: 80vw;
    padding: 5vh;
    height: fit-content;
    margin-top: 3vh;
    margin-left: 10vw;
    margin-bottom: 5vh;

    div{
        width: 88%;
        height: fit-content;
        background-color: #ffffff;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        
        textarea{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            background-color: white;
            resize: none;  
            border: none;
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
        font-size: 15px;
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
    background-color: #00000031;
    display: block;
`

export const ContainerFeed = styled.div`
    background-color: #F5F1F0;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    background-color: #F5F1F0;
    justify-items: center;
    display: box;
    justify-content: center;
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
            display: flexbox;
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

            &&.planta{
                display: flex;
                justify-self: center;
                float: center;
                width: 10vw;
                height: 10vw;
                border-radius: 0px;
                background-color: hotpink;
            }
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

