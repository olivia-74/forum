
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
            margin: 40px 0px 0px -5vw;
            flex-wrap: wrap;
            width: 70vw;
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



// export const ContainerDiscussao = styled.div`
//     height: fit-content;
//     margin: 10vh 5vw 0 5vw;
//     background-color: white;
//     width: 80vw;
//     border-radius: 10px;
      
//     div{
//         flex-direction: column;
//         width: 80vw;
//         background-color: white;
//         border-radius: 10px;
        

//         h3{
//             font-size: 18px;
//             font-weight: bold;  
//             width: fit-content;
//             background-color: red;
//             display: inline-flex;
//             margin-left: -15vw;
//         }

//         img{
//             height: 35px;
//             width: 35px;
//             border-radius: 50%;
//             background-color: blue;
//             float: left;
//             margin-left: -18vw;
//         } 

//         p{
//             display: flexbox;
//             flex-wrap: wrap;
//             background-color: transparent;
//             margin: 10px 50px 15px 50px;
//             font-size: 15px;  
//         }

//     }
        

//         p{
            

//         }

        

//         div{
//             background-color: transparent;
//             width: 40vw;
//             margin: -2vh 0px 2vh 18vw;
//             height: 10px;
//             align-content: center;

//             button{
//                 font-size: 18px;
//                 margin-left: 3vw;
//                 border-bottom: solid 2px transparent;
                

//                 &:hover{
//                     border-bottom: solid 2px #0958a8;
//                 }
//             }  
//         }
        
   
    
// `


// export const NovoComentario = styled.div`
//     background-color: white;
//     display: flex;
//     width: 80%;
//     align-items: center;
//     margin-top: 10vh;

//     img{
//         height: 70px;
//         width: 75px;
//         border-radius: 50%;
//         background-color: blue;
//         display: flexbox;
//     }

//     input{
//         border-radius: 20px;
//         border: solid 1px #0B66C2;
//         height: 5vh;
//         width: 100%;
//         margin-left: 1%;
//         margin-right: 1%;
//         background-color: transparent;
//         padding: 2vh;
//     }
//     button{
//         border-radius: 20px;
//         color: white;
//         background-color: #0B66C2;
//         padding: 1vh;
//         font-size: 20px;
//     }

// `
