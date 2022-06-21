// eslint-disable-next-line
import styled from "styled-components"

export const ProductStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    z-index: 1;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px;
    width:100%;
    min-width:100px;
    max-height: 400px;
    transition: 1s;
    border-radius: 8px;
    @media (max-width:768px){
        width:90%;
        margin-inline:auto;
    }
    img{
        width: 100%;
        max-height: 200px;
        object-fit: contain;
        margin-bottom: 15px;
    }
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
export const ProductTitle = styled.p`
    font-size: 0.8rem;
`
export const Rating = styled.div`
     display: flex;
`
export const Price = styled.div`
    margin-top: 5px;
`
export const ProductInfo = styled.div`
    margin-bottom: 15px;
    width:80%;
`

