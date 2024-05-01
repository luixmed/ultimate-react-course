import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-brand--1: #ffb545;
    --color-brand--2: #00c46a;

    --color-dark--0: #242a2e;
    --color-dark--1: #2d3439;
    --color-dark--2: #42484d;
    --color-light--1: #aaa;
    --color-light--2: #ececec;
    --color-light--3: #d6dee0;
  }

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
    font-family: "Manrope", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--color-light--2);
    line-height: 1.6;

  }
`;
