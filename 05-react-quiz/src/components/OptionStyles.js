import styled from "styled-components";

export const OptionStyled = styled.li`
  button {
    /* Font */
    text-align: left;

    /* Box */
    width: 100%;

    &:not([disabled]):hover {
      transform: translateX(1.2rem);
    }

    &.answered {
      transform: translateX(2rem);
    }

    &.correct {
      background-color: var(--color-theme);
      border: 2px solid var(--color-theme);
      color: var(--color-light);
    }

    &.wrong {
      background-color: var(--color-accent);
      border: 2px solid var(--color-accent);
      color: var(--color-darkest);
    }
  }
`;
