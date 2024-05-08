import styled from "styled-components";

export const PizzaStyled = styled.li`
  /* Box */
  border-bottom: 1px solid rgb(231 229 228);
  padding-block: 0.8rem;

  /* Layout */
  display: flex;
  gap: 1.6rem;

  img {
    height: 9.6rem;
  }

  & > div {
    /* Box */
    padding-top: 2px;

    /* Layout */
    flex-grow: 1;

    display: flex;
    flex-direction: column;

    & > p:first-child {
      font-weight: 500;
    }

    & > p:nth-child(2) {
      /* Font */
      color: rgb(120 113 108);
      font-size: 1.4rem;
      font-style: italic;
      text-transform: uppercase;
    }

    div {
      /* Font */
      font-size: 1.4rem;

      /* Box */
      margin-top: auto;

      /* Layout */
      display: flex;
      align-items: center;
      justify-content: space-between;

      p.sold-out {
        color: rgb(120 113 108);
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
`;
