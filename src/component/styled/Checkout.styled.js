import styled from "styled-components"

export const CheckoutStyled = styled.div`
    display:flex;
    padding:20px;
    background-color: white;
    height: max-content; 

    @media(max-width: 768px){
        flex-direction:column;
        row-gap:0.8em;
        padding:10px;
    }
`
export const CheckoutTitle = styled.h2`
    border-bottom: 2px solid gray;
    margin-right: 10px;
    padding: 10px;
    z-index: 1;
    @media(max-width: 768px){
       font-size:0.8rem;
    }
`
export const CheckoutImage = styled.img`
    width: 100%;
` 
export const UserHeading = styled.h3`
    @media(max-width: 768px){
       font-size:0.8rem;
    }
`
export const CheckoutLeft = styled.div`
    flex: 0.7;
    div{
        a{  
            margin-top:0.5em;
            font-size:1rem;
            @media(max-width: 768px){
                font-size:0.7rem;
            }
        }
    }
`
export const CheckoutRight = styled.div`
    flex: 0.3;
`