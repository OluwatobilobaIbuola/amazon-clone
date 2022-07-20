// eslint-disable-next-line
import styled from "styled-components"

export const ProductStyled = styled.div`
    display: flex;
    z-index:0;
    flex-direction: column;
    background-color: white;
    align-items: center;
    row-gap:0.7em;
    padding: 20px;
    min-width:320px;
    width:100%;
    max-height: 350px;
    transition: 1s;
    border-radius: 8px;
    img{
        width: 100%;
        max-height: 140px;
        object-fit: contain;
        @media (max-width:768px){
            max-height:50px;
        }
    }
    button{
        cursor:pointer;
        margin-top:auto;
        color: #007185;
        border: 1px solid #007185;
        padding:0.5em;
        border-radius:4px;
        transition: 0.4s all ease-in-out;
        z-index:999;
        &:hover{
            opacity:0.9;
            color:#c40000;
            border: 1px solid #c40000;
        }
        @media(max-width:768px){
            font-size:0.6rem;
            padding:0.4em;
            width:80px;
        }
    }
    @media (max-width:768px){
        min-width:150px;
        height: 140px;
        padding:5px 4px;
        justify-content: initial;
        row-gap:5px;
        margin-top:auto;
    }
`
export const ProductTitle = styled.p`
    font-size: 0.8rem;
    @media(max-width:768px){
        font-size:0.6rem;
    }
`
export const Rating = styled.div`
    display: flex;
    span{
        @media(max-width:768px){
            font-size:0.6em;
        }
    }
`
export const Price = styled.strong`
    margin-top: 5px;
    @media(max-width:768px){
        font-size:0.6rem;
    }
`
export const ProductInfo = styled.div`
    width:100%;
    p{
        small{
            @media(max-width:768px){
                font-size:0.6rem;
            }
        }
    }
`

