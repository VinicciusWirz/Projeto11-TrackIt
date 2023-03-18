import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}
::-webkit-scrollbar {
  display: none;
}
button, li{
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    tap-highlight-color: transparent;
}
`;
export default GlobalStyle;