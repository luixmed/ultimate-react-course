import styled from "styled-components";

export const OrderItemStyled = styled.li`
  /* Box */
  padding-block: 1.2rem;

  &:not(:last-child) {
    border-bottom: 1px solid rgb(231 229 228);
  }

  & > div {
    /* Font */
    font-size: 1.4rem;

    /* Layout */
    display: flex;
    align-items: ceenter;
    justify-content: space-between;
    gap: 1.6rem;

    p > span:first-child {
      font-weight: 700;
    }

    p:last-child {
      font-weight: 700;
    }
  }
`;
