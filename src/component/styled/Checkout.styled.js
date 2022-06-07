import styled from "styled-components"

export const CheckoutStyled = styled.div`
    display:flex;
    padding:20px;
    background-color: white;
    height: max-content; 
`
export const CheckoutTitle = styled.h2`
    border-bottom: 2px solid gray;
    margin-right: 10px;
    padding: 10px;
    z-index: 1;
`
export const CheckoutImage = styled.img`
    width: 100%;
    z-index: -1;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
` 