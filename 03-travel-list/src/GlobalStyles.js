import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    color: #555;
  }

  body{
    font-family: sans-serif;
    font-size: 1.6rem;
  }
`;

export default GlobalStyles;
