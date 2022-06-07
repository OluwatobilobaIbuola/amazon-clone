import styled from "styled-components";

export const HomeStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-inline: auto;
    max-width: 1500px;
`
export const HomeFlex = styled.div`
    display: flex;
    z-index: 1;
    column-gap: 10px;
    @media (max-width: 768px){
      flex-direction: column;
      row-gap: 1em; 
    }
`
export const BgImage = styled.img`
    width: 100%;
    z-index: -1;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
`

