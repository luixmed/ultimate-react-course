import styled from "styled-components";

export const LoginStyled = styled.main`
  /* Box */
  min-height: calc(100vh - 5rem);
  padding: 2.5rem 5rem;
  margin: 2.5rem;

  /* Styles */
  background-color: var(--color-dark--1);

  form {
    /* Box */
    width: 48rem;
    padding: 2rem 3rem;
    border-radius: 7px;
    margin: 8rem auto;

    /* Style */
    background-color: var(--color-dark--2);

    /* Layout */
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  div:not(:last-child) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
