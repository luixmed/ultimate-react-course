import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
  --color-darkest: #343a40;
  --color-dark: #495057;
  --color-medium: #ced4da;
  --color-light: #f1f3f5;

  --color-theme: #1098ad;
  --color-accent: #ffa94d;
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
    color: var(--color-light);
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    /* Box */
    min-height: 100vh;
    padding: 3.2rem;

    /* Styles */
    background-color: var(--color-darkest);
  }

  button {
    /* General reset */
    cursor: pointer;
    display: inline-block;
    color: inherit;

    /* Font */
    font-size: 2rem;

    /* Box */
    padding: 1.2rem 2.4rem;
    border: 2px solid var(--color-dark);
    border-radius: 100px;

    /* Style */
    background-color: var(--color-dark);

    /* Animation */
    transition: all 0.3s;
  }

  button:not([disabled]):hover {
    background-color: var(--color-darkest);
  }

  button[disabled]:hover {
    cursor: not-allowed;
  }

  ul {
    list-style: none;
  }
`;
