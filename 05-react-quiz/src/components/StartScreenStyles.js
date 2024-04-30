import styled from "styled-components";

export const StartScreenStyled = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3.6rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 4rem;
  }

  button {
    font-size: 2rem;

    /* Box */
    padding: 1.2rem 2.4rem;
    border: 2px solid var(--color-dark);
    border-radius: 100px;

    /* Style */
    background-color: var(--color-dark);
  }
`;
