import styled from "styled-components";

export const CreateOrderStyled = styled.div`
  /* Box */
  padding: 2.4rem 1.6rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 3.2rem;
  }
`;

export const FormStyled = styled.form`
  & > div {
    /* Box */
    margin-bottom: 2rem;

    display: flex;
    align-items: center;

    label {
      flex-basis: 16rem;
    }

    & > input:not([type="checkbox"]),
    & > div {
      flex-grow: 1;

      & > input {
        width: 100%;
      }

      p {
        /* Font */
        color: rgb(185 28 28);
        font-size: 1.2rem;
        text-align: center;
        line-height: 1.6rem;

        /* Box */
        padding: 8px;
        border-radius: 6px;
        margin-top: 0.8rem;

        /* Style */
        background-color: rgb(254 226 226);
      }
    }

    &:has(span) {
      position: relative;

      span {
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 50;
      }
    }
  }

  & > div:nth-child(4) {
    margin-bottom: 4.8rem;
    gap: 2rem;

    input {
      /* Box */
      width: 2.4rem;
      height: 2.4rem;

      /* Style */
      accent-color: #facc15;
    }

    label {
      flex-grow: 1;
      font-weight: 500;
    }
  }
`;
