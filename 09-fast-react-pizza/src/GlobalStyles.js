import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
    /* Font */
    font-family: "Roboto Mono", monospace;
    font-size: 1.6rem;
    color: #44403C;

    /* ERASE */
    background-color: #f5f5f4;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  input {
    /* Font */
    font-size: 1.4rem;
    font-family: inherit;

    /* Box */
    border: 1px solid rgb(231 229 228);
    padding: 1.2rem 2.4rem;
    border-radius: 10rem;

    /* Animation */
    transition: all 0.3s;

    &::placeholder {
      color: rgb(168 162 158);
    }

    &:focus {
      outline: 3px solid #F3C212B2;
    }
  }
`;
