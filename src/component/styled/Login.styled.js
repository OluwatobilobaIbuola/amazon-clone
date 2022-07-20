import styled from "styled-components"

export const LoginStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 7em;
        margin: 20px 0;
    }
`
export const Container = styled.div`
    width: 350px;
    border-radius: 4px;
    border: 1px solid gray;
    padding:20px;
    @media(max-width:768px){
        width: 280px;
    }
    form {
        margin:10px 0;
        display:flex;
        flex-direction: column;
        button{
        background: #f0c14b;
        border-radius: 2px;
        width: 100%;
        height: 30px;
        border: 1px solid;
        margin-top: 10px;
        border-color: #a88734 #9c7e31 #846a29;
        cursor:pointer;
        }
        input{
        margin-bottom:0.8em;
        padding: 6px;
            &:focus{
                outline:none;
                border:1px solid #f0c14b;
                box-shadow:0 0 10px #f0c14b; 
            }
        }
    }
    button{
        border-color: darkgray;
        border-radius: 2px;
        width: 100%;
        height: 30px;
        border: 1px solid;
        margin-top: 10px;
        transition: 0.4s all ease-in-out;
        cursor:pointer;
        &:hover{
            background-color: #f0c14b;
        }
    }
    p{
        font-size:0.7rem;
    }
  
`

export const LoginText = styled.p`
    margin:10px 0;
    font-size: 2vmin;
`
export const ErrStyle = styled.p`
    border:2px solid lightpink;
    color: firebrick;
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    &:focus{
        outline:none;
        border:2px solid lightpink;
        box-shadow:0 0 10px #f0c14b; 
    }
`
export const Valid = styled.p`
    color: limegreen;
`
export const InValid = styled.p`
    color: red;
`
export const Instruction = styled.p`
    font-size: 0.75rem;
    border-radius: 0.5rem;
    background: #000;
    color: #fff;
    padding: 0.25rem;
    position: relative;
    & > svg{
        margin-right:0.5rem;
    }
`
export const Line = styled.h5`
    width: 100%; 
    text-align: center; 
    border-bottom: 1px solid #000; 
    line-height: 0.1em;
    margin: 20px 0; 
    span{
        background:rgb(234, 237, 237);
        padding:0 10px; 
    }
`
   



