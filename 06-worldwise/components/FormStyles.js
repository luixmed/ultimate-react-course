import styled from "styled-components";

export const FormStyled = styled.form`
  /* Layout */
  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* Box */
  width: 100%;
  padding: 2rem 3rem;
  border-radius: 7px;

  /* Style */
  background-color: var(--color-dark--2);

  &.loading {
    opacity: 0.3;
  }

  div:not(:last-child) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    position: relative;
  }

  span {
    font-size: 2.8rem;

    /* Layout */
    position: absolute;
    top: 2.7rem;
    right: 1rem;
  }

  div:last-child {
    display: flex;
    justify-content: space-between;
  }

  &.loading button {
    pointer-events: none;

    color: var(--color-dark--0);
    border: 1px solid var(--color-light--1);
    background-color: var(--color-light--1);
  }
`;
