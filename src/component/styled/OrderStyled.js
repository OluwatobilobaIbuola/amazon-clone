import styled from "styled-components"

export const OrderStyled = styled.div`
  padding: 10px;
  margin: 20px 0;
  border: 1px solid lightgray;
  background-color: white;
  position: relative;
  h2{
    @media(max-width:768px){
      font-size:0.8rem;
    }
  }
  p{
      @media(max-width:768px){
        font-size:0.8rem;
      }
  }

`
export const OrderId = styled.p`
  position: absolute;
  top: 40px;
  right: 20px;
  @media(max-width:768px){
    top: 10px;
    right: 10px;
  }
`
export const OrderTotal = styled.h3`
  font-weight: 500;
  text-align: right;
  @media(max-width:768px){
    font-size:0.8rem;
  }
`
