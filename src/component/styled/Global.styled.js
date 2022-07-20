import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background-color: rgb(234, 237, 237);
        font-family: "Poppins", san-serif;
        font-size: 16px;
    }
    a {
        text-decoration: none;
    }
    hr{
        border-top: 1px solid $clr-accent;
        border-bottom-style:none;
        border-left-style: none;
        border-right-style: none;
        margin:2rem 0;
    }
`

