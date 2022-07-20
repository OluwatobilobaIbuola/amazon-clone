import styled from "styled-components"

export const PaymentStyled = styled.div`
  background-color: white;
  padding:0 10px;
` 
export const PaymentContainer = styled.div`
  h1{
    text-align: center;
    padding: 10px;
    font-weight: 400;
    background-color: rgb(234, 237, 237);
    border-bottom: 1px solid lightgray;
    a{
      text-decoration: none;
    }
    @media(max-width:769px){
      font-size:1rem;
    }
  }
`
export const PaymentSection = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  @media(max-width:768px){
    flex-direction:column;
    row-gap:0.5em;
    padding: 1px;
  }
`

export const FlexSmall = styled.div`
  flex: 0.2;
  h3{
    @media(max-width:768px){
      font-size:0.8rem;
    }
  }
`

export const FlexLarge = styled.div`
  flex: 0.8;
  p{
    @media(max-width:768px){
      font-size:0.8rem;
    }
  }
`
  
export const PaymentDetails = styled.div`
  flex: 0.8;
  form {
    overflow-x:auto;
    max-width: 400px;
    div{
      button{
        background: #f0c14b;
        border-radius: 2px;
        width: 100%;
        height: 30px;
        border: 1px solid;
        font-weight: bolder;
        margin-top: 10px;
        border-color: #a88734 #9c7e31 #846a29;
        color: #111;
        @media(max-width:768px){
          margin-top:5px;
        }
      }
    }
  }
  h3 {
    padding-bottom: 20px;
  }
`
export const Value = styled.h3`
  font-size: 0.8rem;
  margin-top:5px;
`
