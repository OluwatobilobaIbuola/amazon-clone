import styled from "styled-components";

export const HomeStyled = styled.div`
    max-width:1500px;
    margin-inline:auto;
`
export const HomeFlex = styled.div`
    width:97%;
    margin-inline:auto;
    display:flex;
    column-gap: 10px;
    padding:10px 5px;
    overflow-x:auto;
    margin-bottom:1em;
    &::-webkit-scrollbar-button{
        display:none;
    }
    &::-webkit-scrollbar{
        height: 8px;
    }
    &::-webkit-scrollbar-thumb{
        background-color:gray;
        border-radius:4px
    }
    @media(max-width:768px){
        &::-webkit-scrollbar{
        display:none
    }
    }  
`
export const CategoryFlex = styled.div`
    display:flex;
    margin-inline:auto;
    column-gap: 20px;
    row-gap:20px;
    padding:10px 5px;
    margin-bottom:1em;
    overflow-x:auto;
    P{  
        color:#007185;
        font-size:0.8rem;
        font-weight:bold;
        &:hover{
            color:#c40000;
            text-decoration:underline;
        }
        @media(max-width:768px){
            font-size:0.5rem;
        }
    }
    h5{
        font-size:1.2rem;
        @media(max-width:768px){
            font-size:0.7rem;
        }
    }
    &::-webkit-scrollbar-button{
        display:none;
    }
    &::-webkit-scrollbar{
        height: 8px;
    }
    &::-webkit-scrollbar-thumb{
        background-color:gray;
        border-radius:4px
    }
    @media(max-width:768px){
        &::-webkit-scrollbar{
            display:none
        }
    }
    
    > div {
        align-items: initial;
        min-height:350px;
        flex:1;
        @media(max-width:768px){
            min-width:180px;
            min-height:180px;
        }
        img{
            min-height:250px;
            object-fit: contain;
            @media(max-width:768px){
                min-height:125px;
            }
        }
    }
`
export const BgImage = styled.img`
    width: 100%;
    z-index:-1;
    margin-bottom: -200px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    @media(max-width:768px){
        margin-bottom:-50px;
    }
`

