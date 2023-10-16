import styled from "styled-components"

export const ContainerCard = styled.div`
    background-color: #FFFFFF;
    margin: 10vh 0vh 10vh 0;
    width:fit-content;
    border-radius: 50px;
    padding: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;


    h1{
        color: #182779;
        background-color: #FEFEFE;
        font-family: "Mohave", sans-serif;
        font-size: 40px;
        font-weight: bold;
        letter-spacing: 1px;
        border-radius: 15px;  
        margin-bottom: 2vh;
        text-align: center;
    }

    form{
        background-color: white;
        width: 100%;
        display: block;
    }

    label{
       color: #182779;
       font-size: 20px; 
       background-color: white;
       display: block;
       margin-bottom: 1vh;
    }

    input{
        background-color: #FDFDFD;
        outline-color: rgba(176, 176, 176, 1);
        border-radius: 10px;
        border: solid 1px;
        padding: 10px;
        align-content: center;
        justify-content: center;
        margin-bottom: 4vh;
        width: 25vw;
        height: 5vh;
    }

    button{
        color: rgba(24, 39, 121, 1);
        border: 3px solid #0B66C2;
        border-radius: 40px; 
        width: 10vw;
        padding: 5px;
        font-size: 20px;
        font-weight: bold;
        display: block;
        margin: auto;
        margin-top: 2vh;


        &:hover{
            background-color: #0B66C2;
            color: white;
        } 
    }


`