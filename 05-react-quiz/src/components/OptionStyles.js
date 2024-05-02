import styled from "styled-components";

export const OptionStyled = styled.li`
  button {
    width: 100%;
    text-align: left;

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

    &.answer {
      transform: translateX(2rem);
    }

    &:not([disabled]):hover {
      transform: translateX(1.2rem);
    }
  }
`;
