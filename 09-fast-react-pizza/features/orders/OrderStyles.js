import styled from "styled-components";

export const OrderStyled = styled.div`
  padding: 2.4rem 1.6rem;

  & > *:not(:last-child) {
    margin-bottom: 3.2rem;
  }

  & > div:first-child {
    /* Layout */
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 2rem;
      font-weight: 600;
    }

    span {
      /* Font */
      font-size: 1.4rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.36px;

      /* Box */
      padding: 4px 1.2rem;
      border-radius: 10rem;
      margin-right: 8px;

      &:first-child {
        color: rgb(254 242 242);
        background-color: rgb(239 68 68);
      }

      &:last-child {
        color: rgb(240 253 244);
        background-color: rgb(34 197 94);
      }
    }
  }

  & > div:nth-child(2) {
    /* Box */
    padding: 2rem 2.4rem;

    /* Layout */
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Style */
    background-color: rgb(231 229 228);

    p:first-child {
      font-weight: 500;
    }

    p:last-child {
      color: rgb(120 113 107);
      font-size: 1.2rem;
    }
  }

  & > ul {
    border-block: 1px solid rgb(231 229 228);
  }

  & > div:last-child {
    /* Box */
    padding: 2rem 2.4rem;

    & > *:not(:last-child) {
      margin-bottom: 0.8rem;
    }

    /* Style */
    background-color: rgb(231 229 228);

    p {
      color: rgb(87 83 78);
      font-size: 1.4rem;
      font-weight: 500;
    }

    p:last-child {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }
`;
