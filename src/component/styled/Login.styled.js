import styled from "styled-components"

export const LoginStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 8em;
        margin: 20px 0;
    }
`
export const LoginContainer = styled.div`
    width: 300px;
    border-radius: 4px;
    border: 1px solid gray;
    padding:20px;
    form {
        display:flex;
        flex-direction: column;
        row-gap: 0.5em;
        button{
        background: #f0c14b;
        border-radius: 2px;
        width: 100%;
        height: 30px;
        border: 1px solid;
        margin-top: 10px;
        border-color: #a88734 #9c7e31 #846a29;
        }
        input{
        padding: 5px;
        }
    }
    button{
        border-color: darkgray;
        border-radius: 2px;
        width: 100%;
        height: 30px;
        border: 1px solid;
        margin-top: 10px;
        &:hover{
            background-color: #f0c14b;
        }
    }
  
`

export const LoginText = styled.p`
    margin:10px 0;
    font-size: 2vmin;
`
