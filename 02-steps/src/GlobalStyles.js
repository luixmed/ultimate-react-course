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
  }

  body {
    font-family: sans-serif;
    font-size: 1.6rem;
    min-height: 100vh;
    background-image: linear-gradient(to right bottom,#ffa94d, #f76707);

    display: grid;
    place-content: center;

    position: relative;
  }

  button{
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }
`;

export default GlobalStyles;
