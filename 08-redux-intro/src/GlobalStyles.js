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
    font-size: 1.6rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    /* Box */
    margin: 40px;
  }

  input,
  select {
    /* Font */
    font: inherit;
    /* Box */
    padding: 4px 8px;
    margin: 0 8px;
  }

  button {
    cursor: pointer;
    
    /* Font */
    font-weight: bold;
    text-transform: uppercase;

    /* Box */
    padding: 6px 8px;
  }
`;
