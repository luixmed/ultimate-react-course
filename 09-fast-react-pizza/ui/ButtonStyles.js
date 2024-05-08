import styled, { css } from "styled-components";

const base = css`
  /* Font */
  color: rgb(41 37 36);
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;

  /* Box */
  display: inline-block;
  border: none;
  border-radius: 10rem;

  /* Style */
  background-color: #facc15;
  cursor: pointer;

  /* Animation */
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgb(253 224 71);
  }

  &:focus {
    outline: 2px solid rgb(253 224 71);
    outline-offset: 2px;
    background-color: rgb(253 224 71);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const secondary = css`
  /* Font */
  color: rgb(168 162 158);

  /* Box */
  padding: 1.4rem 2.4rem;
  border: 2px solid rgb(214 211 209);

  /* Style */
  background-color: transparent;

  &:hover {
    color: rgb(41 37 36);
    background-color: rgb(214 211 209);
  }

  &:focus {
    color: rgb(41 37 36);
    background-color: rgb(214 211 209);
    outline: 2px solid rgb(214 211 209);
    outline-offset: 2px;
  }
`;

const styles = {
  primary: css`
    ${base};

    /* Box */
    padding: 1.6rem 2.4rem;
  `,
  secondary: css`
    ${base};
    ${secondary};
  `,
  small: css`
    ${base};

    font-size: 1.2rem;
    padding: 1rem 2rem;
  `,
  round: css`
    ${base};

    /* Box */
    width: 3.6rem;
    height: 3.6rem;
  `,
};

export const ButtonStyled = styled.button`
  ${(props) => styles[props.type]}
`;
