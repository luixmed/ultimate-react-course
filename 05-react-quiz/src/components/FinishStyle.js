import styled from "styled-components";

export const FinishScreenStyled = styled.div`
  text-align: center;

  p:first-child {
    /* Font */
    color: var(--color-light);
    font-size: 2rem;
    font-weight: 500;

    /* Box */
    padding: 2rem 0;
    border-radius: 100px;
    margin-bottom: 1.6rem;

    /* Style */
    background-color: var(--color-theme);

    span {
      font-size: 2.2rem;
      margin-right: 4px;
    }
  }

  p:last-child {
    font-size: 1.8rem;
  }

  button {
    margin-top: 4.8rem;
    float: right;
  }
`;
