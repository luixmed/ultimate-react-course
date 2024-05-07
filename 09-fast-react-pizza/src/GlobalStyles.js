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

  input {
    /* Font */
    font-size: 1.4rem;
    font-family: inherit;

    /* Box */
    border: none;
    padding: 0.8rem 1.6rem;
    border-radius: 10rem;


    /* Style */
    background-color: #fef9c3;

    transition: all 0.3s;

    &::placeholder {
      color: rgb(168 162 158);
    }

    &:focus {
      outline: none;
    }
  }
`;
