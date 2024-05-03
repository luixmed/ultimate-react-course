import styled from "styled-components";

export const CityInfoStyled = styled.div`
  /* Box */
  width: 100%;
  max-height: 70%;
  padding: 2rem 3rem;
  border-radius: 7px;

  /* Style */
  background-color: var(--color-dark--2);
  overflow: hidden;

  /* Layout */
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div:not(:last-child) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h6 {
    color: var(--color-light--1);
    font-size: 1.1rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.9rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      font-size: 3.2rem;
      line-height: 1;
    }
  }

  p {
    font-size: 1.6rem;
  }

  a:link,
  a:visited {
    color: var(--color-brand--1);
    font-size: 1.6rem;
  }
`;
