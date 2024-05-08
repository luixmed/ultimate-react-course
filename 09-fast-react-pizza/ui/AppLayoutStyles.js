import styled from "styled-components";

export const AppLayoutStyled = styled.div`
  /* Box */
  height: 100vh;

  /* Layout */
  display: grid;
  grid-template-rows: auto 1fr auto;

  main {
    width: 100%;
    max-width: 76.8rem;
    margin-inline: auto;
  }
`;
