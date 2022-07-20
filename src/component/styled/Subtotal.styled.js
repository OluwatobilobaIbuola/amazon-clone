import styled from "styled-components"

export const SubtotalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;
  button{
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    cursor:pointer;
  }
  @media(max-width:768px){
    width:100%;
  }
`
export const Gift = styled.small`
  display: flex;
  align-items: center;
  input{
    margin-right: 5px;
  }
`
export const Value = styled.strong`
  @media(max-width:768px){
    font-size:0.8rem;
  }
`
export const SubtotalTag = styled.p`
   @media(max-width:768px){
    font-size:0.8rem;
  }
`