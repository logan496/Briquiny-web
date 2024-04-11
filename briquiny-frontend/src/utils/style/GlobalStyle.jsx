import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }
    *::-webkit-scrollbar{
        width: 0px;
        height: 0px;
    }
`

function GlobalStyle(){
    return <StyledGlobalStyle />
}

export default GlobalStyle;