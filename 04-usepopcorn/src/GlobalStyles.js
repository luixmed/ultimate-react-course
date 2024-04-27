import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: sans-serif;
  }

  body {
    font-size: 1.6rem;

    /* Box */
    padding: 2.4rem;

    /* Style */
    background-color: #212529;
  }

  img {
    display: inline-block;
    max-width: 100%;
    height: auto;
  }

  button{
    display: inline-block;
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  input {
    font-family: inherit;
    border: none;
    outline: none;
  }
`;
