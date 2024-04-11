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
>>>>>>> 4a58c03dd4b2802eb471da92be09d5ee020ea35b
    }
`

function GlobalStyle(){
    return <StyledGlobalStyle />
}

export default GlobalStyle;