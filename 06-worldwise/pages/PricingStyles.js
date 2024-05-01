import styled from "styled-components";

export const PricingStyled = styled.main`
  /* Box */
  min-height: calc(100vh - 5rem);
  padding: 2.5rem 5rem;
  margin: 2.5rem;

  /* Styles */
  background-color: var(--color-dark--1);

  section {
    /* Box */
    width: clamp(80rem, 80%, 90rem);
    margin: 6rem auto;

    /* Layout */
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 7rem;
  }

  img {
    width: 100%;
  }

  h2 {
    font-size: 4rem;
    line-height: 1.2;
    margin-bottom: 3rem;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  section a {
    margin-top: 2rem;
  }
`;
