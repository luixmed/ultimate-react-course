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

const styles = {
  primary: css`
    ${base};

    /* Box */
    padding: 1.6rem 2.4rem;
  `,
};

export const ButtonStyled = styled.button`
  ${(props) => styles[props.type]}
`;
