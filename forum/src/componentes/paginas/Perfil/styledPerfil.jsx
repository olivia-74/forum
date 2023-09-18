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


//     img{
//         display: flex;
//         height: 100px;
//         width: 100px;
//         background-color: blue;
//         border-radius: 50%;
//         float: left;
//         margin-right: 1vw;
//     }

//     h2{
//         font-size: 40px;
//         background-color: transparent;
//         font-weight: bold;
//     }
     

//     h3{
//         font-size: 25px;
//         background-color: transparent;
//         float: left;
//         margin: 7vh 0vw 5vh -9vw;
//         width: fit-content;

//     }

//     button{
//         float: right;
//         display: flex;
//         font-weight: bold;
//         background-color: purple;
//         border-bottom: 2px solid transparent;
//         font-size: 18px;
//         width: fit-content;
//         height: fit-content;
//         margin: 5vh 0vw 0vh 40vw;

//         &:hover{
//             border-bottom: 2px solid #0B66C2;
//             color: #0B66C2;
//         }
//     }
    
//     p{
//         background-color: transparent;
//         float: left;
//         display: flex;
//         flex-direction: column;
//         margin: 20vh 0vw 0vh -35vw;
//     }

//     hr{
//         width: 60vw;
//         margin: 22vh 0vw 0vh 2vw;
//     }

//     div{
//         flex-direction: column;
//     }

// `





// export const Card = styled.div`
//     background-color: #FFFFFF;
//     width:fit-content;
//     border-radius: 50px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;


//     img{
//         height: 100px;
//         width: 100px;
//         background-color: blue;
//         border-radius: 50%;
//         float: left;


//     }

//     h2{
//         font-size: 50px;
//         display: inline-flex;
//         margin: -12vh 0vh 0vh 40vh;
//         background-color: transparent;
//     }

//     label{
//        color: #182779;
//        font-size: 20px; 
//        background-color: white;
//        display: block;
//        margin-bottom: 1vh;
//     }

//     input{
//         background-color: #FDFDFD;
//         outline-color: rgba(176, 176, 176, 1);
//         border-radius: 10px;
//         border: solid 1px;
//         padding: 10px;
//         align-content: center;
//         justify-content: center;
//         margin-bottom: 4vh;
//         width: 25vw;
//         height: 5vh;
//     }

//     button{
//         color: rgba(24, 39, 121, 1);
//         border: 3px solid #0B66C2;
//         border-radius: 40px; 
//         width: 10vw;
//         padding: 5px;
//         font-size: 20px;
//         font-weight: bold;
//         display: block;
//         margin: auto;
//         margin-top: 2vh;


//         &:hover{
//             background-color: #0B66C2;
//             color: white;
//         } 
//     }


// `