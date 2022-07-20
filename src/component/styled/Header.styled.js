import styled from "styled-components"

export const HeaderStyled = styled.div`   
    height: 70px;
    display: flex;
    align-items: center;
    background-color: #131921;
    position: sticky;
    top:0;
    z-index: 99;
    ${'' /* white-space:nowrap; */}
    padding:0 5px;
`
export const Logo = styled.img`
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
    @media(max-width:768px){
        width:60px;
        margin: 0 5px;
    }
` 
export const Search = styled.div`
    display:flex;
    flex:1;
    align-items: center;
    border-radius: 24px;
    input{
        height: 30px;
        padding: 0.5em;
        border: none;
        width: 100%
    }
    div{
        background-color: #cd9042;
        height: 30px;
        padding: 0.2em;
    }
    @media (max-width:768px){
        display:none;
    }
`
export const Nav = styled.nav`
    display: flex;
    @media (max-width: 768px){
        margin-left:auto;
        align-items:center;
    }
`
export const Options = styled.div`
    display:flex;
    flex-direction: column;
    margin: 0 10px;
    color:white;
    @media (max-width:768px){
        margin: 0 4px;
    }
`
export const OptionOne = styled.span`
     font-size: 10px;
`
export const Optiontwo = styled.span`
    font-size: 0.8rem;
    font-weight: 800;
    @media (max-width:768px){
        font-size: 0.6rem;
    }
`

export const OptionBasket = styled.div`
    color:white;
    display:flex;
    align-items:center;
    div{
        display:flex;
        align-items:center;
    }
    
    @media(max-width:768px){
        flex-direction:column;
    }
`

export const BasketCount = styled.span`
    margin-inline: 10px;
    font-size: 13px;
    font-weight: 800;
    @media(max-width:768px){
        margin-inline: 4px;
        font-size: 0.6em;
    }
`

