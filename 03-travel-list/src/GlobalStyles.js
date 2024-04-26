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

  body{
    color: #555;
    font-family: sans-serif;
    font-size: 1.6rem;
  }

  ul {
    list-style: none;
  }

  button{
    display: inline-block;
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  input, select{
    border: none;
    outline: none;
    font-family: inherit;
  }
`;

export default GlobalStyles;
