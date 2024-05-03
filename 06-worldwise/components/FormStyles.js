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
`;
