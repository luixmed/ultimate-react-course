import styled from "styled-components";

export const PageNavigationStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  a:link,
  a:visited {
    /* Font */
    color: var(--color-light--2);
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  a.active {
    color: var(--color-brand--2);
  }

  a.ctaLink:link,
  a.ctaLink:visited {
    /* Font */
    color: var(--color-dark--0);

    /* Box */
    padding: 0.8rem 2rem;
    border-radius: 7px;

    /* Styles */
    background-color: var(--color-brand--2);
  }
`;
