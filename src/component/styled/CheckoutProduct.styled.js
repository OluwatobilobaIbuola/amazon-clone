import styled from "styled-components"

export const CheckoutProductDiv = styled.div`
    display: flex;
    margin:10px 0;
    padding:10px 0;
    column-gap:0.8em;
    p{
        strong{
            @media(max-width:768px){
                font-size:0.8rem;
            }
        }
    }
    img{
        flex:0.4;
        width: 100%;
        max-height: 150px;
        object-fit: contain;
        @media (max-width:1200px){
            max-height:110px;
        }
        @media (max-width:768px){
            max-height:75px;
            flex:0.5;
        }
    }
`
export const CoProductInfo = styled.div`
    flex:0.6;
    display:flex;
    flex-direction:column;
    justify-content: space-around;

    button{
        margin-top:1em;
        color: #007185;
        border: 1px solid #007185;
        padding:0.5em;
        width:200px;
        border-radius:4px;
        cursor:pointer;
        transition: 0.4s all ease-in-out;
        &:hover{
            opacity:0.9;
            color:#c40000;
            border: 1px solid #c40000;
        }
        @media(max-width:768px){
            font-size:0.6rem;
            padding:0.4em;
            width:100px;
        }
    }
    @media(max-width:768px){
        flex:0.5;
    }
` 

export const CoTitle = styled.div`
   font-size: 0.8rem;
    @media(max-width:768px){
        font-size:0.6rem;
    }
`
export const CoDesc = styled.p`
     @media(max-width:768px){
        font-size:0.6rem;
    }
`
  
