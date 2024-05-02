import styled from "styled-components";

export const AppNavigationStyled = styled.nav`
  /* Box */
  margin-block: 3rem 2rem;

  ul {
    border-radius: 7px;
    display: flex;
    background-color: var(--color-dark--2);
  }

  a:link,
  a:visited {
    /* Font */
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;

    /* Box */
    padding: 0.5rem 2rem;
    border-radius: 5px;
  }

  a.active {
    background-color: var(--color-dark--0);
  }
`;
