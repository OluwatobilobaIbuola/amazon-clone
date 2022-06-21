import styled from "styled-components"

export const CheckoutProductDiv = styled.div`
    display: flex;
    column-gap: 1em;
    margin:10px 0;
    img{
        object-fit: contain;
        width:150px;
        height:150px
    }
`
export const COProductInfo = styled.div`
    padding-left: 20px;
    button{
        background-color: #f0c14b;
        border: 1px solid #f0c14b;
        margin-top: 10px;
        padding:0.5em;
        border-radius:4px;
        transition: 0.4s all ease-in-out;
        &:hover{
            opacity:0.9;
            background-color: transparent;
            border: 1px solid #f0c14b;
        }
    }
` 

export const COTitle = styled.div`
    font-size: 0.8rem;
    font-weight: 800;
`
  
