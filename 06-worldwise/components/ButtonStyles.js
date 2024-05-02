import styled, { css } from "styled-components";

const types = {
  primary: css`
    color: var(--color-dark--1);
    font-weight: 700;
    background-color: var(--color-brand--2);
  `,
  back: css`
    font-weight: 600;
    border: 1px solid currentColor;
    background: none;
  `,
  position: css`
    /* Font */
    color: var(--color-dark--1);
    font-size: 1.4rem;
    font-weight: 700;

    /* Layout */
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;

    /* Styles */
    background-color: var(--color-brand--2);
    box-shadow: 0 0.4rem 1.2rem rgba(36, 42, 46, 0.16);
  `,
};

export const ButtonStyled = styled.button`
  /* Font */
  font-size: 1.5rem;
  text-transform: uppercase;

  /* Box */
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 5px;

  ${(props) => types[props.type]}
`;
