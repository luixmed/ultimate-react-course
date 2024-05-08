import styled from "styled-components";

export const CartItemStyled = styled.li`
  /* Box */
  padding-block: 1.2rem;

  /* Layout */
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    /* Layout */
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.4rem;

    & > p {
      font-size: 1.4rem;
      font-weight: 700;
    }
  }
`;
