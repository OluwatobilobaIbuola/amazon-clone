import styled from "styled-components"

export const HeaderStyled = styled.div`   
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #131921;
    position: sticky;
    top:0;
    z-index: 100;
`
export const Logo = styled.img`
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
` 
export const Search = styled.div`
    display:flex;
    flex:1;
    align-items: center;
    border-radius: 24px;
    @media (max-width: 768px){
        display:none;
    }
    input{
        height: 12px;
        padding: 10px;
        border: none;
        width: 100%
    }
    div{
        background-color: #cd9042;
        height: 22px;
        padding: 5px;
    }
`
export const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 768px){
        margin-left:auto
    }
`

export const Options = styled.div`
    display:flex;
    flex-direction: column;
    margin: 0 10px;
    color:white;
`
export const OptionOne = styled.span`
     font-size: 10px;
`
export const Optiontwo = styled.span`
    font-size: 13px;
    font-weight: 800;
`

export const OptionBasket = styled.div`
    display: flex;
    align-items: center;
    color:white;
`

export const BasketCount = styled.span`
    margin-inline: 10px;
    font-size: 13px;
    font-weight: 800;
`

