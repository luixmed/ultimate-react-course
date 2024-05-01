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

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: inline-block;
    height: auto;
  }

  label {
    font-size: 1.6rem;
    font-weight: 600;
  }

  input,
  textarea {
    /* Box */
    width: 100%;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 5px;

    /* Font */
    font-family: inherit;
    font-size: 1.6rem;

    /* Styles */
    background-color: var(--color-light--3);

    /* Animation */
    transition: all 0.2s;
  }

  input:focus {
    outline: none;
    background-color: #fff;
  }

  .cta:link,
  .cta:visited {
    /* Box */
    display: inline-block;
    padding: 1rem 3rem;
    border-radius: 5px;

    /* Styles */
    background-color: var(--color-brand--2);

    /* Font */
    color: var(--color-dark--1);
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`;
