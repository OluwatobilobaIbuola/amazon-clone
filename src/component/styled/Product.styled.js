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
    max-height: 400px;
    min-width: 100px;
    transition: 1s;
    img{
        width: 100%;
        max-height: 200px;
        object-fit: contain;
        margin-bottom: 15px;
    }
    button{
        background-color: #f0c14b;
        border: 1px solid;
        margin-top: 10px;
        border: #a88734 #9c7e31 #846a29;
        color: #111;
    }
`
export const ProductTitle = styled.p`
    font-size: 2vmin;
`
export const Rating = styled.div`
     display: flex;
`
export const Price = styled.div`
    margin-top: 5px;
`
export const ProductInfo = styled.div`
    height: 100px;
    margin-bottom: 15px;
    width:80%;
`

